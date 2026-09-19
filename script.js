Genera una pagina web, con html,css y javascript  sobre perfumes de los mejores que encuentres para hombre y mujer
Armo tu página de perfumes top para hombre y mujer.

Estructura lista — ahora creo los estilos y la interactividad.

:root{
  --bg:#0f0e0c;
  --bg2:#171511;
  --card:#1e1c17;
  --cream:#f6f1e7;
  --muted:#b8b0a1;
  --gold:#c9a24b;
  --gold2:#e8c97a;
  --pink:#e9a8c6;
  --blue:#9cc3e5;
  --border:rgba(201,162,75,.22);
  --radius:18px;
  --font-title:'Cormorant Garamond',serif;
  --font-body:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);background:var(--cream);color:#1d1b17;line-height:1.6}
.container{max-width:1150px;margin:0 auto;padding:0 22px}
h1,h2,h3{font-family:var(--font-title);line-height:1.05;letter-spacing:-.5px}
h2{font-size:clamp(2rem,4vw,3rem);margin:.3rem 0 1rem}
.eyebrow{color:var(--gold);text-transform:uppercase;letter-spacing:3px;font-size:.78rem;font-weight:700}
.muted{color:#6f6a5f}
.section{padding:78px 0}
.section-dark{background:var(--bg);color:var(--cream)}
.section-dark .muted{color:var(--muted)}

/* NAV */
.navbar{position:sticky;top:0;z-index:50;background:rgba(15,14,12,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);color:var(--cream)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px}
.logo{font-family:var(--font-title);font-size:1.7rem;color:var(--cream);text-decoration:none;font-weight:700}
.logo span{color:var(--gold)}
.nav-links{display:flex;gap:22px}
.nav-links a{color:var(--cream);text-decoration:none;font-size:.95rem;opacity:.85}
.nav-links a:hover{color:var(--gold2)}
.nav-actions{display:flex;gap:10px;align-items:center}
.btn-icon{background:#22201b;color:var(--gold2);border:1px solid var(--border);border-radius:999px;padding:8px 14px;cursor:pointer;font-weight:700}
.menu-toggle{display:none;background:none;border:1px solid var(--border);color:var(--cream);border-radius:10px;padding:7px 11px;cursor:pointer}

/* HERO */
.hero{background:radial-gradient(1000px 500px at 20% 0%,#2a251c,var(--bg)) , var(--bg);color:var(--cream);padding:70px 0 0;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
.badge{display:inline-block;border:1px solid var(--border);border-radius:999px;padding:7px 14px;font-size:.8rem;color:var(--gold2);background:rgba(201,162,75,.1);margin-bottom:16px}
.hero h1{font-size:clamp(2.8rem,6vw,4.8rem)}
.hero h1 em{color:var(--gold2);font-style:italic}
.subtitle{color:var(--muted);max-width:520px;margin:16px 0 24px;font-size:1.05rem}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-block;padding:13px 22px;border-radius:999px;text-decoration:none;font-weight:700;cursor:pointer;border:1px solid transparent;transition:.2s}
.btn-gold{background:linear-gradient(135deg,var(--gold),var(--gold2));color:#1a1408}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(201,162,75,.35)}
.btn-outline{border-color:var(--border);color:var(--cream)}
.btn-outline:hover{border-color:var(--gold2);color:var(--gold2)}
.hero-stats{display:flex;gap:28px;margin-top:28px}
.hero-stats strong{display:block;font-size:1.6rem;font-family:var(--font-title)}
.hero-stats span{font-size:.85rem;color:var(--muted)}
.hero-cards{position:relative;display:grid;gap:14px}
.hero-card{border-radius:20px;padding:22px;border:1px solid var(--border);background:linear-gradient(135deg,#26221a,#151310)}
.hero-card.him{background:linear-gradient(135deg,#1c2a3d 0%,#10151d 70%)}
.hero-card.her{background:linear-gradient(135deg,#3a2130 0%,#171116 70%)}
.hero-card.uni{background:linear-gradient(135deg,#3a2f14 0%,#171307 70%)}
.hero-card-top{font-size:.72rem;letter-spacing:2.5px;color:var(--gold2);font-weight:700}
.hero-card h3{font-size:1.8rem;margin:6px 0 2px}
.hero-card p{color:var(--muted);font-size:.92rem}
.price{display:inline-block;margin-top:10px;background:rgba(255,255,255,.1);padding:6px 12px;border-radius:999px;font-weight:700;font-size:.9rem}
.floating{animation:float 5s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.marquee{margin-top:50px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden;white-space:nowrap;padding:12px 0;color:var(--gold);letter-spacing:2px;font-size:.85rem}
.marquee-track{display:inline-flex;gap:0;animation:scroll 22s linear infinite}
@keyframes scroll{to{transform:translateX(-50%)}}

/* TOP */
.top-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:24px}
.podium{background:#fff;border:1px solid #e9e0cf;border-radius:20px;padding:26px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
.podium.gold{border-top:6px solid var(--gold)}
.podium.silver{border-top:6px solid #b9bec7}
.podium.bronze{border-top:6px solid #c98a4b}
.medal{font-weight:800;font-size:1.1rem}
.podium .cat{color:var(--gold);font-weight:600;font-size:.9rem;margin:4px 0 8px}
.stars{margin-top:10px;color:#b8860b;font-weight:700}
.stars small{color:#777;font-weight:400}

/* CONTROLS + GRID */
.controls{display:flex;flex-direction:column;gap:14px;margin:22px 0}
.filters{display:flex;gap:10px;flex-wrap:wrap}
.chip{border:1px solid var(--border);background:#221f19;color:var(--cream);padding:9px 16px;border-radius:999px;cursor:pointer;font-weight:600}
.chip.active{background:var(--gold);color:#1a1408;border-color:var(--gold)}
.search-sort{display:flex;gap:10px;flex-wrap:wrap}
.search-sort input,.search-sort select{padding:12px 16px;border-radius:12px;border:1px solid var(--border);background:#221f19;color:var(--cream);min-width:220px;font-size:.95rem;flex:1}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px;margin-top:10px}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;transition:.25s;cursor:pointer}
.card:hover{transform:translateY(-6px);border-color:var(--gold);box-shadow:0 20px 40px rgba(0,0,0,.4)}
.card-visual{height:150px;display:flex;align-items:center;justify-content:center;font-size:3.2rem;position:relative}
.card-visual.hombre{background:linear-gradient(135deg,#1d2f47,#0f1928)}
.card-visual.mujer{background:linear-gradient(135deg,#4a2540,#1e111b)}
.card-visual .tag{position:absolute;top:12px;left:12px;font-size:.7rem;font-weight:800;letter-spacing:1.5px;background:rgba(0,0,0,.5);color:#fff;padding:5px 10px;border-radius:999px}
.fav{position:absolute;top:10px;right:10px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.2);color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1.1rem}
.fav.active{background:var(--gold);color:#000;border-color:var(--gold)}
.card-body{padding:18px}
.card-body h3{font-size:1.45rem}
.brand{color:var(--gold2);font-size:.82rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase}
.desc{color:var(--muted);font-size:.9rem;margin:8px 0 12px;min-height:44px}
.meta{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:12px}
.meta span{font-size:.75rem;background:rgba(201,162,75,.12);border:1px solid var(--border);padding:4px 9px;border-radius:999px;color:var(--gold2)}
.card-foot{display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(255,255,255,.08);padding-top:12px}
.card-foot strong{font-size:1.15rem;color:#fff}
.rating{color:#e8c97a;font-size:.9rem;font-weight:700}
.empty{text-align:center;color:var(--muted);margin:30px 0}
.hidden{display:none!important}

/* SPLIT */
.split-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
.checklist{list-style:none;margin:16px 0;display:grid;gap:10px}
.checklist li{background:#fff;border:1px solid #e9e0cf;padding:12px 16px;border-radius:12px}
.quote-card{background:var(--bg);color:var(--cream);border-radius:22px;padding:44px 34px;text-align:center;border:1px solid var(--border)}
.quote-card p{font-family:var(--font-title);font-size:1.8rem;font-style:italic}
.quote-card span{color:var(--gold2)}
.quote-card.pink{background:linear-gradient(135deg,#3b1f33,#150e13)}
.split-pink{background:#faf2f6}

/* GUIDE */
.guide-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:20px 0 30px}
.guide-card{background:#fff;border:1px solid #e9e0cf;border-radius:16px;padding:22px}
.newsletter{background:var(--bg);color:var(--cream);border-radius:20px;padding:28px;display:flex;gap:20px;align-items:center;justify-content:space-between;flex-wrap:wrap;border:1px solid var(--border)}
.newsletter form{display:flex;gap:10px;flex-wrap:wrap}
.newsletter input{padding:13px 16px;border-radius:999px;border:1px solid var(--border);min-width:240px;background:#22201b;color:#fff}
.news-msg{width:100%;color:var(--gold2);font-size:.9rem}

/* FOOTER */
footer{background:#0b0a09;color:var(--cream);padding:50px 0 20px;border-top:1px solid var(--border)}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:24px}
footer a{color:var(--muted);display:block;text-decoration:none;margin:4px 0}
footer a:hover{color:var(--gold2)}
.copy{text-align:center;color:#777;margin-top:30px;font-size:.85rem}

/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px;z-index:100}
.modal{background:#1c1a16;color:var(--cream);max-width:640px;width:100%;border-radius:22px;border:1px solid var(--gold);padding:30px;max-height:90vh;overflow:auto;position:relative}
.modal-close{position:absolute;top:14px;right:14px;background:#2a2721;color:#fff;border:1px solid var(--border);width:36px;height:36px;border-radius:50%;cursor:pointer}
.modal h2{font-size:2.2rem}
.pyramid{display:grid;gap:10px;margin:16px 0}
.pyramid div{background:rgba(201,162,75,.1);border:1px solid var(--border);border-radius:12px;padding:12px 16px}
.occasion{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}

.to-top{position:fixed;bottom:22px;right:22px;width:48px;height:48px;border-radius:50%;background:var(--gold);border:none;font-size:1.3rem;cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.3)}

/* RESPONSIVE */
@media(max-width:900px){
  .hero-grid,.split-grid{grid-template-columns:1fr}
  .top-grid,.guide-grid{grid-template-columns:1fr}
  .nav-links{display:none;position:absolute;top:66px;left:0;right:0;background:#14120f;flex-direction:column;padding:18px 22px;border-bottom:1px solid var(--border)}
  .nav-links.open{display:flex}
  .menu-toggle{display:block}
  .footer-grid{grid-template-columns:1fr}
}
const perfumes = [
  // HOMBRE
  { id:1, nombre:"Sauvage EDP", marca:"Dior", genero:"hombre", momento:"dia", precio:98, rating:4.9, resenas:"32k", emoji:"💙", familia:"Fresco especiado", duracion:"8-10h", estela:"Alta",
    desc:"El más vendido del mundo. Bergamota fresca con pimienta salvaje. Imposible fallar.",
    salida:"Bergamota, pimienta", corazon:"Lavanda, nuez moscada", fondo:"Ambroxan, vainilla", uso:["Diario","Oficina","Citas"] },
  { id:2, nombre:"Bleu de Chanel EDP", marca:"Chanel", genero:"hombre", momento:"dia", precio:118, rating:4.8, resenas:"21k", emoji:"🌊", familia:"Amaderado cítrico", duracion:"8-12h", estela:"Media-alta",
    desc:"Elegancia absoluta. Cítricos, incienso y sándalo. El traje a medida en perfume.",
    salida:"Pomelo, menta", corazon:"Jengibre, incienso", fondo:"Sándalo, cedro", uso:["Oficina","Bodas","Diario"] },
  { id:3, nombre:"Aventus", marca:"Creed", genero:"hombre", momento:"dia", precio:240, rating:4.9, resenas:"15k", emoji:"👑", familia:"Afrutado ahumado", duracion:"10-12h", estela:"Muy alta",
    desc:"Lujo nicho. Piña, grosella y abedul ahumado. El perfume del éxito.",
    salida:"Piña, grosella negra", corazon:"Abedul, pachulí", fondo:"Almizcle, vainilla", uso:["Negocios","Eventos","Firma personal"] },
  { id:4, nombre:"1 Million", marca:"Paco Rabanne", genero:"hombre", momento:"noche", precio:85, rating:4.7, resenas:"25k", emoji:"🪙", familia:"Dulce especiado", duracion:"8-10h", estela:"Muy alta",
    desc:"Oro puro para la noche. Canela, cuero y ámbar. Proyección brutal.",
    salida:"Pomelo, menta", corazon:"Canela, cuero", fondo:"Ámbar, pachulí", uso:["Fiesta","Noche","Invierno"] },
  { id:5, nombre:"Eros EDP", marca:"Versace", genero:"hombre", momento:"noche", precio:78, rating:4.6, resenas:"19k", emoji:"🔥", familia:"Fresco dulce", duracion:"7-9h", estela:"Alta",
    desc:"Seductor y juvenil. Menta, manzana y vainilla. Magnetismo griego.",
    salida:"Menta, manzana", corazon:"Geranio, salvia", fondo:"Vainilla, haba tonka", uso:["Citas","Fiesta","Verano noche"] },
  { id:6, nombre:"Acqua di Giò Profumo", marca:"Giorgio Armani", genero:"hombre", momento:"dia", precio:105, rating:4.7, resenas:"18k", emoji:"🌅", familia:"Acuático marino", duracion:"8-10h", estela:"Media",
    desc:"El mar Mediterráneo embotellado. Fresco, elegante y limpio.",
    salida:"Bergamota, sal marina", corazon:"Romero, salvia", fondo:"Incienso, pachulí", uso:["Verano","Oficina","Diario"] },
  { id:7, nombre:"Le Male Le Parfum", marca:"Jean Paul Gaultier", genero:"hombre", momento:"noche", precio:92, rating:4.7, resenas:"14k", emoji:"⚓", familia:"Oriental vainilla", duracion:"9-11h", estela:"Alta",
    desc:"El marinero más sensual. Cardamomo, lavanda e iris con vainilla.",
    salida:"Cardamomo", corazon:"Lavanda, iris", fondo:"Vainilla, madera", uso:["Noche","Otoño","Citas"] },

  // MUJER
  { id:8, nombre:"Good Girl EDP", marca:"Carolina Herrera", genero:"mujer", momento:"noche", precio:95, rating:4.8, resenas:"28k", emoji:"👠", familia:"Floral dulce", duracion:"8-10h", estela:"Alta",
    desc:"El tacón icónico. Jazmín, haba tonka y cacao. Audaz y femenina.",
    salida:"Almendra, café", corazon:"Jazmín, nardo", fondo:"Haba tonka, cacao", uso:["Noche","Fiesta","Citas"] },
  { id:9, nombre:"Libre EDP", marca:"Yves Saint Laurent", genero:"mujer", momento:"dia", precio:110, rating:4.8, resenas:"27k", emoji:"💛", familia:"Floral lavanda", duracion:"9-12h", estela:"Alta",
    desc:"Libertad embotellada. Lavanda francesa con flor de azahar y vainilla.",
    salida:"Lavanda, mandarina", corazon:"Azahar, jazmín", fondo:"Vainilla, almizcle", uso:["Diario","Oficina","Eventos"] },
  { id:10, nombre:"Black Opium", marca:"Yves Saint Laurent", genero:"mujer", momento:"noche", precio:102, rating:4.8, resenas:"30k", emoji:"☕", familia:"Vainilla café", duracion:"9-11h", estela:"Muy alta",
    desc:"Adictivo café con vainilla y flores blancas. La reina de la noche.",
    salida:"Café, pera", corazon:"Jazmín, almendra", fondo:"Vainilla, pachulí", uso:["Noche","Invierno","Fiesta"] },
  { id:11, nombre:"Coco Mademoiselle", marca:"Chanel", genero:"mujer", momento:"dia", precio:125, rating:4.9, resenas:"24k", emoji:"✨", familia:"Chipre floral", duracion:"8-12h", estela:"Alta",
    desc:"Elegancia atemporal. Naranja, jazmín y pachulí. Clase pura.",
    salida:"Naranja, bergamota", corazon:"Jazmín, rosa", fondo:"Pachulí, vetiver", uso:["Oficina","Bodas","Firma personal"] },
  { id:12, nombre:"La Vie Est Belle", marca:"Lancôme", genero:"mujer", momento:"dia", precio:98, rating:4.7, resenas:"26k", emoji:"🌸", familia:"Floral iris", duracion:"8-10h", estela:"Media-alta",
    desc:"La felicidad en frasco. Iris, praliné y flores. Dulce y luminoso.",
    salida:"Grosella, pera", corazon:"Iris, jazmín", fondo:"Praliné, vainilla", uso:["Diario","Primavera","Regalo"] },
  { id:13, nombre:"J'adore EDP", marca:"Dior", genero:"mujer", momento:"dia", precio:115, rating:4.8, resenas:"20k", emoji:"🌺", familia:"Floral afrutado", duracion:"7-9h", estela:"Media",
    desc:"Bouquet dorado. Ylang-ylang, rosa y jazmín. Femenino y solar.",
    salida:"Ylang-ylang, bergamota", corazon:"Rosa, jazmín", fondo:"Almizcle, cedro", uso:["Día","Eventos","Verano"] },
];

let state = { filter:"todos", search:"", sort:"rating-desc", showFavs:false };
let favoritos = JSON.parse(localStorage.getItem("fav_perfumes") || "[]");

const grid = document.getElementById("grid");
const emptyMsg = document.getElementById("emptyMsg");
const favCount = document.getElementById("favCount");

function stars(r){
  const full = Math.round(r);
  return "★".repeat(full) + "☆".repeat(5-full);
}

function getFiltered(){
  let list = [...perfumes];
  if(state.filter === "favoritos"){
    list = list.filter(p => favoritos.includes(p.id));
  } else if(state.filter === "hombre" || state.filter === "mujer"){
    list = list.filter(p => p.genero === state.filter);
  } else if(state.filter === "dia" || state.filter === "noche"){
    list = list.filter(p => p.momento === state.filter);
  }
  if(state.search){
    const q = state.search.toLowerCase();
    list = list.filter(p => (p.nombre+" "+p.marca+" "+p.familia+" "+p.desc).toLowerCase().includes(q));
  }
  if(state.sort === "rating-desc") list.sort((a,b)=>b.rating-a.rating);
  if(state.sort === "precio-asc") list.sort((a,b)=>a.precio-b.precio);
  if(state.sort === "precio-desc") list.sort((a,b)=>b.precio-a.precio);
  if(state.sort === "nombre") list.sort((a,b)=>a.nombre.localeCompare(b.nombre));
  return list;
}

function render(){
  const list = getFiltered();
  grid.innerHTML = "";
  emptyMsg.classList.toggle("hidden", list.length > 0);
  list.forEach(p=>{
    const isFav = favoritos.includes(p.id);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-visual ${p.genero}">
        <span style="font-size:3.4rem">${p.emoji}</span>
        <span class="tag">${p.genero==="hombre"?"PARA ÉL":"PARA ELLA"} · ${p.momento==="dia"?"☀️ DÍA":"🌙 NOCHE"}</span>
        <button class="fav ${isFav?"active":""}" data-fav="${p.id}" title="Guardar en favoritos">${isFav?"♥":"♡"}</button>
      </div>
      <div class="card-body">
        <p class="brand">${p.marca}</p>
        <h3>${p.nombre}</h3>
        <p class="desc">${p.desc}</p>
        <div class="meta"><span>${p.familia}</span><span>⏱ ${p.duracion}</span><span>🌫 ${p.estela}</span></div>
        <div class="card-foot"><strong>${p.precio} €</strong><span class="rating">${stars(p.rating)} ${p.rating}</span></div>
      </div>`;
    card.addEventListener("click", (e)=>{
      if(e.target.closest("[data-fav]")) return;
      openModal(p.id);
    });
    grid.appendChild(card);
  });
  favCount.textContent = favoritos.length;
  // bind fav buttons
  grid.querySelectorAll("[data-fav]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      toggleFav(Number(btn.dataset.fav));
    });
  });
}

function toggleFav(id){
  if(favoritos.includes(id)) favoritos = favoritos.filter(f=>f!==id);
  else favoritos.push(id);
  localStorage.setItem("fav_perfumes", JSON.stringify(favoritos));
  render();
}

// Filtros
document.getElementById("filters").addEventListener("click", e=>{
  const b = e.target.closest("button[data-filter]");
  if(!b) return;
  document.querySelectorAll("#filters .chip").forEach(c=>c.classList.remove("active"));
  b.classList.add("active");
  state.filter = b.dataset.filter;
  render();
});
document.getElementById("search").addEventListener("input", e=>{
  state.search = e.target.value.trim();
  render();
});
document.getElementById("sort").addEventListener("change", e=>{
  state.sort = e.target.value;
  render();
});
document.getElementById("favBtn").addEventListener("click", ()=>{
  state.filter = "favoritos";
  document.querySelectorAll("#filters .chip").forEach(c=>c.classList.toggle("active", c.dataset.filter==="favoritos"));
  document.getElementById("catalogo").scrollIntoView({behavior:"smooth"});
  render();
});

// Modal
const overlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
function openModal(id){
  const p = perfumes.find(x=>x.id===id);
  const isFav = favoritos.includes(p.id);
  modalContent.innerHTML = `
    <p class="brand">${p.marca} · ${p.genero==="hombre"?"Para él 💙":"Para ella 💖"}</p>
    <h2>${p.emoji} ${p.nombre}</h2>
    <p class="muted" style="color:#b8b0a1">${p.desc}</p>
    <div class="stars">${stars(p.rating)} ${p.rating} <small style="color:#999">(${p.resenas} reseñas)</small></div>
    <div class="pyramid">
      <div><strong>🌿 Salida:</strong> ${p.salida}</div>
      <div><strong>🌸 Corazón:</strong> ${p.corazon}</div>
      <div><strong>🪵 Fondo:</strong> ${p.fondo}</div>
      <div><strong>⏱ Duración:</strong> ${p.duracion} · <strong>🌫 Estela:</strong> ${p.estela} · <strong>💰 Precio aprox:</strong> ${p.precio} € / 100ml</div>
    </div>
    <div class="occasion">${p.uso.map(u=>`<span class="chip">${u}</span>`).join("")}</div>
    <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">
      <button class="btn btn-gold" id="modalFav">${isFav?"♥ En favoritos":"♡ Añadir a favoritos"}</button>
      <button class="btn btn-outline" id="modalClose2">Cerrar</button>
    </div>`;
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("modalFav").addEventListener("click", ()=>{ toggleFav(p.id); openModal(p.id); });
  document.getElementById("modalClose2").addEventListener("click", closeModal);
}
function closeModal(){ overlay.classList.add("hidden"); document.body.style.overflow=""; }
document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", e=>{ if(e.target===overlay) closeModal(); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeModal(); });

// Newsletter
document.getElementById("newsForm").addEventListener("submit", e=>{
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("newsMsg");
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ msg.textContent = "⚠️ Escribe un email válido."; return; }
  msg.textContent = "✅ ¡Gracias! Revisa tu correo: te enviamos la guía + cupón ESSENCE10.";
  e.target.reset();
});

// Nav + toTop
const navLinks = document.getElementById("navLinks");
document.getElementById("menuToggle").addEventListener("click", ()=> navLinks.classList.toggle("open"));
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", ()=>{
  toTop.classList.toggle("hidden", window.scrollY < 600);
  document.getElementById("navbar").style.boxShadow = window.scrollY>10 ? "0 8px 30px rgba(0,0,0,.4)" : "none";
});
toTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

// Reveal animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.style.opacity="1"; en.target.style.transform="translateY(0)"; }
  });
},{threshold:.12});
function animateCards(){
  document.querySelectorAll(".card, .podium, .guide-card").forEach(el=>{
    el.style.opacity="0"; el.style.transform="translateY(18px)";
    el.style.transition="all .5s ease";
    observer.observe(el);
  });
}
const origRender = render;
render = function(){ origRender(); animateCards(); };

render();