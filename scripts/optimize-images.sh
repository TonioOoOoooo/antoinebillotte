#!/bin/bash
# Script d'optimisation des images PNG → WebP
# Usage: ./scripts/optimize-images.sh

echo "🖼️  Optimisation des images pour antoinebillotte.com"
echo "=================================================="

# Vérifier si ImageMagick ou cwebp est installé
if ! command -v cwebp &> /dev/null && ! command -v convert &> /dev/null; then
    echo "❌ Erreur: ImageMagick ou webp non installé"
    echo "Installation:"
    echo "  - Ubuntu/Debian: sudo apt-get install webp imagemagick"
    echo "  - macOS: brew install webp imagemagick"
    exit 1
fi

# Créer le dossier de sortie
mkdir -p public/images/optimized

echo ""
echo "📸 Conversion des images..."

# Optimiser hero-transformation.png (2.5MB → ~300-400KB)
if [ -f "public/images/hero-transformation.png" ]; then
    echo "  → hero-transformation.png (2.5MB)"

    # Réduire résolution (actuellement trop haute)
    convert public/images/hero-transformation.png \
      -resize 1200x800 \
      -quality 85 \
      public/images/optimized/hero-transformation-temp.png

    # Convertir en WebP
    cwebp -q 80 public/images/optimized/hero-transformation-temp.png \
      -o public/images/optimized/hero-transformation.webp

    rm public/images/optimized/hero-transformation-temp.png

    SIZE=$(du -h public/images/optimized/hero-transformation.webp | cut -f1)
    echo "    ✅ Créé: hero-transformation.webp ($SIZE)"
fi

# Optimiser Antoine.png (476KB → ~60-80KB)
if [ -f "public/images/Antoine.png" ]; then
    echo "  → Antoine.png (476KB)"

    cwebp -q 85 public/images/Antoine.png \
      -o public/images/optimized/Antoine.webp

    SIZE=$(du -h public/images/optimized/Antoine.webp | cut -f1)
    echo "    ✅ Créé: Antoine.webp ($SIZE)"
fi

# Optimiser Robin.png (775KB → ~100-150KB)
if [ -f "public/images/Robin.png" ]; then
    echo "  → Robin.png (775KB)"

    cwebp -q 85 public/images/Robin.png \
      -o public/images/optimized/Robin.webp

    SIZE=$(du -h public/images/optimized/Robin.webp | cut -f1)
    echo "    ✅ Créé: Robin.webp ($SIZE)"
fi

echo ""
echo "✨ Optimisation terminée !"
echo ""
echo "📊 Comparaison des tailles:"
du -h public/images/*.png 2>/dev/null | grep -E "(hero|Antoine|Robin)"
echo "---"
du -h public/images/optimized/*.webp 2>/dev/null

echo ""
echo "📝 Prochaine étape:"
echo "  Les images WebP sont dans public/images/optimized/"
echo "  Le code a été mis à jour pour les utiliser automatiquement"
