# 🖼️ Guide d'Optimisation des Images

## Problème Actuel

Les images PNG non optimisées représentent **3.7MB** de poids total :

| Image | Taille actuelle | Impact |
|-------|----------------|--------|
| `hero-transformation.png` | 2.5MB | 🔴 Critique |
| `Robin.png` | 775KB | 🟠 Élevé |
| `Antoine.png` | 476KB | 🟡 Moyen |

**Conséquence** : Temps de chargement > 5s sur connexion lente

---

## Solution Implémentée

### ✅ Code mis à jour

Le composant `HeroSection` utilise maintenant :
```tsx
<picture>
  <source srcSet="/images/optimized/hero-transformation.webp" type="image/webp" />
  <img src="/images/hero-transformation.png" alt="..." />
</picture>
```

**Avantages** :
- 🚀 WebP servi automatiquement sur navigateurs modernes (-70% de poids)
- 🔄 Fallback PNG pour anciens navigateurs (IE11, Safari ancien)
- ♿ Alt text descriptif pour accessibilité

---

## 📋 Comment Optimiser les Images

### Méthode 1 : Script Automatique (Recommandé)

```bash
# Installer les outils nécessaires
sudo apt-get install webp imagemagick  # Ubuntu/Debian
# ou
brew install webp imagemagick          # macOS

# Lancer le script d'optimisation
./scripts/optimize-images.sh
```

Le script va :
1. Réduire la résolution de `hero-transformation.png` (actuellement trop haute)
2. Convertir toutes les PNG en WebP avec qualité 80-85%
3. Placer les fichiers dans `public/images/optimized/`

### Méthode 2 : En Ligne (Sans Installation)

**Service recommandé** : [Squoosh.app](https://squoosh.app)

1. Ouvrir https://squoosh.app
2. Glisser-déposer `public/images/hero-transformation.png`
3. Sélectionner **WebP** dans le panneau de droite
4. Régler **Quality: 80**
5. Pour hero-transformation : réduire dimensions à **1200x800px**
6. Télécharger et placer dans `public/images/optimized/`

Répéter pour `Antoine.png` et `Robin.png`

---

## 📊 Résultats Attendus

### Avant Optimisation
```
hero-transformation.png : 2.5MB
Antoine.png            : 476KB
Robin.png              : 775KB
─────────────────────────────
TOTAL                  : 3.7MB ❌
```

### Après Optimisation
```
hero-transformation.webp : 300-400KB
Antoine.webp            : 60-80KB
Robin.webp              : 100-150KB
─────────────────────────────
TOTAL                   : ~500KB ✅
```

**Gain** : **-86% de poids** 🚀

---

## ✅ Checklist de Vérification

Après optimisation, vérifiez :

- [ ] Fichiers WebP créés dans `public/images/optimized/`
- [ ] Taille hero-transformation.webp < 500KB
- [ ] Taille Antoine.webp < 100KB
- [ ] Taille Robin.webp < 200KB
- [ ] Site fonctionne correctement (test local : `npm run dev`)
- [ ] Images affichées correctement sur Chrome (WebP)
- [ ] Images affichées correctement sur Safari (fallback PNG)

---

## 🔍 Test de Performance

### Avant Déploiement

```bash
# Build production
npm run build

# Vérifier taille du bundle
du -sh out/
```

### Après Déploiement

Tester avec **Google PageSpeed Insights** :
```
https://pagespeed.web.dev/
```

**Score attendu** : 85-95/100 (au lieu de 45-60)

---

## 📝 Notes

- Le code supporte déjà WebP avec `<picture>` tag
- Les images PNG originales sont conservées comme fallback
- Pas besoin de changer le code après optimisation
- Compatible avec tous les navigateurs

---

## 🚀 Déploiement

Après optimisation :

```bash
git add public/images/optimized/
git commit -m "feat: optimize images with WebP (-86% size reduction)"
git push origin main
```

Le déploiement automatique via GitHub Actions se chargera du reste !
