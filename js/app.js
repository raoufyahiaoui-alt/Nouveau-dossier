const packs=[
 {id:"bronze",name:"BRONZE",price:100,desc:"Pour commencer l'aventure",count:3,bg:"linear-gradient(145deg,#7c4c2c,#d49a62)",ink:"#fff0d7",color:"#a66d43"},
 {id:"silver",name:"SILVER",price:250,desc:"Un niveau supérieur",count:3,bg:"linear-gradient(145deg,#697787,#d8e0e8)",ink:"#17202a",color:"#aebdca"},
 {id:"gold",name:"GOLD",price:500,desc:"La qualité prend de la valeur",count:4,bg:"linear-gradient(145deg,#98702f,#f4d58a)",ink:"#38280d",color:"#d8b15e"},
 {id:"legend",name:"LEGEND",price:900,desc:"Pour les collectionneurs ambitieux",count:4,bg:"linear-gradient(145deg,#432c70,#ba8aff)",ink:"#fff",color:"#a77be4"},
 {id:"icon",name:"ICON",price:1500,desc:"Le meilleur du meilleur",count:5,bg:"linear-gradient(145deg,#164d51,#71e1c2)",ink:"#062b2c",color:"#5ed4bd"}
];
const players=[
 {id:1,name:"Kylian Mbappé",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kylian%20Mbappe%20France%20v%20Senegal%2016%20June%202026-391%20(cropped).jpg",club:"Real Madrid",country:"France",position:"Attaquant",rating:96,rarity:"Icon",emoji:"⚡"},
 {id:2,name:"Erling Haaland",club:"Manchester City",country:"Norvège",position:"Attaquant",rating:95,rarity:"Légendaire",emoji:"🦁"},
 {id:3,name:"Jude Bellingham",club:"Real Madrid",country:"Angleterre",position:"Milieu",rating:94,rarity:"Légendaire",emoji:"⭐"},
 {id:4,name:"Vinícius Jr",club:"Real Madrid",country:"Brésil",position:"Attaquant",rating:93,rarity:"Épique",emoji:"🔥"},
 {id:5,name:"Lamine Yamal",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Lamine%20Yamal%20in%202025.jpg",club:"FC Barcelone",country:"Espagne",position:"Attaquant",rating:92,rarity:"Épique",emoji:"🌟"},
 {id:6,name:"Mohamed Salah",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Mo%20Salah.jpg",club:"Liverpool",country:"Égypte",position:"Attaquant",rating:91,rarity:"Rare",emoji:"👑"},
 {id:7,name:"Kevin De Bruyne",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Kevin%20De%20Bruyne.jpg",club:"Napoli",country:"Belgique",position:"Milieu",rating:91,rarity:"Rare",emoji:"🎯"},
 {id:8,name:"Virgil van Dijk",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Virgilvandijk.jpg",club:"Liverpool",country:"Pays-Bas",position:"Défenseur",rating:90,rarity:"Rare",emoji:"🛡️"},
 {id:9,name:"Achraf Hakimi",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Achraf%20Hakimi%202024.jpg",club:"PSG",country:"Maroc",position:"Défenseur",rating:89,rarity:"Épique",emoji:"🚀"},
 {id:10,name:"Thibaut Courtois",club:"Real Madrid",country:"Belgique",position:"Gardien",rating:90,rarity:"Rare",emoji:"🧤"},
 {id:11,name:"Pedri",club:"FC Barcelone",country:"Espagne",position:"Milieu",rating:88,rarity:"Commun",emoji:"🎩"},
 {id:12,name:"Bukayo Saka",club:"Arsenal",country:"Angleterre",position:"Attaquant",rating:88,rarity:"Commun",emoji:"⚽"},
 {id:13,name:"Riyad Mahrez",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Riyad%20Mahrez.jpg",club:"Al-Ahli",country:"Algérie",position:"Attaquant",rating:87,rarity:"Épique",emoji:"🇩🇿"},
 {id:14,name:"Luka Modrić",club:"AC Milan",country:"Croatie",position:"Milieu",rating:89,rarity:"Légendaire",emoji:"🎻"},
 {id:15,name:"William Saliba",club:"Arsenal",country:"France",position:"Défenseur",rating:87,rarity:"Commun",emoji:"🧱"},
 {id:16,name:"Yassine Bounou",club:"Al-Hilal",country:"Maroc",position:"Gardien",rating:86,rarity:"Commun",emoji:"🧤"},
 {id:17,name:"Cristiano Ronaldo",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano%20Ronaldo%202018%20(cropped).jpg",club:"Al-Nassr",country:"Portugal",position:"Attaquant",rating:97,rarity:"Icon",emoji:"🐐"},
 {id:18,name:"Lionel Messi",photo:"https://commons.wikimedia.org/wiki/Special:FilePath/Lionel%20Messi.jpg",club:"Inter Miami",country:"Argentine",position:"Attaquant",rating:98,rarity:"Icon",emoji:"🐐"}
];

// Extension du catalogue : 600 cartes supplémentaires générées pour dépasser
// largement les 500 cartes. Ces joueurs additionnels sont fictifs.
const firstNames = [
 "Adam","Alex","Amine","André","Anthony","Arthur","Benjamin","Bilal","Carlos","Daniel",
 "David","Elias","Enzo","Ethan","Fabio","Gabriel","Hamza","Hugo","Ibrahim","Ismael",
 "Jamal","Jason","Jonathan","Karim","Leo","Lucas","Malik","Marco","Mehdi","Nathan",
 "Nicolas","Noah","Omar","Oscar","Rayan","Ryan","Sami","Samuel","Santiago","Theo",
 "Thomas","Yanis","Youssef","Zack","Adrian","Bastien","Cédric","Diego","Emilio","Farid"
];
const lastNames = [
 "Aït Ali","Alvarez","Andersen","Bakker","Benali","Bernard","Costa","Diallo","Duarte","Fernandes",
 "Garcia","Gomes","Haddad","Hernandez","Ivanov","Jensen","Kane","Kovacs","Laurent","Leroy",
 "Lopez","Martin","Mendes","Moreau","Nakamura","Ndiaye","Novak","Oliveira","Petrov","Rossi",
 "Sanchez","Santos","Silva","Traoré","Walker","Weber","Williams","Yilmaz","Zidane","Zimmermann",
 "Abdullah","Bennett","Cissé","Diop","Fischer","Giroud","Hassan","Kim","Moreno","Pereira"
];
const clubs = ["Paris SG","Real Madrid","FC Barcelone","Manchester City","Liverpool","Arsenal","Bayern Munich","Inter","AC Milan","Juventus","Borussia Dortmund","Atlético Madrid","Benfica","Ajax","Algeria FC","Olympique Lyonnais","Napoli","Chelsea","Marseille","Sporting CP"];
const countries = ["France","Algérie","Brésil","Argentine","Espagne","Portugal","Maroc","Sénégal","Côte d'Ivoire","Angleterre","Allemagne","Italie","Pays-Bas","Belgique","Japon","Croatie","Nigeria","Égypte","Uruguay","Canada"];
const positions = ["Attaquant","Milieu","Défenseur","Gardien"];
const emojis = ["⚽","⚡","🔥","⭐","🛡️","🎯","🚀","🧤","👑","🌟"];
const extraRarities = ["Commun","Rare","Épique","Légendaire","Icon"];
const extraCards = [];
let generatedId = 1000;
for (let i = 0; i < 600; i++) {
  const first = firstNames[i % firstNames.length];
  const last = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
  const suffix = Math.floor(i / (firstNames.length * lastNames.length));
  const name = suffix ? `${first} ${last} ${suffix + 1}` : `${first} ${last}`;
  const rating = 65 + ((i * 17) % 34);
  const rarity = rating >= 96 ? "Icon" : rating >= 91 ? "Légendaire" : rating >= 84 ? "Épique" : rating >= 76 ? "Rare" : "Commun";
  extraCards.push({
    id: generatedId++,
    name,
    club: clubs[(i * 7) % clubs.length],
    country: countries[(i * 11) % countries.length],
    position: positions[(i * 3) % positions.length],
    rating,
    rarity,
    emoji: emojis[(i * 5) % emojis.length]
  });
}
players.push(...extraCards);

const rarityColors={Commun:"#aab3c2",Rare:"#55a7e8",Épique:"#b68aff",Légendaire:"#e6b94f",Icon:"#5fe0c4"};
const rarityWeights={bronze:[65,25,9,1,0],silver:[45,32,17,5,1],gold:[25,35,25,12,3],legend:[10,25,35,22,8],icon:[3,12,25,35,25]};
const rarityOrder=["Commun","Rare","Épique","Légendaire","Icon"];
const state=loadState();let selectedPack=null,openedCards=[];
function loadState(){try{return JSON.parse(localStorage.getItem("packRoyaleSave"))||{coins:1500,inventory:{},packsOpened:0}}catch(e){return{coins:1500,inventory:{},packsOpened:0}}}
function save(){localStorage.setItem("packRoyaleSave",JSON.stringify(state));renderAll()}
function fmt(n){return n.toLocaleString("fr-FR")}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2500)}
function go(page){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById("page-"+page).classList.add("active");document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));document.getElementById("mainNav")?.classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});renderAll()}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".main-nav").classList.toggle("open"));
function packMarkup(p){return `<article class="pack-card"><div class="pack-visual" style="--pack-bg:${p.bg};--pack-ink:${p.ink}"><span class="pack-logo">${p.name==="LEGEND"?"★":p.name==="ICON"?"PR":p.name.slice(0,1)}</span><span class="pack-stars">✦ ✦ ✦</span></div><h3>${p.name} PACK</h3><p>${p.desc}</p><div class="pack-price">◆ ${fmt(p.price)} CR</div><button class="btn btn-gold" data-buy="${p.id}">OUVRIR · ${p.count} CARTES</button></article>`}
function renderPacks(){document.getElementById("homePacks").innerHTML=packs.slice(1).map(packMarkup).join("");document.getElementById("shopPacks").innerHTML=packs.map(packMarkup).join("");document.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>buyPack(b.dataset.buy)))}
function buyPack(id){const p=packs.find(x=>x.id===id);if(state.coins<p.price){toast("Pas assez de crédits !");return}state.coins-=p.price;selectedPack=p;openedCards=[];document.getElementById("openingTitle").textContent="UN NOUVEAU "+p.name+" PACK";document.getElementById("openingPackName").textContent=p.name+" PACK";document.getElementById("openingPack").style.setProperty("--modal-color",p.color);document.getElementById("openingMessage").textContent="Le suspense est à son comble...";document.getElementById("revealBtn").classList.remove("hidden");document.getElementById("finishOpening").classList.add("hidden");document.getElementById("revealedCards").innerHTML="";document.getElementById("openingPack").classList.remove("hidden");document.getElementById("openingModal").classList.add("open");document.getElementById("openingModal").setAttribute("aria-hidden","false");save()}
function drawPlayer(pack){const weights=rarityWeights[pack.id],roll=Math.random()*100;let sum=0,rarity="Commun";for(let i=0;i<weights.length;i++){sum+=weights[i];if(roll<=sum){rarity=rarityOrder[i];break}}let pool=players.filter(p=>p.rarity===rarity);if(!pool.length)pool=players;return pool[Math.floor(Math.random()*pool.length)]}
function cardMarkup(p){return `<article class="player-card" style="--rarity:${rarityColors[p.rarity]};--cardbg:${rarityColors[p.rarity]}18"><span class="card-rarity">${p.rarity.toUpperCase()}</span><b class="player-rating">${p.rating}</b><div class="player-avatar">${p.photo?`<img src="${p.photo}" alt="Photo de ${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.parentElement.textContent='${p.emoji}'">`:p.emoji}</div><h3>${p.name}</h3><div class="player-meta">${p.position} · ${p.country}</div><div class="player-club">${p.club}</div></article>`}
document.getElementById("revealBtn").addEventListener("click",()=>{if(!selectedPack)return;openedCards=Array.from({length:selectedPack.count},()=>drawPlayer(selectedPack));openedCards.forEach(p=>state.inventory[p.id]=(state.inventory[p.id]||0)+1);state.packsOpened++;document.getElementById("openingPack").classList.add("hidden");document.getElementById("openingMessage").textContent="Voici tes nouvelles cartes !";document.getElementById("revealedCards").innerHTML=openedCards.map(cardMarkup).join("");document.getElementById("revealBtn").classList.add("hidden");document.getElementById("finishOpening").classList.remove("hidden");save()});
function closeModal(){document.getElementById("openingModal").classList.remove("open");document.getElementById("openingModal").setAttribute("aria-hidden","true");selectedPack=null}
document.getElementById("closeModal").addEventListener("click",closeModal);document.getElementById("finishOpening").addEventListener("click",closeModal);
function inventoryCards(){return players.filter(p=>(state.inventory[p.id]||0)>0)}
function renderCollection(){const owned=inventoryCards(),search=(document.getElementById("searchCards").value||"").toLowerCase(),rarity=document.getElementById("rarityFilter").value,pos=document.getElementById("positionFilter").value;const filtered=owned.filter(p=>(p.name.toLowerCase().includes(search)||p.club.toLowerCase().includes(search))&&(rarity==="all"||p.rarity===rarity)&&(pos==="all"||p.position===pos));document.getElementById("collectionGrid").innerHTML=filtered.map(cardMarkup).join("");document.getElementById("emptyCollection").classList.toggle("show",owned.length===0);document.getElementById("uniqueCount").textContent=owned.length;document.getElementById("totalCount").textContent=Object.values(state.inventory).reduce((a,b)=>a+b,0);document.getElementById("completion").textContent=Math.round(owned.length/players.length*100)+"%";document.getElementById("heroCardCount").textContent=Object.values(state.inventory).reduce((a,b)=>a+b,0)}
["searchCards","rarityFilter","positionFilter"].forEach(id=>document.getElementById(id).addEventListener(id==="searchCards"?"input":"change",renderCollection));
function duplicates(){return players.filter(p=>(state.inventory[p.id]||0)>1).map(p=>({...p,duplicates:state.inventory[p.id]-1}))}
function renderChallenges(){const dup=duplicates(),reward=dup.reduce((s,p)=>s+p.duplicates*({Commun:10,Rare:20,Épique:35,Légendaire:60,Icon:100}[p.rarity]),0);document.getElementById("exchangeReward").textContent=fmt(reward);document.getElementById("duplicateList").innerHTML=dup.length?dup.map(p=>`<div class="duplicate-row"><span class="duplicate-avatar">${p.emoji}</span><b>${p.name}</b><span>${p.rarity} · ${p.duplicates} doublon(s)</span><strong>+${p.duplicates*({Commun:10,Rare:20,Épique:35,Légendaire:60,Icon:100}[p.rarity])} CR</strong></div>`).join(""):'<div class="empty-state show"><h3>Aucun doublon pour le moment</h3><p>Ouvre quelques boosters pour trouver des cartes à échanger.</p></div>'}
document.getElementById("exchangeBtn").addEventListener("click",()=>{const dup=duplicates();if(!dup.length){toast("Tu n'as aucun doublon à échanger.");return}let reward=0;dup.forEach(p=>{const rate={Commun:10,Rare:20,Épique:35,Légendaire:60,Icon:100}[p.rarity];reward+=p.duplicates*rate;state.inventory[p.id]=1});state.coins+=reward;save();toast("Échange effectué : +"+fmt(reward)+" crédits !")});
function renderStats(){const total=Object.values(state.inventory).reduce((a,b)=>a+b,0),owned=inventoryCards();document.getElementById("statPacks").textContent=state.packsOpened;document.getElementById("statCards").textContent=total;document.getElementById("statCoins").textContent=fmt(state.coins);const best=owned.sort((a,b)=>b.rating-a.rating)[0];document.getElementById("statBest").textContent=best?best.name:"—";document.getElementById("rarityChart").innerHTML=rarityOrder.map(r=>{const count=players.filter(p=>p.rarity===r).reduce((s,p)=>s+(state.inventory[p.id]||0),0);return `<div class="chart-row"><span style="color:${rarityColors[r]}">${r}</span><div class="chart-track"><div class="chart-fill" style="--bar:${rarityColors[r]};width:${total?count/total*100:0}%"></div></div><b>${count}</b></div>`}).join("")}
function renderAll(){document.getElementById("coinBalance").textContent=fmt(state.coins);renderPacks();renderCollection();renderChallenges();renderStats()}
renderAll();

/* ================= PACK ROYALE : EFFETS INTERACTIFS ================= */
(() => {
  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  function burst(x, y, amount = 34) {
    const colors = ["#f4d99b", "#d9b66b", "#ffffff", "#77d6d0", "#b68aff"];
    for (let i = 0; i < amount; i++) {
      const p = document.createElement("i");
      p.className = "pr-particle";
      p.style.left = x + "px";
      p.style.top = y + "px";
      p.style.setProperty("--particle", colors[Math.floor(Math.random() * colors.length)]);
      p.style.setProperty("--dx", (Math.random() * 420 - 210) + "px");
      p.style.setProperty("--dy", (Math.random() * 360 - 180) + "px");
      p.style.setProperty("--duration", (.75 + Math.random() * .85) + "s");
      p.style.width = (4 + Math.random() * 7) + "px";
      p.style.height = p.style.width;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1800);
    }
  }

  function spark(x, y) {
    const s = document.createElement("span");
    s.className = "pr-click-spark";
    s.textContent = ["✦", "✧", "★"][Math.floor(Math.random() * 3)];
    s.style.left = x + "px";
    s.style.top = y + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 700);
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("button, .player-card, .pack-card")) {
      spark(event.clientX, event.clientY);
    }
  });

  // Effet de particules lors de l'ouverture : le listener s'exécute après la révélation des cartes.
  const revealButton = document.getElementById("revealBtn");
  if (revealButton) {
    revealButton.addEventListener("click", () => {
      const pack = document.getElementById("openingPack");
      if (pack) {
        pack.classList.add("pr-shaking");
        setTimeout(() => pack.classList.remove("pr-shaking"), 800);
      }
      setTimeout(() => {
        const modal = document.querySelector(".opening-modal");
        if (!modal) return;
        const rect = modal.getBoundingClientRect();
        burst(rect.left + rect.width / 2, rect.top + rect.height * .48, 58);
        document.querySelectorAll("#revealedCards .player-card").forEach((card, index) => {
          card.style.animationDelay = (index * .22) + "s";
          const rarity = (card.querySelector(".card-rarity")?.textContent || "").toLowerCase();
          if (rarity.includes("icon") || rarity.includes("légendaire")) {
            setTimeout(() => {
              const r = card.getBoundingClientRect();
              burst(r.left + r.width / 2, r.top + r.height / 2, 24);
            }, 450 + index * 220);
          }
        });
      }, 80);
    });
  }

  // Inclinaison légère des cartes avec la souris.
  document.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".player-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - .5;
    const py = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(800px) rotateY(${px * 9}deg) rotateX(${-py * 8}deg) translateY(-6px) scale(1.025)`;
  });
  document.addEventListener("pointerout", (event) => {
    const card = event.target.closest(".player-card");
    if (card && !card.contains(event.relatedTarget)) card.style.transform = "";
  });

  // Petit effet d'entrée sur les sections et compteurs.
  const sections = document.querySelectorAll(".page");
  sections.forEach(section => section.addEventListener("animationend", () => {
    section.querySelectorAll(".section-heading, .page-intro, .feature-strip").forEach((el, i) => {
      el.style.animation = `pr-card-enter .55s ${i * .08}s both`;
    });
  }));
})();
