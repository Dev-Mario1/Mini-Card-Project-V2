// ── CHARACTER DATA ──────────────────────────
const CHARACTERS = [
  { id:'Josuke',      name:'Josuke Higashikata',  clase:'apoyo',   subclase:'Healer / Stand',
    img:'Assets/JosukeAnime.webp',
    desc:'Joven que busca ayudar y proteger a todos en Morioh',
    quote:'Nunca insultes su cabello',
    audio:'Assets/audios/crazy-diamond.mp3',
    stats:{ Vida:88, Daño:80, Velocidad:78, Defensa:90, Curación:88, Resistencia:85 } },

  { id:'Jirachi',     name:'Jirachi',              clase:'apoyo',   subclase:'Healer / Buff',
    img:'Assets/Jirachi.jfif',
    desc:'El pokemon mítico de los deseos',
    quote:'El pokemon numero 385',
    stats:{ Vida:75, Daño:55, Velocidad:90, Defensa:70, Curación:95, Resistencia:70 } },

  { id:'Shikanoko',   name:'Shikanoko',            clase:'apoyo',   subclase:'Buff / Potenciador',
    img:'Assets/Shikanoko.jpg',
    desc:'La legendaria Diosa Ciervo',
    quote:'Sus verdaderos stats son infinitos',
    audio:'Assets/audios/shikanoko-nokonoko-koshitantan_93qRnvP.mp3',
    stats:{ Vida:99, Daño:99, Velocidad:99, Defensa:99, Curación:99, Resistencia:99 } },

  { id:'GoldShip',    name:'Gold Ship',            clase:'ataque',  subclase:'Tanque / Sprint',
    img:'Assets/Char_GoldShip_caarrera.webp',
    desc:'Integrante caótica e impredecible del Team Spica',
    quote:'🎶Goal To My SHIP🎶',
    stats:{ Vida:90, Daño:88, Velocidad:95, Defensa:72, Resistencia:85, Poder:80 } },

  { id:'Ghost',       name:'Ghost',                clase:'ataque',  subclase:'Guerrero / Hechizos',
    img:'Assets/The_Knight.webp',
    desc:'Nacido de Dios y del Vacío',
    quote:'-...-',
    stats:{ Vida:85, Daño:95, Velocidad:88, Defensa:70, Resistencia:90, Poder:80 } },

  { id:'Centella',    name:'Centella',             clase:'apoyo',   subclase:'Escudo / Tank',
    img:'Assets/Centella_-_Mario_&_Luigi_Dream_Team.webp',
    desc:'Espíritu enviado por las estrellas',
    quote:'-No hace frío-',
    stats:{ Vida:85, Daño:75, Velocidad:99, Defensa:88, Curación:60, Resistencia:82 } },

  { id:'Gingerbrave', name:'Gingerbrave',          clase:'ataque',  subclase:'Tanque / Sprint',
    img:'Assets/gingerbrave.jpg',
    desc:'La valiente de galleta que escapó primero del horno',
    quote:'-¡Es ahora o nunca, vamos!-',
    audio:'Assets/audios/Audio gingerbrave.ogg',
    stats:{ Vida:80, Daño:90, Velocidad:95, Defensa:65, Resistencia:80, Poder:88 } },

  { id:'Cole',        name:'Cole',                 clase:'ataque',  subclase:'Fuerza / Elementos',
    img:'Assets/Cole.webp',
    desc:'Ninja del Spinjitzu, maestro de la tierra',
    quote:'Cuidado con sus Puños de Roca',
    stats:{ Vida:85, Daño:90, Velocidad:88, Defensa:75, Resistencia:85, Poder:92 } },

  { id:'Rimuru',      name:'Rimuru Tempest',       clase:'ataque',  subclase:'Mago / Habilidades',
    img:'Assets/Rimuru_Tempest_29.webp',
    desc:'El mayor líder que existió',
    quote:'Muchos desean ser nombrados por él',
    stats:{ Vida:99, Daño:95, Velocidad:92, Defensa:88, Resistencia:95, Poder:99 } },

  { id:'Cientifico',  name:'Científico',           clase:'apoyo',   subclase:'Healer / Corto Alcance',
    img:'Assets/Cientifico.png',
    desc:'Brillante muerto viviente que cura',
    quote:'-Brainz...-',
    stats:{ Vida:65, Daño:60, Velocidad:65, Defensa:55, Curación:85, Resistencia:58 } },

  { id:'MarioLuigi',  name:'Mario y Luigi',        clase:'ataque',  subclase:'Familia / Estratega',
    img:'Assets/mario&luigi.jfif',
    desc:'Los hermanos del reino Champiñón. Juntos son imbatibles.',
    quote:'Huye si hacen un Ataque Tándem',
    audio:"Assets/audios/Mario & Luigi - Let's go, Oki dokie.mp3",
    stats:{ Vida:88, Daño:90, Velocidad:88, Defensa:80, Resistencia:90, Poder:85 } },

  { id:'CremeBrulee', name:'Crème Brûlée',         clase:'snipper', subclase:'Música / Ametrallador',
    img:'Assets/Creme_brulee_illustration.webp',
    desc:'Galleta experto en el piano',
    quote:'-Pondré mi corazón y alma en esta actuación-',
    audio:'Assets/audios/Audio creme brule.ogg',
    stats:{ Vida:72, Daño:88, Velocidad:82, Alcance:95, Precisión:85, Cadencia:88 } },

  { id:'Heart',       name:'Heart',                clase:'apoyo',   subclase:'Sprint / Cónyuge',
    img:'Assets/Heart.jpeg',
    desc:'Siempre buscará reunirse con su amado',
    quote:'Cuando se juntan forman una media luna',
    stats:{ Vida:78, Daño:65, Velocidad:80, Defensa:72, Curación:99, Resistencia:68 } },

  { id:'Star',        name:'Star',                 clase:'ataque',  subclase:'Sprint / Cónyuge',
    img:'Assets/Star.jpeg',
    desc:'Saltará todas las plataformas por su amada',
    quote:'No le importan los puzzles con tal de estar junto a ella',
    stats:{ Vida:70, Daño:85, Velocidad:85, Defensa:50, Resistencia:65, Poder:99 } },

  { id:'Rikka',       name:'Rikka Takanashi',      clase:'ataque',  subclase:'Cónyuge / Corto Alcance',
    img:'Assets/Rikka.jfif',
    desc:'Maestra de magia con el poder del Ojo Maldito',
    quote:'Ten miedo de su paraguas',
    stats:{ Vida:72, Daño:95, Velocidad:90, Defensa:55, Resistencia:70, Poder:99 } },

  { id:'Yuuta',       name:'Yuuta Togashi',        clase:'snipper', subclase:'Cónyuge / Multi-habilidades',
    img:'Assets/Yuuta.jpg',
    desc:'El Maestro de las Flamas Oscuras',
    quote:'Siempre logra sorprender con su arma en el brazo',
    stats:{ Vida:80, Daño:90, Velocidad:72, Alcance:88, Precisión:95, Cadencia:65 } },

  { id:'Greninja',    name:'Greninja',             clase:'snipper', subclase:'Melee / Sigilo',
    img:'Assets/Greninja.jpg',
    desc:'Sus shurikens de agua son letales.',
    quote:'Su habilidad Mutatipo lo hace versátil',
    stats:{ Vida:75, Daño:92, Velocidad:99, Alcance:90, Precisión:95, Cadencia:88 } },

  { id:'WhiteLily',   name:'White Lily',           clase:'snipper', subclase:'Bomber / AoE',
    img:'Assets/White_lily_illustration.webp',
    desc:'La Galleta Ancestral caída',
    quote:'Algún día conseguirá liberarse de su arrepentimiento',
    audio:'Assets/audios/Audio white lily.ogg',
    stats:{ Vida:80, Daño:95, Velocidad:82, Alcance:99, Precisión:90, Cadencia:78 } },

  { id:'Neru',        name:'Akita Neru',           clase:'apoyo',   subclase:'Música / Tecno',
    img:'Assets/Akita_Neru_bySmithHioka.webp',
    desc:'Adicta a su teléfono y música',
    quote:'- /-.. . .--- . -./ -.. . / -.-. .... .. -. --. .- .-. / -',
    audio:'Assets/audios/neru.mp3',
    stats:{ Vida:75, Daño:70, Velocidad:88, Defensa:65, Curación:72, Resistencia:80 } },

  { id:'Girasol',     name:'Girasol',              clase:'apoyo',   subclase:'Healer / Planta',
    img:'Assets/Girasol.jpg',
    desc:'Planta que irradia soles curativos a sus aliados.',
    quote:'🎶Zombies on your Lawn🎶',
    stats:{ Vida:70, Daño:65, Velocidad:80, Defensa:55, Curación:88, Resistencia:60 } },

  { id:'Lanzaguisantes', name:'Lanzaguisantes',    clase:'snipper', subclase:'Planta / Artillero',
    img:'Assets/Lanzaguisantes.png',
    desc:'Primera línea de defensa del jardín',
    quote:'Algunos teorizan que él canta Zombie Time',
    stats:{ Vida:65, Daño:85, Velocidad:90, Alcance:80, Precisión:80, Cadencia:99 } },

  { id:'Jay',         name:'Jay',                  clase:'ataque',  subclase:'Elementos / Ninja',
    img:'Assets/Jay.webp',
    desc:'Ninja del rayo con hábiles Nunchakus',
    quote:'Su electricidad combina con la tecnología',
    stats:{ Vida:75, Daño:88, Velocidad:99, Defensa:60, Resistencia:72, Poder:85 } },

  { id:'Zane',        name:'Zane',                 clase:'snipper', subclase:'Elementos / Tecno',
    img:'Assets/Zane_IB_s7.webp',
    desc:'Ninja de hielo hecho de titanio',
    quote:'El mayor Nindroide que ha existido',
    stats:{ Vida:82, Daño:90, Velocidad:88, Alcance:92, Precisión:99, Cadencia:78 } },

  { id:'Kagamine-Twins', name:'Kagamine Rin y Len', clase:'ataque', subclase:'Familia / Música',
    img:'Assets/Kagamine_Rin_Len.webp',
    desc:'Gran dupla musical Vocaloid',
    quote:'🎶Purple Butterfly on your Right Shoulder🎶',
    stats:{ Vida:78, Daño:85, Velocidad:99, Defensa:60, Resistencia:75, Poder:90 } },

  { id:'Frisk',       name:'Frisk',                clase:'ataque',  subclase:'Pacifista / Esquivador',
    img:'Assets/Frisk.webp',
    desc:'El último humano que cayó al subsuelo',
    quote:'"Sigues siendo Tú"',
    stats:{ Vida:70, Daño:75, Velocidad:95, Defensa:55, Resistencia:99, Poder:85 } },

  { id:'Katara',      name:'Katara',               clase:'apoyo',   subclase:'Healer / Elementos',
    img:'Assets/katara.jpg',
    desc:'Maestra del agua de la Tribu del Agua del Sur.',
    quote:'Cuidado si hace Luna Llena',
    stats:{ Vida:75, Daño:70, Velocidad:90, Defensa:65, Curación:95, Resistencia:72 } },

  { id:'Mazorcanon',  name:'Mazorcañon',           clase:'snipper', subclase:'Planta / AoE',
    img:'Assets/Mazorcañon.jpg',
    desc:'Cañón vegetal de mazorcas de destrucción masiva.',
    quote:'Su daño es Masivo',
    stats:{ Vida:70, Daño:99, Velocidad:25, Alcance:85, Precisión:70, Cadencia:30 } },

  { id:'WindArcher',  name:'Wind Archer',          clase:'snipper', subclase:'Ametrallador / Elementos',
    img:'Assets/Wind_archer_.webp',
    desc:'Arquero del viento compañero de Millenial Tree',
    quote:'El bosque nos ha bendecido',
    audio:'Assets/audios/Audio wind archer.ogg',
    stats:{ Vida:75, Daño:88, Velocidad:90, Alcance:92, Precisión:95, Cadencia:80 } },

  { id:'Naruto',      name:'Naruto Uzumaki',       clase:'ataque',  subclase:'Melee / Sabio',
    img:'Assets/Naruto.webp',
    desc:'El próximo Hokage de Konoha',
    quote:'-¡Dattebayo!-',
    stats:{ Vida:90, Daño:95, Velocidad:95, Defensa:75, Resistencia:88, Poder:99 } },

  { id:'Teto',        name:'Kasane Teto',          clase:'ataque',  subclase:'Tecno / Música',
    img:'Assets/Teto.webp',
    desc:'La pelirroja amante de los baguettes',
    quote:'🎶Machine Love🎶',
    audio:'Assets/audios/teto-wav.mp3',
    stats:{ Vida:75, Daño:82, Velocidad:92, Defensa:58, Resistencia:70, Poder:88 } },

  { id:'Miku',        name:'Hatsune Miku',         clase:'snipper', subclase:'Música / Tecno',
    img:'Assets/Hatsune_Miku-illu.webp',
    desc:'La Vocaloid original',
    quote:'-You can call me Miku-',
    audio:'Assets/audios/miku WEEEEE.mp3',
    stats:{ Vida:72, Daño:85, Velocidad:95, Alcance:96, Precisión:92, Cadencia:88 } },

  { id:'Custard',     name:'Custard III',          clase:'apoyo',   subclase:'Healer / Esquivador',
    img:'Assets/Sprite_custard_iii_default.webp',
    desc:'Próximo rey del Reino de Galletas con poderes curativos',
    quote:'-Su rey los protegerá-',
    audio:'Assets/audios/Custard_skill.mp3.mpeg',
    stats:{ Vida:65, Daño:50, Velocidad:75, Defensa:60, Curación:80, Resistencia:55 } },

  { id:'Gumi',        name:'GUMI',                 clase:'apoyo',   subclase:'Tecno / Música',
    img:'Assets/GUMI_transparent.webp',
    desc:'Segunda en ser publicada por Internet Co.',
    quote:'Antes fue llamada Megpoid',
    stats:{ Vida:78, Daño:62, Velocidad:82, Defensa:68, Curación:90, Resistencia:70 } },

  { id:'Hashirama',   name:'Hashirama Senju',      clase:'apoyo',   subclase:'Regenerable / Sabio',
    img:'Assets/Hashirama_Sage_Mode.webp',
    desc:'El Dios de los Shinobi',
    quote:'Su Ninjutsu madera da vida',
    stats:{ Vida:95, Daño:95, Velocidad:80, Defensa:85, Curación:90, Resistencia:92 } },

  { id:'Kratos',      name:'Kratos',               clase:'ataque',  subclase:'Guerrero / Multi-habilidades',
    img:'Assets/Kratos.jpg',
    desc:'El Dios de la Guerra espartano',
    quote:'Mató al Olimpo entero',
    stats:{ Vida:99, Daño:99, Velocidad:75, Defensa:90, Resistencia:95, Poder:95 } },

  { id:'Hornet',      name:'Hornet',               clase:'snipper', subclase:'Guerrera / Esquivador',
    img:'Assets/Hornet.webp',
    desc:'Veloz, precisa, imprevisible.',
    quote:'-¡Shaw!-',
    stats:{ Vida:78, Daño:92, Velocidad:99, Alcance:88, Precisión:90, Cadencia:85 } },

  { id:'MasterChief', name:'Master Chief',         clase:'snipper', subclase:'Francotirador / Estratega',
    img:'Assets/Master Chief.png',
    desc:'La última esperanza de la humanidad.',
    quote:'Extraña a Cortana',
    stats:{ Vida:90, Daño:92, Velocidad:78, Alcance:90, Precisión:92, Cadencia:85 } },

  { id:'Rayquaza',    name:'Rayquaza',             clase:'snipper', subclase:'Sprint / AoE',
    img:'Assets/rayquaza.jpg',
    desc:'El guardián de los cielos',
    quote:'Un pokemon que no necesita una Mega-piedra',
    stats:{ Vida:95, Daño:99, Velocidad:90, Alcance:99, Precisión:88, Cadencia:75 } },

  { id:'Joseph',      name:'Joseph Joestar',       clase:'ataque',  subclase:'Stand / Multi-habilidades',
    img:'Assets/JosephJoestar123.webp',
    desc:'Segundo Jojo del linaje Joestar',
    quote:'-¡Nigerundayo!-',
    stats:{ Vida:85, Daño:80, Velocidad:88, Defensa:75, Resistencia:90, Poder:92 } },

  { id:'PureVanilla', name:'Pure Vanilla',         clase:'apoyo',   subclase:'Healer / Buff',
    img:'Assets/Pure_vanilla_illustration.webp',
    desc:'La Galleta Ancestral que cura a todos',
    quote:'-La verdad siempre prevalecerá',
    audio:'Assets/audios/Audio pure vanilla.ogg',
    stats:{ Vida:80, Daño:55, Velocidad:70, Defensa:60, Curación:99, Resistencia:65 } },

  { id:'Rachet',      name:'Rachet',               clase:'apoyo',   subclase:'Healer / AoE',
    img:'Assets/Rachet.webp',
    desc:'Oficial Médico de los Autobots',
    quote:'Sigue buscando reparar la voz de Bumblebee',
    stats:{ Vida:80, Daño:85, Velocidad:85, Defensa:70, Curación:75, Resistencia:78 } },

  { id:'LanzadoraOscura', name:'Lanzadora Oscura', clase:'snipper', subclase:'Planta / AoE',
    img:'Assets/Lanzadora oscura.webp',
    desc:'Dispara tres proyectiles al estar potenciada',
    quote:'Aprecia mucho a Flor Lunar y a Sombraseta',
    stats:{ Vida:70, Daño:90, Velocidad:88, Alcance:99, Precisión:80, Cadencia:92 } },
];

// ── RADAR-ACOMPAÑANTES ───
const CLASE_COLORS = {
  apoyo:   '#34d9a0',
  ataque:  '#ff5e3a',
  snipper: '#a78bfa',
};

const STAT_ABREV = {
  apoyo:   ['VID','DAÑ','VEL','DEF','CUR','RES'],
  ataque:  ['VID','DAÑ','VEL','DEF','RES','POD'],
  snipper: ['VID','DAÑ','VEL','ALC','PRE','CAD'],
};

function numToRank(n) {
  if (n >= 96) return 'S';
  if (n >= 81) return 'A';
  if (n >= 66) return 'B';
  if (n >= 51) return 'C';
  if (n >= 31) return 'D';
  return 'E';
}

function buildRadar(char) {
  const size   = 170;
  const cx     = size / 2;
  const cy     = size / 2;
  const rRing  = 78;   // radio anillo gris externo
  const rGold  = 56;   // radio círculo dorado
  const N      = 6;
  const vals   = Object.values(char.stats);
  const labels = STAT_ABREV[char.clase];
  const color  = CLASE_COLORS[char.clase];
  const ranks  = vals.map(numToRank);

  function pts(r) {
    return Array.from({ length: N }, (_, i) => {
      const a = (Math.PI * 2 * i) / N - Math.PI / 2;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    });
  }

  function radarPts() {
    return Array.from({ length: N }, (_, i) => {
      const a = (Math.PI * 2 * i) / N - Math.PI / 2;
      const r = (Math.min(vals[i], 99) / 99) * rGold * 0.93;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    });
  }

  const toStr  = p => p.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const gridLvl = [0.25, 0.5, 0.75, 1.0];
  const outerPts = pts(rRing - 8);
  const innerPts = pts(rGold);
  const filled   = radarPts();

  const gridHex = gridLvl.map(l =>
    `<polygon points="${toStr(pts(rGold * l))}" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="0.7"/>`
  ).join('');

  const spokes = innerPts.map(([x,y]) =>
    `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(0,0,0,0.18)" stroke-width="0.7"/>`
  ).join('');

  // Center rank list (vertical)
  const centerList = ranks.map((r, i) =>
    `<text x="${cx}" y="${cy - 25 + i * 10}" text-anchor="middle"
      font-family="Georgia,serif" font-size="7.5" font-weight="bold"
      fill="rgba(0,0,0,0.5)">${r}</text>`
  ).join('');

  // Vertex labels (abbreviated stat) + rank letter
  const vertexEls = outerPts.map(([x, y], i) => {
    const a  = (Math.PI * 2 * i) / N - Math.PI / 2;
    // rank letter just inside the gold circle edge
    const rx = cx + (rGold + 11) * Math.cos(a);
    const ry = cy + (rGold + 11) * Math.sin(a);
    // stat label outside the gray ring
    const lx = cx + (rRing + 3) * Math.cos(a);
    const ly = cy + (rRing + 3) * Math.sin(a);
    return `
      <text x="${lx.toFixed(1)}" y="${(ly + 3).toFixed(1)}" text-anchor="middle"
        font-family="'Nunito',sans-serif" font-size="6" font-weight="800"
        fill="rgba(255,255,255,0.75)" letter-spacing="0.4">${labels[i]}</text>
      <text x="${rx.toFixed(1)}" y="${(ry + 5).toFixed(1)}" text-anchor="middle"
        font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="rgba(0,0,0,0.65)">${ranks[i]}</text>`;
  }).join('');

  const uid = char.id.replace(/[^a-z0-9]/gi,'');

  return `<svg viewBox="0 0 ${size} ${size}" width="160" height="160"
    style="display:block;margin:2px auto 0;filter:drop-shadow(0 3px 10px rgba(0,0,0,0.55));">
  <defs>
    <radialGradient id="go-${uid}" cx="48%" cy="38%" r="62%">
      <stop offset="0%" stop-color="#6e7e80"/>
      <stop offset="100%" stop-color="#2e3e3e"/>
    </radialGradient>
    <radialGradient id="gi-${uid}" cx="44%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#cfc070"/>
      <stop offset="100%" stop-color="#7a6820"/>
    </radialGradient>
  </defs>
  <!-- Outer gray ring -->
  <circle cx="${cx}" cy="${cy}" r="${rRing + 8}" fill="url(#go-${uid})"/>
  <!-- Inner gold circle -->
  <circle cx="${cx}" cy="${cy}" r="${rGold + 1}" fill="url(#gi-${uid})"/>
  <!-- Grid -->
  ${gridHex}${spokes}
  <!-- Filled area -->
  <polygon points="${toStr(filled)}"
    fill="${color}" fill-opacity="0.72"
    stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Center rank list -->
  ${centerList}
  <!-- Vertex labels & rank letters -->
  ${vertexEls}
</svg>`;
}

// ── STADO ─────
let expandedId   = null;
let currentAudio = null;

// ── CONSTRUIR-ROSTER ──────
const main   = document.getElementById('main-content');
const roster = document.createElement('div');
roster.className = 'roster';

CHARACTERS.forEach(char => {
  const card = document.createElement('div');
  card.className  = `card ${char.clase}`;
  card.id         = char.id;
  card.dataset.id = char.id;

  const subBadges = char.subclase.split('/').map(s =>
  `<span class="badge subclase">${s.trim()}</span>`
  ).join('');

  card.innerHTML = `
    <div class="burst-ring"></div>
    <div class="card-inner">
      <div class="card-img-wrap">
        <span class="card-name-mini">${char.name}</span>
        <img src="${char.img}" alt="${char.name}" loading="lazy">
        <span class="class-dot ${char.clase}"></span>
      </div>
      <div class="card-info">
        <div class="info-header">
          <span class="info-name">${char.name}</span>
          <div class="badges">
            <span class="badge clase ${char.clase}">${char.clase}</span>
            <div class="subbadges">${subBadges}</div>
          </div>
        </div>
        <p class="info-desc">${char.desc}</p>
        ${char.quote ? `<p class="info-quote">${char.quote}</p>` : ''}
        <div class="radar-wrap">${buildRadar(char)}</div>
        <button class="choose-btn" data-id="${char.id}">⚔ CHOOSE</button>
      </div>
    </div>`;

  roster.appendChild(card);
});

main.appendChild(roster);

// ── EXPANDIR / COLAPSAR ──
function collapseAll() {
  document.querySelectorAll('.card.expanded').forEach(c => c.classList.remove('expanded'));
  document.querySelectorAll('.roster').forEach(r => r.classList.remove('has-expanded'));
  expandedId = null;
}

function expandCard(card) {
  collapseAll();
  card.classList.add('expanded');
  card.closest('.roster').classList.add('has-expanded');
  expandedId = card.dataset.id;
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.choose-btn');
  if (btn) { handleChoose(btn.dataset.id); return; }

  const card = e.target.closest('.card');
  if (card) {
    card.dataset.id === expandedId ? collapseAll() : expandCard(card);
    return;
  }

  if (expandedId) collapseAll();
});

// ── CHOOSE BUTTON ────
function handleChoose(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;

  const card = document.querySelector(`.card[data-id="${id}"]`);
  card.classList.remove('chosen');
  void card.offsetWidth;
  card.classList.add('chosen');
  card.addEventListener('animationend', () => card.classList.remove('chosen'), { once: true });

  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  if (char.audio) {
    currentAudio = new Audio(char.audio);
    currentAudio.play().catch(() => {});
  }

  document.getElementById('banner-avatar').src = char.img;
  document.getElementById('banner-name').textContent = char.name;

  const subBadges = char.subclase.split('/').map(s =>
    `<span class="badge subclase">${s.trim()}</span>`
  ).join('');
  document.getElementById('banner-badges').innerHTML =
    `<span class="badge clase ${char.clase}">${char.clase}</span>${subBadges}`;

  document.getElementById('banner').classList.add('visible');
  localStorage.setItem('selectedFighter', JSON.stringify(
    { id: char.id, name: char.name, clase: char.clase, subclase: char.subclase, img: char.img }
  ));
}

document.getElementById('banner-clear').addEventListener('click', () => {
  document.getElementById('banner').classList.remove('visible');
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  localStorage.removeItem('selectedFighter');
});

const saved = localStorage.getItem('selectedFighter');
if (saved) {
  try {
    const s = JSON.parse(saved);
    document.getElementById('banner-avatar').src = s.img;
    document.getElementById('banner-name').textContent = s.name;
    const subBadges = s.subclase.split('/').map(t =>
      `<span class="badge subclase">${t.trim()}</span>`
    ).join('');
    document.getElementById('banner-badges').innerHTML =
      `<span class="badge clase ${s.clase}">${s.clase}</span>${subBadges}`;
    document.getElementById('banner').classList.add('visible');
  } catch(e) {}
}

// ── FILTRO-SUBCLASE ─────
const dropdownEl = document.getElementById('subfilter-dropdown');
const toggleBtn  = document.getElementById('subfilter-toggle');
const labelEl    = document.getElementById('subfilter-label');

const subclases = [...new Set(
  CHARACTERS.flatMap(c => c.subclase.split('/').map(s => s.trim()))
)];

subclases.forEach(sub => {
  const btn = document.createElement('button');
  btn.className   = 'sub-btn';
  btn.dataset.sub = sub;
  btn.textContent = sub;
  dropdownEl.appendChild(btn);
});

toggleBtn.addEventListener('click', e => {
  e.stopPropagation();
  dropdownEl.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('#subfilter-wrap')) {
    dropdownEl.classList.remove('open');
    toggleBtn.classList.remove('open');
  }
});

let activeSubclase = 'all';

dropdownEl.addEventListener('click', e => {
  const btn = e.target.closest('.sub-btn');
  if (!btn) return;

  activeSubclase = btn.dataset.sub;
  labelEl.textContent = activeSubclase === 'all' ? 'Filtrar por subclase' : activeSubclase;

  dropdownEl.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  dropdownEl.classList.remove('open');
  toggleBtn.classList.remove('open');

  document.querySelectorAll('.card').forEach(card => {
    const char = CHARACTERS.find(c => c.id === card.dataset.id);
    const subs = char.subclase.split('/').map(s => s.trim());
    if (activeSubclase === 'all') {
      card.classList.remove('sub-highlight', 'sub-dim');
    } else if (subs.includes(activeSubclase)) {
      card.classList.add('sub-highlight');
      card.classList.remove('sub-dim');
    } else {
      card.classList.add('sub-dim');
      card.classList.remove('sub-highlight');
    }
  });

  if (expandedId) {
    const expChar = CHARACTERS.find(c => c.id === expandedId);
    const expSubs = expChar.subclase.split('/').map(s => s.trim());
    if (activeSubclase !== 'all' && !expSubs.includes(activeSubclase)) collapseAll();
  }
});

// ── COUNTER ─────
document.getElementById('counter').textContent = `${CHARACTERS.length} Fighters`;

// ── BACKGROUND PARTICLES ─────────────────────
const particleColors = ['#4ecb2d','#29d4f5','#ffe033','#ff5e3a','#a78bfa','#34d9a0'];
const bgEl = document.getElementById('bg-particles');
for (let i = 0; i < 28; i++) {
  const p    = document.createElement('div');
  p.className = 'particle';
  const sz   = 4 + Math.random() * 7;
  p.style.cssText = `
    left:${Math.random()*100}%;bottom:${-10-Math.random()*10}%;
    width:${sz}px;height:${sz}px;
    background:${particleColors[Math.floor(Math.random()*particleColors.length)]};
    animation-duration:${7+Math.random()*12}s;
    animation-delay:${Math.random()*10}s;`;
  bgEl.appendChild(p);
}

// ── ESCALADO-CARDS ───
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.opacity        = '0';
  card.style.animation      = 'card-pop-in 0.38s cubic-bezier(.34,1.5,.64,1) forwards';
  card.style.animationDelay = `${80 + i * 32}ms`;
});
