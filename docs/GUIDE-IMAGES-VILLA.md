# 🖼️ Guide de Placement des Images - Villa Montpellier

## 📂 Structure des Dossiers

Toutes les images doivent être placées dans :
```
public/images/villa/
```

---

## 🎯 Mapping Complet des Images

### Images Obligatoires

| Fichier à créer | Photo à utiliser | Format | Résolution optimale |
|----------------|------------------|--------|---------------------|
| `hero-pool.jpg` | Photo **Jardin** ou **Piscine** (la plus belle vue d'ensemble) | JPG | 1920x1080px |
| `hero-pool.webp` | Conversion WebP de hero-pool.jpg | WebP | 1920x1080px |
| `salon.jpg` | Photo **Salon** (canapé gris) | JPG | 1200x1600px |
| `salon.webp` | Conversion WebP | WebP | 1200x1600px |
| `cuisine.jpg` | Photo **Cuisine entière** (îlot central) | JPG | 1200x1200px |
| `cuisine.webp` | Conversion WebP | WebP | 1200x1200px |
| `repas.jpg` | Photo **Espace repas** (table noire) | JPG | 1200x1200px |
| `repas.webp` | Conversion WebP | WebP | 1200x1200px |
| `patio.jpg` | Photo **Patio** (ambiance soirée) | JPG | 1200x1600px |
| `patio.webp` | Conversion WebP | WebP | 1200x1600px |
| `chambre1.jpg` | Photo **Chambre 1** (papier peint floral bleu) | JPG | 1200x900px |
| `chambre1.webp` | Conversion WebP | WebP | 1200x900px |
| `chambre5.jpg` | Photo **Chambre 5** (lits superposés) | JPG | 1200x900px |
| `chambre5.webp` | Conversion WebP | WebP | 1200x900px |
| `sdb-balneo.jpg` | Photo **Salle de bains 3** (baignoire balnéo) | JPG | 1200x900px |
| `sdb-balneo.webp` | Conversion WebP | WebP | 1200x900px |

---

## 🚀 Méthode d'Optimisation Rapide

### Option 1 : En Ligne (Sans Installation)

**Service recommandé** : [Squoosh.app](https://squoosh.app)

1. Ouvrir https://squoosh.app
2. Glisser-déposer votre photo
3. **Côté droit** : Sélectionner **WebP**
4. **Qualité** : 80-85%
5. **Redimensionner** selon résolution ci-dessus
6. Télécharger les 2 versions :
   - Version JPG (qualité 85%)
   - Version WebP (qualité 80%)

### Option 2 : Script Automatique

Si vous avez installé les outils d'optimisation :

```bash
# Depuis la racine du projet
./scripts/optimize-images.sh
```

---

## 📋 Checklist de Vérification

Après avoir placé toutes les images :

- [ ] Toutes les images JPG sont dans `public/images/villa/`
- [ ] Toutes les images WebP sont générées
- [ ] Taille hero-pool.jpg < 500KB
- [ ] Tailles des autres images < 300KB chacune
- [ ] Les images s'affichent correctement (test : `npm run dev`)
- [ ] Performance vérifiée (temps de chargement < 3s)

---

## 🎨 Exemples de Renommage

```
Vos fichiers actuels          →  Fichiers à créer
──────────────────────────────────────────────────
Jardin.jpg                    →  hero-pool.jpg + hero-pool.webp
Salon.jpg                     →  salon.jpg + salon.webp
Cuisine entière.jpg           →  cuisine.jpg + cuisine.webp
Espace repas.jpg              →  repas.jpg + repas.webp
Patio.jpg                     →  patio.jpg + patio.webp
Chambre 1.jpg                 →  chambre1.jpg + chambre1.webp
Chambre 5.jpg                 →  chambre5.jpg + chambre5.webp
Salle de bains entière 3.jpg  →  sdb-balneo.jpg + sdb-balneo.webp
```

---

## 💡 Conseils d'Optimisation

### Résolutions Recommandées

**Hero (Header principal)** :
- Desktop : 1920x1080px
- Mobile : Sera automatiquement redimensionné
- Poids cible : 300-500KB (WebP)

**Photos Grid (Galerie)** :
- Portrait : 1200x1600px
- Carré : 1200x1200px
- Poids cible : 150-250KB (WebP)

**Photos Chambres** :
- Paysage : 1200x900px
- Poids cible : 100-200KB (WebP)

### Compression

```bash
# Qualité recommandée
JPG : 85%
WebP : 80%
```

---

## 🔧 Si une Image Manque

Si vous n'avez pas encore toutes les photos, le code affichera un placeholder gris.

**Fallback** : Le code utilise automatiquement :
```tsx
<Image src="/images/villa/nom-fichier.jpg" ... />
```

Si le fichier n'existe pas, Next.js affichera une erreur 404 uniquement pour cette image.

---

## 📱 Test Responsive

Après avoir ajouté les images, testez sur :

1. **Desktop** (1920px+)
   ```bash
   npm run dev
   # Ouvrir http://localhost:3000/villa-montpellier
   ```

2. **Mobile** (375px)
   - Ouvrir DevTools (F12)
   - Mode responsive
   - Tester iPhone 12/13

3. **Tablet** (768px)
   - iPad Air
   - Orientation portrait & paysage

---

## ✅ Résultat Attendu

### Avant Optimisation
```
8 photos × ~800KB = 6.4MB
Temps de chargement : ~12s (3G)
```

### Après Optimisation (WebP)
```
8 photos WebP × ~180KB = 1.4MB
Temps de chargement : ~3s (3G)
Score PageSpeed : 85-95/100
```

**Gain** : -78% de poids 🚀

---

## 📞 Support

Si vous rencontrez un problème :

1. Vérifier que les fichiers sont bien dans `public/images/villa/`
2. Vérifier les noms de fichiers (minuscules, pas d'espaces)
3. Vérifier le format (JPG + WebP)
4. Relancer le serveur : `npm run dev`

---

## 🎯 Prochaine Étape

Une fois les images en place :

```bash
# 1. Tester localement
npm run dev

# 2. Build production
npm run build

# 3. Commit & Push
git add public/images/villa/
git commit -m "feat: add villa images"
git push origin main
```

Le déploiement automatique prendra le relais ! 🚀
