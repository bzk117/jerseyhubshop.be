FOOTBALL JERSEY — VERSION CLOUDFLARE PAGES

Ce dossier est un site statique prêt à être publié sur Cloudflare Pages.
Il s'agit d'un CATALOGUE DE PRÉSENTATION, pas d'une boutique :
- aucun prix
- aucun panier
- aucun paiement
- pas de commande en ligne
- les tailles sont affichées uniquement lorsqu'elles sont renseignées dans une fiche produit.

APERÇU / TEST LOCAL
Ouvre index.html dans un navigateur. Pour un test plus fidèle, lance un petit serveur local depuis ce dossier.

PUBLICATION GRATUITE SUR CLOUDFLARE PAGES (sans Git)
1. Connecte-toi sur https://dash.cloudflare.com/
2. Ouvre Workers & Pages, puis Create application > Pages.
3. Choisis l'option de téléversement direct / upload assets (le libellé peut évoluer).
4. Téléverse le contenu décompressé de ce dossier, avec index.html à la racine.
5. Déploie. Cloudflare fournira une adresse en pages.dev.

MODIFIER LE CATALOGUE
Ouvre catalog.js :
- NATIONAL_REGIONS : pays et régions.
- CLUB_LEAGUES : championnats / groupes de clubs.
- OTHER_SPORTS : autres sports et articles.
- PRODUCTS : fiches des maillots.

Exemple de fiche à ajouter dans PRODUCTS :
{
  name: "Allemagne domicile 2026",
  category: "national",
  group: "Allemagne",
  image: "assets/allemagne-domicile.jpg",
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
}

IMPORTANT
- Ne mets que les tailles confirmées pour le produit concerné.
- Pour les photos, utilise des images dont tu as l'autorisation d'utilisation.
- Les produits et tailles ne sont pas encore importés : la liste PRODUCTS est vide exprès afin de ne pas inventer de références.
- Remplace la section Coordonnées à compléter dans index.html par tes vrais contacts avant publication.
- Le nom Football Jersey et le logo couronne sont provisoires et modifiables.
