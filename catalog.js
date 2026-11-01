/*
  CATALOGUE À MODIFIER
  - Ajoute/retire des équipes dans les tableaux ci-dessous.
  - Pour ajouter un maillot, ajoute un objet dans PRODUCTS.
  - Mets uniquement les tailles réellement proposées pour ce produit.
  - image: chemin d'une photo autorisée, ex. "assets/allemagne-domicile.jpg"
  - Ne renseigne aucun prix : le site n'en affiche pas.
*/
const NATIONAL_REGIONS = [
  {name:"Europe", items:[
    ["Allemagne","🇩🇪"],["France","🇫🇷"],["Angleterre","🏴"],["Italie","🇮🇹"],["Portugal","🇵🇹"],["Pays-Bas","🇳🇱"],["Espagne","🇪🇸"],["Belgique","🇧🇪"],["Irlande","🇮🇪"],["Pologne","🇵🇱"],["Écosse","🏴"],["Danemark","🇩🇰"],["Finlande","🇫🇮"],["Pays de Galles","🏴"],["Serbie","🇷🇸"],["Grèce","🇬🇷"],["Norvège","🇳🇴"],["Croatie","🇭🇷"]
  ]},
  {name:"Afrique", items:[["Maroc","🇲🇦"],["Algérie","🇩🇿"],["Tunisie","🇹🇳"],["Sénégal","🇸🇳"],["Côte d’Ivoire","🇨🇮"],["Cameroun","🇨🇲"],["Nigeria","🇳🇬"],["Égypte","🇪🇬"],["Ghana","🇬🇭"],["Afrique du Sud","🇿🇦"]]},
  {name:"Amériques",items:[["Argentine","🇦🇷"],["Brésil","🇧🇷"],["Uruguay","🇺🇾"],["Colombie","🇨🇴"],["Mexique","🇲🇽"],["États-Unis","🇺🇸"],["Canada","🇨🇦"],["Chili","🇨🇱"]]},
  {name:"Asie et Océanie",items:[["Japon","🇯🇵"],["Corée du Sud","🇰🇷"],["Arabie saoudite","🇸🇦"],["Australie","🇦🇺"],["Qatar","🇶🇦"]]}
];
const CLUB_LEAGUES = [
  {name:"Angleterre",items:["Premier League","Championship","Autres clubs anglais"]},
  {name:"Espagne",items:["La Liga","Autres clubs espagnols"]},
  {name:"Italie",items:["Serie A","Autres clubs italiens"]},
  {name:"Allemagne",items:["Bundesliga","Autres clubs allemands"]},
  {name:"France",items:["Ligue 1","Autres clubs français"]},
  {name:"Autres championnats",items:["Portugal","Pays-Bas","Écosse","Belgique","Turquie","Arabie saoudite","Brésil","Argentine","États-Unis"]}
];
const OTHER_SPORTS = [
  {name:"NBA",emoji:"🏀",desc:"Basket-ball américain"},
  {name:"NFL",emoji:"🏈",desc:"Football américain"},
  {name:"MLB",emoji:"⚾",desc:"Baseball"},
  {name:"NHL",emoji:"🏒",desc:"Hockey sur glace"},
  {name:"Rugby",emoji:"🏉",desc:"Sélections et clubs"},
  {name:"Autres articles",emoji:"👕",desc:"Vestes, survêtements, rétro et accessoires"}
];
// Exemple de fiche : {name:"Allemagne domicile 2026",category:"national",group:"Allemagne",image:"assets/...",sizes:["S","M","L","XL","2XL","3XL"]}
// La liste reste volontairement vide jusqu'à vérification des vrais produits, photos et tailles.
const PRODUCTS = [];
