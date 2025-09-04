# Guide pour visualiser le site Agence L sur ton ordinateur

## Étape 1 : Installer Node.js (si pas déjà fait)

1. Va sur https://nodejs.org/
2. Clique sur le gros bouton vert "LTS" (version stable)
3. Télécharge et installe (suivre les étapes, tout laisser par défaut)
4. Redémarre ton ordinateur

## Étape 2 : Télécharger le projet depuis GitHub

### Option A : Télécharger le ZIP (plus simple)

1. Va sur le lien GitHub que je t'ai envoyé
2. Clique sur le bouton vert **"Code"**
3. Clique sur **"Download ZIP"**
4. Décompresse le dossier sur ton bureau
5. Renomme le dossier en `agence-l` (plus simple)

### Option B : Cloner avec Git

```bash
git clone [URL_DU_REPO]
cd agence-l-detective
```

## Étape 3 : Ouvrir le terminal dans le dossier

### Sur Windows :

- Ouvre le dossier du projet
- Fais un clic droit dans le dossier (zone vide)
- Clique sur **"Ouvrir dans le terminal"** ou **"Git Bash here"**

### Sur Mac :

- Ouvre le Finder
- Va dans le dossier du projet
- Clic droit sur le dossier → **"Nouveau terminal au dossier"**

## Étape 4 : Installer et lancer le site

Dans le terminal qui s'est ouvert, tape ces commandes (une par une) :

**Première commande :**

```bash
npm install
```

⏱️ Attendre que ça finisse (1-3 minutes, tu verras plein de texte défiler)

**Deuxième commande :**

```bash
npm run dev
```

✅ Tu verras apparaître : `✓ Ready in XXs` et `- Local: http://localhost:3000`

## Étape 5 : Voir ton site !

1. Ouvre ton navigateur préféré (Chrome, Firefox, Safari...)
2. Dans la barre d'adresse, tape : **localhost:3000**
3. Appuie sur Entrée

🎉 **TON SITE EST VISIBLE !** 🎉

Tu devrais voir ton magnifique site avec le logo doré qui brille !

## Commandes utiles

**Pour arrêter le site :**

- Dans le terminal : **Ctrl + C** (Mac : **Cmd + C**)

**Pour relancer le site plus tard :**

```bash
npm run dev
```

(Pas besoin de refaire `npm install`)

**Pour voir sur ton téléphone :**

1. Assure-toi que ton téléphone est sur le même WiFi
2. Sur ton ordi, trouve ton adresse IP locale
3. Sur ton téléphone, tape : `[TON_IP]:3000`

## Problèmes fréquents et solutions

| Problème                             | Solution                                    |
| ------------------------------------ | ------------------------------------------- |
| "npm n'est pas reconnu"              | Node.js n'est pas installé → retour étape 1 |
| "EADDRINUSE: address already in use" | Ferme tous les terminaux et réessaye        |
| Page blanche                         | Vide le cache : **Ctrl + F5**               |
| "Module not found"                   | Refais `npm install`                        |
| Rien ne se passe                     | Vérifie que tu es dans le bon dossier       |

## Modifier le site

- **Textes** : Les fichiers sont dans `/components`
- **Couleurs** : Dans `tailwind.config.ts`
- **Logo** : Remplace `/public/logo.png`
- **Favicon** : Remplace `/public/favicon.ico`

Chaque modification sera visible instantanément après sauvegarde !

---

💡 **Astuce :** Garde le terminal ouvert pendant que tu regardes le site

📞 **Besoin d'aide ?** N'hésite pas à me demander !

_Bon visionnage de ton super site !_ ✨
