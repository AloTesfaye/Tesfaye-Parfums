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