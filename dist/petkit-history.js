/**
 * PetKit Timeline Card v1.5 — historial completo + sensor de dispensador + multi-idioma
 * Compatible con: github.com/Jezza34000/homeassistant_petkit
 *
 * YAML mínimo:
 *   type: custom:petkit-timeline-card
 *   media_path: Petkit
 *
 * Con tab Alimentación:
 *   type: custom:petkit-timeline-card
 *   media_path: Petkit
 *   dispenser_entity: sensor.tolva_datos_de_distribucion_raw
 */

// ── Traducciones ──────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  es: {
    tabs:   { all: 'Todo', visit: 'Aparecer', eating: 'Comida', feeding: 'Alimentación', other: 'Otros' },
    events: {
      eat:         { title: 'Mascota comiendo',               subtitle: ['¡Buen provecho, campeón!', 'Come, come, que hay que crecer.', 'Momento de recarga de energía.', 'El ritual sagrado de la comida.'] },
      feed:        { title: 'Mascota disfrutó la comida',     subtitle: [] },
      pet:         { title: 'Mascota apareció',               subtitle: ['¡Esa mirada adorable es irresistible!', '¡El jefe ha llegado!', '¡Nadie puede ignorar esa carita!', '¡Vaya presencia tiene esta estrella!'] },
      pet_detect:  { title: 'Mascota detectada',              subtitle: ['¡Ahí está!', '¡Te pillé!', 'Presencia confirmada.', '¡Detectado!'] },
      move:        { title: 'Movimiento detectado',           subtitle: ['¿Quién anda ahí?', 'Movimiento sospechoso detectado.', 'El detective ha entrado en acción.', 'Alerta felina activada.'] },
      drink_over:  { title: 'Mascota bebiendo',               subtitle: ['¡Hidratación en curso!', 'El agua más deliciosa del mundo.', 'Bebiendo con toda la elegancia.', 'Protocolo de hidratación activado.'] },
      waste_check: { title: 'Revisión de desechos',           subtitle: [] },
      toileting:   { title: 'Mascota en el arenero',          subtitle: ['Privacidad, por favor.', 'Reunión importante en el arenero.', 'No mires, humano.', 'Asuntos privados en curso.'] },
      dish_compare: 'Comparación de platos de comida',
    },
    ui: { loading: 'Cargando…', empty: 'Sin eventos en las últimas {h} h', before: 'antes de', after: 'Después', pending: 'Pendiente', dispensed: 'Dispensado', cancelled: 'Cancelado', skipped: 'Omitido', error: 'Error', portions: 'porción(es)' },
  },
  en: {
    tabs:   { all: 'All', visit: 'Appear', eating: 'Food', feeding: 'Feeding', other: 'Other' },
    events: {
      eat:         { title: 'Pet eating',                     subtitle: ['Bon appétit, champ!', 'Eat up, gotta grow big.', 'Energy recharge time.', 'The sacred ritual of mealtime.'] },
      feed:        { title: 'Pet enjoyed the meal',           subtitle: [] },
      pet:         { title: 'Pet appeared',                   subtitle: ['That adorable look is irresistible!', 'The boss has arrived!', 'No one can ignore that little face!', 'What a presence this star has!'] },
      pet_detect:  { title: 'Pet detected',                   subtitle: ['There they are!', 'Caught ya!', 'Presence confirmed.', 'Detected!'] },
      move:        { title: 'Movement detected',              subtitle: ['Who goes there?', 'Suspicious movement detected.', 'The detective is on the case.', 'Feline alert activated.'] },
      drink_over:  { title: 'Pet drinking',                   subtitle: ['Hydration in progress!', 'The most delicious water in the world.', 'Drinking with full elegance.', 'Hydration protocol activated.'] },
      waste_check: { title: 'Waste check',                    subtitle: [] },
      toileting:   { title: 'Pet in litter box',              subtitle: ['Privacy, please.', 'Important meeting in the litter box.', "Don't look, human.", 'Private matters in progress.'] },
      dish_compare: 'Food bowl comparison',
    },
    ui: { loading: 'Loading…', empty: 'No events in the last {h} h', before: 'Before', after: 'After', pending: 'Pending', dispensed: 'Dispensed', cancelled: 'Cancelled', skipped: 'Skipped', error: 'Error', portions: 'portion(s)' },
  },
  fr: {
    tabs:   { all: 'Tout', visit: 'Présence', eating: 'Repas', feeding: 'Alimentation', other: 'Autre' },
    events: {
      eat:         { title: 'Animal en train de manger',      subtitle: ['Bon appétit, champion !', 'Mange, mange, faut grandir.', "Moment de recharge d'énergie.", 'Le rituel sacré du repas.'] },
      feed:        { title: 'Repas apprécié',                 subtitle: [] },
      pet:         { title: 'Animal détecté',                 subtitle: ['Ce regard adorable est irrésistible !', 'Le patron est arrivé !', 'Personne ne peut ignorer ce petit museau !', 'Quelle présence, cette star !'] },
      pet_detect:  { title: 'Animal repéré',                  subtitle: ['Te voilà !', "Je t'ai eu !", 'Présence confirmée.', 'Détecté !'] },
      move:        { title: 'Mouvement détecté',              subtitle: ['Qui va là ?', 'Mouvement suspect détecté.', 'Le détective est en action.', 'Alerte féline activée.'] },
      drink_over:  { title: 'Animal qui boit',                subtitle: ["Hydratation en cours !", "L'eau la plus délicieuse du monde.", "Buvant avec toute l'élégance.", "Protocole d'hydratation activé."] },
      waste_check: { title: 'Vérification déchets',           subtitle: [] },
      toileting:   { title: 'Animal dans la litière',         subtitle: ["Intimité, s'il vous plaît.", 'Réunion importante dans la litière.', 'Ne regardez pas, humain.', 'Affaires privées en cours.'] },
      dish_compare: 'Comparaison des gamelles',
    },
    ui: { loading: 'Chargement…', empty: 'Aucun événement dans les {h} dernières h', before: 'Avant', after: 'Après', pending: 'En attente', dispensed: 'Distribué', cancelled: 'Annulé', skipped: 'Ignoré', error: 'Erreur', portions: 'portion(s)' },
  },
  de: {
    tabs:   { all: 'Alle', visit: 'Erkennung', eating: 'Futter', feeding: 'Fütterung', other: 'Sonstiges' },
    events: {
      eat:         { title: 'Tier frisst',                    subtitle: ['Guten Appetit, Champ!', 'Essen, essen, wachsen muss man ja.', 'Zeit zum Energie aufladen.', 'Das heilige Ritual der Mahlzeit.'] },
      feed:        { title: 'Tier hat Mahlzeit genossen',     subtitle: [] },
      pet:         { title: 'Tier erschienen',                subtitle: ['Dieser Blick ist unwiderstehlich!', 'Der Chef ist da!', 'Niemand kann dieses Gesichtchen ignorieren!', 'Was für eine Ausstrahlung diese Berühmtheit hat!'] },
      pet_detect:  { title: 'Tier erkannt',                   subtitle: ['Da ist es!', 'Erwischt!', 'Anwesenheit bestätigt.', 'Erkannt!'] },
      move:        { title: 'Bewegung erkannt',               subtitle: ['Wer ist da?', 'Verdächtige Bewegung erkannt.', 'Der Detektiv ist im Einsatz.', 'Katzenalarm aktiviert.'] },
      drink_over:  { title: 'Tier trinkt',                    subtitle: ['Hydratation läuft!', 'Das köstlichste Wasser der Welt.', 'Trinken mit voller Eleganz.', 'Hydratationsprotokoll aktiviert.'] },
      waste_check: { title: 'Abfallprüfung',                  subtitle: [] },
      toileting:   { title: 'Tier in der Katzentoilette',     subtitle: ['Privatsphäre, bitte.', 'Wichtige Besprechung in der Katzentoilette.', 'Nicht gucken, Mensch.', 'Private Angelegenheiten im Gange.'] },
      dish_compare: 'Napfvergleich',
    },
    ui: { loading: 'Laden…', empty: 'Keine Ereignisse in den letzten {h} h', before: 'Vorher', after: 'Nachher', pending: 'Ausstehend', dispensed: 'Ausgegeben', cancelled: 'Abgebrochen', skipped: 'Übersprungen', error: 'Fehler', portions: 'Portion(en)' },
  },
  pt: {
    tabs:   { all: 'Tudo', visit: 'Apareceu', eating: 'Comida', feeding: 'Alimentação', other: 'Outros' },
    events: {
      eat:         { title: 'Animal comendo',                 subtitle: ['Bom apetite, campeão!', 'Come, come, que é pra crescer.', 'Momento de recarregar energia.', 'O ritual sagrado da refeição.'] },
      feed:        { title: 'Animal aproveitou a refeição',   subtitle: [] },
      pet:         { title: 'Animal apareceu',                subtitle: ['Esse olhar adorável é irresistível!', 'O chefe chegou!', 'Ninguém consegue ignorar esse rostinho!', 'Que presença tem esta estrela!'] },
      pet_detect:  { title: 'Animal detectado',               subtitle: ['Aí está!', 'Te peguei!', 'Presença confirmada.', 'Detectado!'] },
      move:        { title: 'Movimento detectado',            subtitle: ['Quem está aí?', 'Movimento suspeito detectado.', 'O detetive entrou em ação.', 'Alerta felino ativado.'] },
      drink_over:  { title: 'Animal bebendo',                 subtitle: ['Hidratação em andamento!', 'A água mais deliciosa do mundo.', 'Bebendo com toda elegância.', 'Protocolo de hidratação ativado.'] },
      waste_check: { title: 'Verificação de resíduos',        subtitle: [] },
      toileting:   { title: 'Animal na caixa de areia',       subtitle: ['Privacidade, por favor.', 'Reunião importante na caixa de areia.', 'Não olhe, humano.', 'Assuntos privados em andamento.'] },
      dish_compare: 'Comparação de tigelas',
    },
    ui: { loading: 'Carregando…', empty: 'Sem eventos nas últimas {h} h', before: 'Antes', after: 'Depois', pending: 'Pendente', dispensed: 'Dispensado', cancelled: 'Cancelado', skipped: 'Ignorado', error: 'Erro', portions: 'porção(ões)' },
  },
  it: {
    tabs:   { all: 'Tutto', visit: 'Presenze', eating: 'Cibo', feeding: 'Alimentazione', other: 'Altro' },
    events: {
      eat:         { title: 'Animale che mangia',             subtitle: ['Buon appetito, campione!', 'Mangia, mangia, bisogna crescere.', 'Momento di ricarica energetica.', 'Il rituale sacro del pasto.'] },
      feed:        { title: 'Animale ha apprezzato il pasto', subtitle: [] },
      pet:         { title: 'Animale apparso',                subtitle: ['Quello sguardo adorabile è irresistibile!', 'Il capo è arrivato!', 'Nessuno può ignorare quel musetto!', 'Che presenza questa stella!'] },
      pet_detect:  { title: 'Animale rilevato',               subtitle: ['Eccolo!', 'Preso!', 'Presenza confermata.', 'Rilevato!'] },
      move:        { title: 'Movimento rilevato',             subtitle: ['Chi va là?', 'Movimento sospetto rilevato.', 'Il detective è in azione.', 'Allarme felino attivato.'] },
      drink_over:  { title: 'Animale che beve',               subtitle: ["Idratazione in corso!", "L'acqua più deliziosa del mondo.", "Beve con tutta l'eleganza.", 'Protocollo di idratazione attivato.'] },
      waste_check: { title: 'Controllo rifiuti',              subtitle: [] },
      toileting:   { title: 'Animale nella lettiera',         subtitle: ['Privacy, per favore.', 'Riunione importante nella lettiera.', 'Non guardare, umano.', 'Affari privati in corso.'] },
      dish_compare: 'Confronto ciotole',
    },
    ui: { loading: 'Caricamento…', empty: 'Nessun evento nelle ultime {h} h', before: 'Prima', after: 'Dopo', pending: 'In attesa', dispensed: 'Erogato', cancelled: 'Annullato', skipped: 'Saltato', error: 'Errore', portions: 'porzione/i' },
  },
  nl: {
    tabs:   { all: 'Alles', visit: 'Verschijning', eating: 'Voer', feeding: 'Voeding', other: 'Overig' },
    events: {
      eat:         { title: 'Huisdier eet',                   subtitle: ['Eet smakelijk, kampioentje!', 'Eten, eten, moet groeien.', 'Tijd om energie op te laden.', 'Het heilige ritueel van het eten.'] },
      feed:        { title: 'Huisdier genoot van maaltijd',   subtitle: [] },
      pet:         { title: 'Huisdier verscheen',             subtitle: ['Die schattige blik is onweerstaanbaar!', 'De baas is gearriveerd!', 'Niemand kan dat snoetje negeren!', 'Wat een aanwezigheid heeft deze ster!'] },
      pet_detect:  { title: 'Huisdier gedetecteerd',          subtitle: ['Daar is het!', 'Betrapt!', 'Aanwezigheid bevestigd.', 'Gedetecteerd!'] },
      move:        { title: 'Beweging gedetecteerd',          subtitle: ['Wie is daar?', 'Verdachte beweging gedetecteerd.', 'De detective is in actie.', 'Kat alarm geactiveerd.'] },
      drink_over:  { title: 'Huisdier drinkt',                subtitle: ['Hydratatie bezig!', 'Het lekkerste water ter wereld.', 'Drinken met volle elegantie.', 'Hydratatie protocol geactiveerd.'] },
      waste_check: { title: 'Afvalcontrole',                  subtitle: [] },
      toileting:   { title: 'Huisdier in kattenbak',          subtitle: ['Privacy, alsjeblieft.', 'Belangrijke vergadering in de kattenbak.', 'Niet kijken, mens.', 'Privézaken in uitvoering.'] },
      dish_compare: 'Vergelijking voerbakken',
    },
    ui: { loading: 'Laden…', empty: 'Geen evenementen in de afgelopen {h} u', before: 'Voor', after: 'Na', pending: 'In afwachting', dispensed: 'Uitgedeeld', cancelled: 'Geannuleerd', skipped: 'Overgeslagen', error: 'Fout', portions: 'portie(s)' },
  },
  ca: {
    tabs:   { all: 'Tot', visit: 'Aparició', eating: 'Menjar', feeding: 'Alimentació', other: 'Altres' },
    events: {
      eat:         { title: 'Mascota menjant',                subtitle: ['Bon profit, campió!', 'Menja, menja, que cal créixer.', "Moment de recàrrega d'energia.", 'El ritual sagrat del menjar.'] },
      feed:        { title: 'Mascota va gaudir del menjar',   subtitle: [] },
      pet:         { title: 'Mascota apareguda',              subtitle: ['Aquella mirada adorable és irresistible!', 'El cap ha arribat!', 'Ningú pot ignorar aquella careta!', 'Quina presència té aquesta estrella!'] },
      pet_detect:  { title: 'Mascota detectada',              subtitle: ['Aquí és!', 'Et vaig pillar!', 'Presència confirmada.', 'Detectat!'] },
      move:        { title: 'Moviment detectat',              subtitle: ['Qui hi ha aquí?', 'Moviment sospitós detectat.', 'El detectiu ha entrat en acció.', 'Alerta felina activada.'] },
      drink_over:  { title: 'Mascota bevent',                 subtitle: ['Hidratació en curs!', "L'aigua més deliciosa del món.", "Bevent amb tota l'elegància.", "Protocol d'hidratació activat."] },
      waste_check: { title: 'Revisió de residus',             subtitle: [] },
      toileting:   { title: 'Mascota a la sorra',             subtitle: ['Privacitat, si us plau.', 'Reunió important al sorral.', 'No miris, humà.', 'Assumptes privats en curs.'] },
      dish_compare: 'Comparació de plats',
    },
    ui: { loading: 'Carregant…', empty: 'Sense esdeveniments en les últimes {h} h', before: 'Abans', after: 'Després', pending: 'Pendent', dispensed: 'Dispensat', cancelled: 'Cancel·lat', skipped: 'Omès', error: 'Error', portions: 'ració/racións' },
  },
  pl: {
    tabs:   { all: 'Wszystko', visit: 'Pojawienie', eating: 'Jedzenie', feeding: 'Karmienie', other: 'Inne' },
    events: {
      eat:         { title: 'Zwierzę je',                     subtitle: ['Smacznego, mistrzu!', 'Jedz, jedz, trzeba rosnąć.', 'Czas na doładowanie energii.', 'Święty rytuał posiłku.'] },
      feed:        { title: 'Zwierzę zjadło posiłek',         subtitle: [] },
      pet:         { title: 'Zwierzę pojawiło się',           subtitle: ['Ten uroczy wzrok jest nieodparty!', 'Szef przybył!', 'Nikt nie może zignorować tej buźki!', 'Co za osobowość ta gwiazda ma!'] },
      pet_detect:  { title: 'Wykryto zwierzę',                subtitle: ['Jest!', 'Mam cię!', 'Obecność potwierdzona.', 'Wykryty!'] },
      move:        { title: 'Wykryto ruch',                   subtitle: ['Kto tam?', 'Wykryto podejrzany ruch.', 'Detektyw w akcji.', 'Alert koci aktywowany.'] },
      drink_over:  { title: 'Zwierzę pije',                   subtitle: ['Nawadnianie w toku!', 'Najsmaczniejsza woda na świecie.', 'Pije z pełną elegancją.', 'Protokół nawadniania aktywowany.'] },
      waste_check: { title: 'Kontrola odchodów',              subtitle: [] },
      toileting:   { title: 'Zwierzę w kuwecie',              subtitle: ['Prywatność, proszę.', 'Ważne spotkanie w kuwecie.', 'Nie patrz, człowieku.', 'Prywatne sprawy w toku.'] },
      dish_compare: 'Porównanie misek',
    },
    ui: { loading: 'Ładowanie…', empty: 'Brak zdarzeń w ostatnich {h} h', before: 'Przed', after: 'Po', pending: 'Oczekujące', dispensed: 'Wydane', cancelled: 'Anulowane', skipped: 'Pominięte', error: 'Błąd', portions: 'porcja/e' },
  },
};

function getLang(hass, override) {
  const raw = override || hass?.language || navigator.language || 'en';
  const code = raw.toLowerCase().split('-')[0];
  return TRANSLATIONS[code] ?? TRANSLATIONS['en'];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// Hash estable del timestamp → índice de frase (mismo evento = misma frase siempre)
function pickSubtitle(subtitles, ts) {
  if (!Array.isArray(subtitles) || !subtitles.length) return subtitles || '';
  const idx = Math.abs((+ts / 1000 | 0) % subtitles.length);
  return subtitles[idx];
}

function fmtTime(ts) {
  return new Date(ts).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

function fmtStamp(ts, lang) {
  const d = new Date(ts);
  return `PETKIT ${d.toLocaleDateString()} ${fmtTime(ts)}`;
}


// media-source://media_source/local/foo/bar → /media/local/foo/bar
function mediaIdToUrl(id) {
  const prefix = 'media-source://media_source/local/';
  return id.startsWith(prefix) ? '/media/local/' + id.slice(prefix.length) : null;
}

// Parsea título de carpeta de fecha.
// Acepta: "26/08/2026" (DD/MM/YYYY), "20260826" (YYYYMMDD), "2026-08-26" (ISO)
function parseDateFolder(title) {
  if (!title) return null;
  let iso = null;
  const a = title.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);  // DD/MM/YYYY
  if (a) iso = `${a[3]}-${a[2]}-${a[1]}`;
  const b = title.match(/^(\d{4})(\d{2})(\d{2})$/);       // YYYYMMDD
  if (b) iso = `${b[1]}-${b[2]}-${b[3]}`;
  const c = title.match(/^(\d{4})-(\d{2})-(\d{2})$/);     // ISO YYYY-MM-DD
  if (c) iso = title;
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00`);
  return isNaN(d.getTime()) ? null : d;
}

// Parsea título de archivo a hora dentro de dateBase.
// Acepta: "18:40:07" (HH:MM:SS), "1787934200", "300024982_1787934200.jpg"
function parseTimestamp(dateBase, fileTitle) {
  const d = new Date(dateBase);
  // HH:MM:SS
  const hms = fileTitle.match(/^(\d{2}):(\d{2}):(\d{2})$/);
  if (hms) { d.setHours(+hms[1], +hms[2], +hms[3], 0); return isNaN(d.getTime()) ? null : d; }
  // "deviceId_timestamp.ext" o solo "timestamp" o "timestamp.ext"
  const m = fileTitle.match(/(?:^\d+_)?(\d{9,13})(?:\.\w+)?$/);
  if (m) {
    const ts = +m[1];
    const ms = m[1].length <= 10 ? ts * 1000 : ts;
    return new Date(ms);
  }
  return isNaN(d.getTime()) ? null : d;
}

// Clasifica subcarpeta → tipo interno
function classifyFolder(name) {
  const f = name.toLowerCase().replace(/[\s_-]/g, '');
  if (f === 'dishbefore')  return 'dish_before';
  if (f === 'dishafter')   return 'dish_after';
  if (f === 'eat')         return 'eat';
  if (f === 'feed')        return 'feed';
  if (f === 'pet')         return 'pet';
  if (f === 'petdetect')   return 'pet_detect';
  if (f === 'move')        return 'move';
  if (f === 'drinkover')   return 'drink_over';
  if (f === 'wastecheck')  return 'waste_check';
  if (f === 'toileting')   return 'toileting';
  return 'unknown';
}

// Tab al que pertenece cada tipo de media
function typeToTab(type) {
  if (['pet', 'pet_detect', 'move'].includes(type))             return 'visit';
  if (['eat', 'drink_over', 'dish_before', 'dish_after'].includes(type)) return 'eating';
  if (type === 'feed')                                           return 'feeding';
  if (['waste_check', 'toileting'].includes(type))              return 'other';
  return 'other';
}

// Estado del dispensador → clave de traducción
const STATUS_KEY = { 0: 'pending', 1: 'dispensed', 2: 'dispensed', 3: 'dispensed', 6: 'pending', 7: 'cancelled', 8: 'skipped', 9: 'error' };

// Parsea el estado bruto del sensor de distribución
// Formato: id,hora,minuto,cantidad,estado,...
function parseDispenserState(state) {
  if (!state || state === 'unavailable' || state === 'unknown') return [];
  const re = /(\d{1,2}),(\d{1,2}),(\d{1,2}),(\d{1,3}),(\d)/g;
  const entries = [];
  for (const m of state.matchAll(re)) {
    entries.push({ id: +m[1], hour: +m[2], minute: +m[3], amount: +m[4], status: +m[5] });
  }
  return entries;
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

const TAB_IDS = ['all', 'visit', 'eating', 'feeding', 'other'];

// ── Card ──────────────────────────────────────────────────────────────────────

class PetkitTimelineCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hass              = null;
    this._config            = {};
    this._mediaItems        = [];
    this._schedule          = [];
    this._lastScheduleState = null;
    this._loading           = true;
    this._timer             = null;
    this._activeTab         = 'all';
  }

  setConfig(config) {
    this._config = {
      title:            config.title            ?? 'YumShare hoy',
      hours:            config.hours            ?? 24,
      media_path:       config.media_path       ?? 'Petkit',
      language:         config.language         ?? null,
      refresh_minutes:  config.refresh_minutes  ?? 10,
      dispenser_entity: config.dispenser_entity ?? null,
      debug:            config.debug            ?? false,
    };
    this._render();
  }

  _log(...args) {
    if (this._config.debug) console.info('[petkit-timeline-card]', ...args);
  }

  set hass(hass) {
    this._hass = hass;

    // Actualizar horario del dispensador cuando cambia el sensor
    const entity = this._config.dispenser_entity;
    if (entity) {
      const state = hass.states[entity]?.state ?? '';
      if (state !== this._lastScheduleState) {
        this._lastScheduleState = state;
        this._schedule = parseDispenserState(state);
        if (!this._loading) this._render();
      }
    }

    if (!this._timer) {
      this._loadAll();
      const ms = Math.max(5, this._config.refresh_minutes) * 60_000;
      this._timer = setInterval(() => this._loadAll(), ms);
    }
  }

  getCardSize() { return 12; }

  get _lang() { return getLang(this._hass, this._config.language); }

  // ── Media browse ──────────────────────────────────────────────────────────

  async _browse(id) {
    try {
      return await this._hass.callWS({ type: 'media_source/browse_media', media_content_id: id });
    } catch (e) {
      console.warn('[petkit-timeline-card] browse:', id, e);
      return null;
    }
  }

  async _signPath(path) {
    try {
      const r = await this._hass.callWS({ type: 'auth/sign_path', path });
      return r?.path ?? path;
    } catch { return path; }
  }

  async _loadMedia() {
    const rootId = `media-source://media_source/local/${this._config.media_path}`;
    this._debugInfo = { rootId, resolvedPath: rootId, rootTitles: [], dateFolders: [], errors: [] };

    const root = await this._browse(rootId);
    if (!root?.children) {
      this._debugInfo.errors.push('browse falló: ' + rootId);
      console.error('[petkit-timeline-card] Sin acceso a:', rootId);
      return;
    }

    this._debugInfo.rootTitles = root.children.map(c => `${c.title}(${c.media_class})`);
    this._log('root children:', this._debugInfo.rootTitles);

    // Auto-descubrir: si root no tiene carpetas de fecha, bajar un nivel (subcarpeta de dispositivo)
    let searchNode = root;
    const hasDates = root.children.some(c => c.media_class === 'directory' && parseDateFolder(c.title));
    if (!hasDates) {
      for (const dir of root.children.filter(c => c.media_class === 'directory')) {
        const sub = await this._browse(dir.media_content_id);
        this._log('probando subcarpeta', dir.title, '→', sub?.children?.map(c => c.title));
        if (sub?.children?.some(c => c.media_class === 'directory' && parseDateFolder(c.title))) {
          searchNode = sub;
          this._debugInfo.resolvedPath = dir.media_content_id;
          this._debugInfo.rootTitles   = sub.children.map(c => `${c.title}(${c.media_class})`);
          this._log('dispositivo encontrado:', dir.title);
          break;
        }
      }
    }

    const cutoff = Date.now() - this._config.hours * 3_600_000;
    const items  = [];

    const dateFolders = searchNode.children.filter(c => {
      if (c.media_class !== 'directory') return false;
      const d = parseDateFolder(c.title);
      return d && (d.getTime() + 86_400_000) >= cutoff;
    });

    this._debugInfo.dateFolders = dateFolders.map(c => c.title);
    this._log('carpetas de fecha en rango:', this._debugInfo.dateFolders);

    await Promise.all(dateFolders.map(async (dateNode) => {
      const dateBase   = parseDateFolder(dateNode.title);
      const dateBrowse = await this._browse(dateNode.media_content_id);
      if (!dateBrowse?.children) return;

      this._log(dateNode.title, '→', dateBrowse.children.map(c => c.title));

      const byType = {};
      await Promise.all(
        dateBrowse.children
          .filter(c => c.media_class === 'directory')
          .map(async (typeNode) => {
            const folderType = classifyFolder(typeNode.title);
            const typeBrowse = await this._browse(typeNode.media_content_id);
            if (!typeBrowse?.children) return;

            this._log(`${typeNode.title}(${folderType}):`,
              typeBrowse.children.map(c => `${c.title}[${c.media_class}/${c.media_content_type}]`));

            // Recoger nodos imagen: directo o dentro de subcarpeta (ej: snapshot/)
            let imageNodes = typeBrowse.children.filter(c => {
              const mt = c.media_content_type ?? '';
              return mt.startsWith('image/') || c.media_class === 'image';
            });

            if (!imageNodes.length) {
              const subDirs = typeBrowse.children.filter(c => c.media_class === 'directory');
              const nested = await Promise.all(subDirs.map(d => this._browse(d.media_content_id)));
              nested.forEach(n => {
                if (!n?.children) return;
                this._log(` └─ subcarpeta:`,
                  n.children.map(c => `${c.title}[${c.media_class}/${c.media_content_type}]`));
                n.children.forEach(c => {
                  const mt = c.media_content_type ?? '';
                  if (mt.startsWith('image/') || c.media_class === 'image') imageNodes.push(c);
                });
              });
            }

            const files = imageNodes
              .map(f => {
                const ts  = parseTimestamp(dateBase, f.title);
                const url = mediaIdToUrl(f.media_content_id);
                if (!ts) console.warn('[petkit-timeline-card] sin timestamp:', f.title);
                return ts && url && ts.getTime() >= cutoff ? { ts, url } : null;
              })
              .filter(Boolean);

            if (files.length) byType[folderType] = files;
          })
      );

      this._feedPhotos = (byType['feed'] ?? []);
      const befores = (byType['dish_before'] ?? []).sort((a, b) => a.ts - b.ts);
      const afters  = (byType['dish_after']  ?? []).sort((a, b) => a.ts - b.ts);
      const pairCount = Math.max(befores.length, afters.length);
      for (let i = 0; i < pairCount; i++) {
        const before = befores[i] ?? null;
        const after  = afters[i]  ?? null;
        const displayTs = after?.ts ?? before?.ts;
        items.push({
          type:      'dish-compare',
          ts:        displayTs,
          time:      displayTs.toISOString(),
          urlBefore: before?.url ?? null,
          urlAfter:  after?.url  ?? null,
          tab:       'eating',
        });
      }

      for (const [folderType, files] of Object.entries(byType)) {
        if (folderType === 'dish_before' || folderType === 'dish_after' || folderType === 'feed') continue;
        const tab = typeToTab(folderType);
        files.forEach(f => {
          items.push({
            type:      'image-event',
            ts:        f.ts,
            time:      f.ts.toISOString(),
            eventType: folderType,
            url:       f.url,
            tab,
          });
        });
      }
    }));

    // Link each dish-compare to its nearest eat event for sort ordering
    const eatItems = items.filter(i => i.eventType === 'eat');
    items.forEach(item => {
      if (item.type !== 'dish-compare') return;
      let nearest = null, bestDiff = Infinity;
      eatItems.forEach(e => {
        const diff = Math.abs(e.ts - item.ts);
        if (diff < bestDiff) { bestDiff = diff; nearest = e; }
      });
      item._sortTs = nearest ? new Date(nearest.ts.getTime() - 1) : item.ts;
    });

    this._mediaItems = items.sort((a, b) => {
      const ta = a._sortTs ?? a.ts;
      const tb = b._sortTs ?? b.ts;
      return tb - ta;
    });
  }

  async _loadAll() {
    if (!this._hass) return;
    this._loading = true;
    this._render();
    await this._loadMedia();
    this._loading = false;
    this._render();
  }

  _allItems() {
    const items  = [...this._mediaItems];
    const cutoff = Date.now() - this._config.hours * 3_600_000;

    if (this._schedule.length) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      this._schedule.forEach(entry => {
        const ts = new Date(today);
        ts.setHours(entry.hour, entry.minute, 0, 0);

        // Ignorar entradas dispensadas fuera de la ventana de tiempo
        if (entry.status !== 0 && ts.getTime() < cutoff) return;

        // Buscar imagen feed más cercana en tiempo
        let matchedUrl = null;
        if ([1, 2, 3].includes(entry.status)) {
          let bestDiff = Infinity;
          for (const f of (this._feedPhotos ?? [])) {
            const diff = Math.abs(f.ts.getTime() - ts.getTime());
            if (diff < bestDiff) { bestDiff = diff; matchedUrl = f.url; }
          }
        }

        items.push({
          type:   'feed-event',
          ts,
          time:   ts.toISOString(),
          status: entry.status,
          amount: entry.amount,
          url:    matchedUrl,
          tab:    'feeding',
        });
      });
    }

    return items.sort((a, b) => {
      const ta = a._sortTs ?? a.ts;
      const tb = b._sortTs ?? b.ts;
      return tb - ta;
    });
  }

  _filtered(items) {
    if (this._activeTab === 'all') return items;
    return items.filter(i => i.tab === this._activeTab);
  }

  // ── Render ────────────────────────────────────────────────────────────────

  _esc(s) {
    return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  _render() {
    const lang         = this._lang;
    const allItems     = this._allItems();
    const visibleItems = this._filtered(allItems);
    const counts       = {};
    TAB_IDS.forEach(id => {
      counts[id] = id === 'all' ? allItems.length : allItems.filter(i => i.tab === id).length;
    });

    this.shadowRoot.innerHTML = `
<style>
  *,*::before,*::after { box-sizing:border-box; margin:0; padding:0 }
  :host { display:block; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif }
  .card { background:#fff; border-radius:16px; overflow:hidden; }

  .app-header { display:flex; align-items:center; justify-content:space-between; padding:14px 16px 0; }
  .app-title { font-size:17px; font-weight:700; color:#1a1a1a; }
  .btn-refresh { background:none; border:none; cursor:pointer; padding:4px 8px; font-size:18px; color:#999; border-radius:8px; }
  .btn-refresh:active { background:#f0f0f0; }

  .app-tabs { display:flex; padding:10px 16px 0; border-bottom:1px solid #f0f0f0; overflow-x:auto; scrollbar-width:none; gap:20px; }
  .app-tabs::-webkit-scrollbar { display:none }
  .app-tab { font-size:13px; font-weight:600; color:#999; border:none; background:none; padding:0 0 9px; border-bottom:2px solid transparent; margin-bottom:-1px; cursor:pointer; white-space:nowrap; }
  .app-tab.active { color:#FF6B35; border-bottom-color:#FF6B35; }
  .tab-cnt { font-size:11px; font-weight:500; opacity:.7; }

  .timeline { padding:0 0 20px; }
  .tl-item { padding:14px 16px 0; }
  .tl-head { display:flex; align-items:baseline; gap:10px; margin-bottom:6px; }
  .tl-time { font-size:15px; font-weight:700; color:#1a1a1a; flex-shrink:0; min-width:46px; }
  .tl-title { font-size:15px; font-weight:700; color:#1a1a1a; line-height:1.3; }
  .tl-subtitle { font-size:12px; color:#aaa; margin-bottom:8px; padding-left:56px; }

  .tl-img-big { width:100%; border-radius:12px; overflow:hidden; background:#f0f0f0; position:relative; }
  .tl-img-big img { width:100%; display:block; object-fit:cover; max-height:240px; }
  .tl-img-stamp { position:absolute; bottom:6px; right:8px; font-size:10px; color:rgba(255,255,255,.85); background:rgba(0,0,0,.45); padding:1px 6px; border-radius:3px; font-variant-numeric:tabular-nums; }

  .tl-compare { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .tl-compare-col { display:flex; flex-direction:column; gap:5px; }
  .tl-compare-wrap { border-radius:10px; overflow:hidden; background:#f0f0f0; cursor:zoom-in; }
  .tl-compare-wrap img { width:100%; display:block; object-fit:cover; aspect-ratio:3/2; }
  .tl-compare-label { text-align:center; font-size:12px; color:#aaa; }

  .tl-sep { height:1px; background:#f2f2f2; margin:14px 16px 0; }

  .loading { display:flex; flex-direction:column; align-items:center; padding:40px; gap:10px; color:#aaa; font-size:13px; }
  .spinner { width:22px; height:22px; border:2.5px solid #eee; border-top-color:#FF6B35; border-radius:50%; animation:spin .7s linear infinite; }
  @keyframes spin { to { transform:rotate(360deg) } }
  .empty { text-align:center; padding:40px 20px; color:#bbb; font-size:13px; }

  .timeline-scroll { max-height:520px; overflow-y:auto; scrollbar-width:thin; scrollbar-color:#e0e0e0 transparent; }
  .timeline-scroll::-webkit-scrollbar { width:4px; }
  .timeline-scroll::-webkit-scrollbar-thumb { background:#e0e0e0; border-radius:2px; }

  .tl-img-big { cursor:zoom-in; }

  .lb-overlay { position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,.85); display:flex; align-items:center; justify-content:center; }
  .lb-overlay img { max-width:92vw; max-height:88vh; border-radius:10px; object-fit:contain; box-shadow:0 8px 40px rgba(0,0,0,.6); }
  .lb-close { position:absolute; top:16px; right:20px; font-size:28px; color:#fff; cursor:pointer; line-height:1; background:none; border:none; opacity:.8; }
  .lb-close:hover { opacity:1; }

  .feed-badge { font-size:10px; font-weight:700; color:#fff; padding:2px 8px; border-radius:10px; align-self:center; white-space:nowrap; }
  .feed-amount { font-size:12px; color:#888; margin-left:auto; align-self:center; }
  .feed-no-img { display:flex; align-items:center; justify-content:center; padding:20px; color:#ccc; font-size:13px; background:#fafafa; border-radius:12px; }
</style>

<ha-card class="card">

  <div class="app-header">
    <span class="app-title">${this._esc(this._config.title)}</span>
    <button class="btn-refresh" id="btn-r">&#x21BB;</button>
  </div>

  <div class="app-tabs">
    ${TAB_IDS.map(id => {
      const cnt   = counts[id] ?? 0;
      if (cnt === 0) return '';
      const label = lang.tabs[id] ?? id;
      return `<button class="app-tab${this._activeTab === id ? ' active' : ''}" data-tab="${id}">${label} <span class="tab-cnt">${cnt}</span></button>`;
    }).join('')}
  </div>

  <div class="timeline-scroll timeline">
    ${this._loading
      ? `<div class="loading"><div class="spinner"></div>${lang.ui.loading}</div>`
      : visibleItems.length === 0
        ? `<div class="empty">&#x1F43E; ${lang.ui.empty.replace('{h}', Number(this._config.hours))}</div>`
        : visibleItems.map((item, idx) => {
            const timeStr = fmtTime(item.time);
            const isLast  = idx === visibleItems.length - 1;
            let html = '';

            if (item.type === 'image-event') {
              const meta     = lang.events[item.eventType] ?? { title: item.eventType, subtitle: [] };
              const subtitle = pickSubtitle(meta.subtitle, item.ts);
              html = `
              <div class="tl-item">
                <div class="tl-head">
                  <span class="tl-time">${timeStr}</span>
                  <span class="tl-title">${meta.title}</span>
                </div>
                ${subtitle ? `<div class="tl-subtitle">${subtitle}</div>` : ''}
                <div class="tl-img-big">
                  <img data-src="${this._esc(item.url)}" alt="${this._esc(meta.title)}"
                       onerror="this.parentElement.style.display='none'" />
                  <div class="tl-img-stamp">${fmtStamp(item.time)}</div>
                </div>
              </div>`;
            } else if (item.type === 'feed-event') {
              const statusKey   = STATUS_KEY[item.status] ?? 'dispensed';
              const statusLabel = lang.ui[statusKey] ?? statusKey;
              const isPending   = item.status === 0 || item.status === 6;
              const badgeColor  = isPending ? '#FF6B35' : '#4CAF50';
              html = `
              <div class="tl-item">
                <div class="tl-head">
                  <span class="tl-time">${timeStr}</span>
                  <span class="tl-title">${item.amount} ${lang.ui.portions}</span>
                  <span class="feed-badge" style="background:${badgeColor}">${statusLabel}</span>
                </div>
                ${item.url
                  ? `<div class="tl-img-big">
                       <img data-src="${this._esc(item.url)}" alt="${this._esc(statusLabel)}"
                            onerror="this.parentElement.style.display='none'" />
                       <div class="tl-img-stamp">${fmtStamp(item.time)}</div>
                     </div>`
                  : isPending ? '' : `<div class="feed-no-img">&#x1F4F7;</div>`
                }
              </div>`;
            } else if (item.type === 'dish-compare') {
              html = `
              <div class="tl-item">
                <div class="tl-head">
                  <span class="tl-time">${timeStr}</span>
                  <span class="tl-title">${lang.events.dish_compare}</span>
                </div>
                <div class="tl-compare">
                  <div class="tl-compare-col">
                    ${item.urlBefore ? `<div class="tl-compare-wrap"><img data-src="${this._esc(item.urlBefore)}" alt="${this._esc(lang.ui.before)}" /></div>` : ''}
                    <div class="tl-compare-label">${lang.ui.before}</div>
                  </div>
                  <div class="tl-compare-col">
                    ${item.urlAfter ? `<div class="tl-compare-wrap"><img data-src="${this._esc(item.urlAfter)}" alt="${this._esc(lang.ui.after)}" /></div>` : ''}
                    <div class="tl-compare-label">${lang.ui.after}</div>
                  </div>
                </div>
              </div>`;
            }

            return html + (!isLast ? '<div class="tl-sep"></div>' : '');
          }).join('')
    }
  </div>

</ha-card>`;

    this.shadowRoot.querySelectorAll('.app-tab').forEach(btn => {
      btn.addEventListener('click', () => { this._activeTab = btn.dataset.tab; this._render(); });
    });

    const btnR = this.shadowRoot.getElementById('btn-r');
    if (btnR) btnR.addEventListener('click', () => this._loadAll());

    this._loadImgs();
    this._bindLightbox();
  }

  _bindLightbox() {
    const root = this.shadowRoot;
    root.querySelectorAll('.tl-img-big img, .tl-compare-wrap img').forEach(img => {
      img.addEventListener('click', () => {
        if (!img.src) return;
        const lb = document.createElement('div');
        lb.className = 'lb-overlay';
        const closeBtn = document.createElement('button');
        closeBtn.className = 'lb-close';
        closeBtn.textContent = '✕';
        const lbImg = document.createElement('img');
        lbImg.src = img.src;
        lb.appendChild(closeBtn);
        lb.appendChild(lbImg);
        root.appendChild(lb);
        const close = () => lb.remove();
        closeBtn.addEventListener('click', close);
        lb.addEventListener('click', e => { if (e.target === lb) close(); });
      });
    });
  }

  _loadImgs() {
    // Recrear IO en cada render para no observar elementos destruidos
    this._io?.disconnect();
    this._io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const img  = entry.target;
        if (!img.isConnected) return;          // elemento ya fuera del DOM
        const path = img.dataset.src;
        if (!path) return;
        this._io.unobserve(img);
        if (this._blobCache?.has(path)) { img.src = this._blobCache.get(path); return; }
        this._hass.fetchWithAuth(path)
          .then(r => r.ok ? r.blob() : null)
          .then(blob => {
            if (!blob || !img.isConnected) return;
            const blobUrl = URL.createObjectURL(blob);
            (this._blobCache = this._blobCache ?? new Map()).set(path, blobUrl);
            img.src = blobUrl;
          })
          .catch(() => {});
      });
    }, { rootMargin: '300px' });
    this.shadowRoot.querySelectorAll('img[data-src]').forEach(img => this._io.observe(img));
  }

  disconnectedCallback() {
    clearInterval(this._timer);
    this._io?.disconnect();
    this._io = null;
    // No revocar blob URLs: evita ERR_FILE_NOT_FOUND si el elemento se remonta
  }
}

customElements.define('petkit-timeline-card', PetkitTimelineCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'petkit-timeline-card',
  name: 'PetKit Timeline Card',
  description: 'Historial visual estilo app PetKit — compatible con todos los idiomas de HA.',
  preview: false,
});
console.info(
  '%c PETKIT-HISTORY %c v1.5.38 ',
  'background:#FF6B35;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 8px',
  'background:#333;color:#fff;border-radius:0 4px 4px 0;padding:2px 8px'
);

