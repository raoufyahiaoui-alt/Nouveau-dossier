# PACK ROYALE

Site de collection de cartes de football, construit en HTML, CSS et JavaScript vanilla.

## Lancer le site
1. Décompressez `pack_royale.zip`.
2. Ouvrez `index.html` dans Chrome, Edge ou Firefox.
3. Les crédits et la collection sont sauvegardés dans le navigateur (`localStorage`).

## Fonctionnalités
- Boutique avec 5 boosters et prix en crédits.
- Ouverture de boosters avec tirage aléatoire pondéré par rareté.
- Collection avec recherche et filtres.
- Échange des doublons contre des crédits.
- Statistiques et progression.
- Interface responsive ordinateur / mobile.

## Personnalisation
- Catalogue : plus de 600 cartes additionnelles générées (joueurs fictifs) en plus des joueurs vedettes ; données dans `js/app.js`.
- Boosters, prix et probabilités : `js/app.js`, tableaux `packs` et `rarityWeights`.
- Couleurs et design : `css/style.css`.
- Pages et structure : `index.html`.

## À savoir
Ceci est une première version front-end autonome. Les données restent sur le navigateur utilisé. Pour une vraie boutique multi-utilisateur avec comptes, paiements, sauvegarde en ligne et administration, il faudra ajouter un backend et une base de données.


## Photos des joueurs
- Les cartes de Kylian Mbappé, Mohamed Salah, Virgil van Dijk, Achraf Hakimi, Riyad Mahrez, Cristiano Ronaldo, Lionel Messi, Lamine Yamal et Kevin De Bruyne affichent des photos réelles provenant de Wikimedia Commons.
- Les photos se chargent avec une connexion Internet. Les autres cartes générées sont fictives et gardent un avatar emoji.
- Les photos restent soumises aux licences et conditions indiquées sur leurs pages Wikimedia Commons.
