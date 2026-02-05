import { NextResponse } from 'next/server';

const ICAL_URL =
  'https://www.airbnb.fr/calendar/ical/49663347.ics?t=41e9edd10da544e180f569449baeeedb';

interface BlockedRange {
  start: string; // YYYY-MM-DD
  end: string;   // YYYY-MM-DD
}

function parseIcal(raw: string): BlockedRange[] {
  const ranges: BlockedRange[] = [];
  const events = raw.split('BEGIN:VEVENT');

  for (const block of events) {
    const dtstart = block.match(/DTSTART(?:;VALUE=DATE)?:(\d{8})/);
    const dtend = block.match(/DTEND(?:;VALUE=DATE)?:(\d{8})/);
    if (dtstart && dtend) {
      const s = dtstart[1];
      const e = dtend[1];
      ranges.push({
        start: `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`,
        end: `${e.slice(0, 4)}-${e.slice(4, 6)}-${e.slice(6, 8)}`,
      });
    }
  }

  return ranges;
}

export async function GET() {
  try {
    const res = await fetch(ICAL_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch calendar' },
        { status: 502 }
      );
    }

    const raw = await res.text();
    const blocked = parseIcal(raw);

    return NextResponse.json({ blocked }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Calendar fetch error' },
      { status: 500 }
    );
  }
}
