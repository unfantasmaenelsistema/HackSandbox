/* hs.js — base común de HackSandbox (Un Fantasma en el Sistema, MIT)
 * Cabecera y pie de la casa, idioma ES/EN, tema claro/oscuro, progreso y comprobación de flags.
 * Las flags solo están aquí como SHA-256: leer este archivo no las revela. */
(function () {
  'use strict';

  var HASHES = {
    1: '1e32ecd9dd81da81e3ed553ab2cad6c2032adc2b3a13af26728475f900f6a98a',
    2: '41aa6409da417b152cafb7cbb6960fa577dab5ec765d6f8f189030854d2ca3dd',
    3: '50876b53a5de57eb77e92168d08fbacfc670ecfed21aa8bef4a46991d7921c38',
    4: '3c17ee4f84e5a827b02a4128e6777f9dad0851be0d02f7389d4d79d083ec6413',
    5: '6898baa9b95c27fbdb3c98687dd33a810745e44e18e5faa37c7a0102ca5ded1e',
    6: 'eb80d6bf96a5931703abdf3e102029b26125eeb162fd8375ecf4298cbd2fb7d9',
    7: '4c4280bfe00682ba34b1a4bd2041107dd690fb0b4491d5625c40f0fa0dd5313a',
    8: '66a793f08006046d15c64b34e33515399d92c87dbee07441444eed33b82c2338',
    9: '517f00987b1a5b1bf93811d7f4a99334e5ad2d5c4c7f087e2d329b2d363ecc22',
    10: '6f7ced0c8e8d559ac83561e5597dbdd5dfd8fea3b173e370f7e8efe5bc2de0ed'
  };
  var TOTAL = 10;
  var REPO = 'https://github.com/unfantasmaenelsistema/HackSandbox';

  var COMMON = {
    es: {
      back: '← Todos los retos', prev: '← Anterior', next: 'Siguiente →', reto: 'Reto',
      placeholder: 'flag_…', verify: 'Verificar', hint: 'Pista', learnTitle: 'Qué has aprendido',
      ok: '¡Flag correcta! Reto superado ✅', ko: 'No es esa. Sigue buscando ❌', empty: 'Escribe una flag primero.',
      format: 'Formato: flag_texto_en_minusculas', solved: 'Superado',
      themeTitle: 'Cambiar tema', langTitle: 'English', fLocal: 'Todo funciona en tu navegador',
      writeup: 'Writeup (spoilers)', easy: 'Fácil', medium: 'Media'
    },
    en: {
      back: '← All challenges', prev: '← Previous', next: 'Next →', reto: 'Challenge',
      placeholder: 'flag_…', verify: 'Check', hint: 'Hint', learnTitle: 'What you learned',
      ok: 'Correct flag! Challenge solved ✅', ko: 'Not that one. Keep looking ❌', empty: 'Type a flag first.',
      format: 'Format: flag_lowercase_text', solved: 'Solved',
      themeTitle: 'Toggle theme', langTitle: 'Español', fLocal: 'Everything runs in your browser',
      writeup: 'Writeup (spoilers)', easy: 'Easy', medium: 'Medium'
    }
  };

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var lang = store('hs-lang') || ((navigator.language || 'es').slice(0, 2) === 'es' ? 'es' : 'en');
  if (lang !== 'es' && lang !== 'en') lang = 'es';
  var page = { es: {}, en: {} }, onLang = null;

  function t(k) {
    var s = page[lang][k]; if (s === undefined) s = COMMON[lang][k];
    if (s === undefined) s = page.es[k] !== undefined ? page.es[k] : COMMON.es[k];
    return s === undefined ? k : s;
  }

  function solvedList() { try { return JSON.parse(store('hs-solved') || '[]'); } catch (e) { return []; } }
  function markSolved(n) { var s = solvedList(); if (s.indexOf(n) < 0) { s.push(n); store('hs-solved', JSON.stringify(s)); } }

  /* SHA-256: Web Crypto cuando hay contexto seguro (https, localhost) y una versión
     en JS puro para file:// u otros casos en que crypto.subtle no existe. */
  function sha256js(str) {
    var K = [], H = [], i, j, p = 2, n;
    function frac(x) { return ((x - Math.floor(x)) * 4294967296) | 0; }
    for (n = 0; n < 64; p++) { for (j = 2; j * j <= p; j++) if (p % j === 0) break; if (j * j > p) { if (n < 8) H[n] = frac(Math.pow(p, 1 / 2)); K[n++] = frac(Math.pow(p, 1 / 3)); } }
    var bytes = Array.from(new TextEncoder().encode(str)), bl = bytes.length * 8;
    bytes.push(0x80); while (bytes.length % 64 !== 56) bytes.push(0);
    for (i = 7; i >= 0; i--) bytes.push(i > 3 ? 0 : (bl >>> (i * 8)) & 255);
    var W = [], ror = function (x, r) { return (x >>> r) | (x << (32 - r)); };
    for (i = 0; i < bytes.length; i += 64) {
      for (j = 0; j < 64; j++) {
        if (j < 16) W[j] = (bytes[i + j * 4] << 24) | (bytes[i + j * 4 + 1] << 16) | (bytes[i + j * 4 + 2] << 8) | bytes[i + j * 4 + 3];
        else { var a = W[j - 15], b = W[j - 2]; W[j] = (W[j - 16] + (ror(a, 7) ^ ror(a, 18) ^ (a >>> 3)) + W[j - 7] + (ror(b, 17) ^ ror(b, 19) ^ (b >>> 10))) | 0; }
      }
      var h = H.slice();
      for (j = 0; j < 64; j++) {
        var t1 = (h[7] + (ror(h[4], 6) ^ ror(h[4], 11) ^ ror(h[4], 25)) + ((h[4] & h[5]) ^ (~h[4] & h[6])) + K[j] + W[j]) | 0;
        var t2 = ((ror(h[0], 2) ^ ror(h[0], 13) ^ ror(h[0], 22)) + ((h[0] & h[1]) ^ (h[0] & h[2]) ^ (h[1] & h[2]))) | 0;
        h = [(t1 + t2) | 0, h[0], h[1], h[2], (h[3] + t1) | 0, h[4], h[5], h[6]];
      }
      for (j = 0; j < 8; j++) H[j] = (H[j] + h[j]) | 0;
    }
    return H.map(function (x) { return (x >>> 0).toString(16).padStart(8, '0'); }).join('');
  }
  function sha256(str) {
    if (window.crypto && crypto.subtle && window.isSecureContext) {
      return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str)).then(function (buf) {
        return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
      });
    }
    return Promise.resolve(sha256js(str));
  }

  function logoHTML() { return '<img src="icono.png" alt="Un Fantasma en el Sistema">'; }
  function header() {
    var el = document.getElementById('hs-header'); if (!el) return;
    el.outerHTML = '<header class="hs-header">' +
      '<a href="index.html" class="hs-logo">' + logoHTML() + '<span>Hack<b>Sandbox</b></span></a>' +
      '<div class="hs-right"><a class="hs-site" href="https://www.unfantasmaenelsistema.com" target="_blank" rel="noopener">unfantasmaenelsistema.com</a>' +
      '<button class="hs-btn" id="hs-lang" type="button"></button><button class="hs-btn" id="hs-theme" type="button"></button></div></header>';
    document.getElementById('hs-lang').onclick = function () { lang = lang === 'es' ? 'en' : 'es'; store('hs-lang', lang); apply(); };
    document.getElementById('hs-theme').onclick = function () {
      var nt = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nt); store('hs-theme', nt); syncTheme();
    };
  }
  function footer() {
    var el = document.getElementById('hs-footer'); if (!el) return;
    el.outerHTML = '<footer class="hs-footer"><a href="https://www.unfantasmaenelsistema.com" target="_blank" rel="noopener" class="hs-fbrand">' +
      '<img src="icono.png" alt="Un Fantasma en el Sistema" width="28" height="28"><span><b>Un Fantasma en el Sistema</b><small>unfantasmaenelsistema.com</small></span></a>' +
      '<div class="hs-flinks"><span data-i18n="fLocal"></span><span>·</span><a href="' + REPO + '" target="_blank" rel="noopener">GitHub</a><span>·</span>' +
      '<a href="' + REPO + '/blob/main/writeup/WRITEUP.md" target="_blank" rel="noopener" data-i18n="writeup"></a><span>·</span><span>MIT</span></div></footer>';
  }
  function syncTheme() {
    var b = document.getElementById('hs-theme'); if (!b) return;
    b.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
    b.title = t('themeTitle');
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var p = el.getAttribute('data-i18n-attr').split(':'); el.setAttribute(p[0], t(p[1]));
    });
    if (page[lang].docTitle) document.title = page[lang].docTitle + ' · HackSandbox';
    var lb = document.getElementById('hs-lang'); if (lb) { lb.textContent = lang === 'es' ? 'EN' : 'ES'; lb.title = t('langTitle'); }
    syncTheme(); renderSolved();
    if (onLang) onLang(lang);
  }

  function renderSolved() {
    var n = +document.body.getAttribute('data-reto');
    if (n) {
      var done = solvedList().indexOf(n) > -1;
      var badge = document.getElementById('solvedBadge'); if (badge) { badge.classList.toggle('hidden', !done); badge.textContent = '✓ ' + t('solved'); }
      var learn = document.getElementById('learn'); if (learn) learn.classList.toggle('hidden', !done);
    }
  }

  // Bloque estándar de cada reto: cabecera del reto, caja de flag, pistas, aprendizaje y paginación.
  function buildChallenge(n) {
    var top = document.getElementById('hs-top');
    if (top) top.innerHTML = '<a href="index.html" class="crumb" data-i18n="back"></a>' +
      '<div class="reto-meta"><span class="reto-num"><span data-i18n="reto"></span> ' + n + ' / ' + TOTAL + '</span>' +
      '<span class="tag" data-i18n="cat"></span><span class="tag lvl" data-i18n="lvl"></span><span class="tag ok hidden" id="solvedBadge"></span></div>';
    var box = document.getElementById('hs-flag');
    if (box) {
      var hints = '';
      for (var i = 1; page.es['h' + i]; i++) hints += '<details class="hint"><summary><span data-i18n="hint"></span> ' + i + '</summary><p data-i18n-html="h' + i + '"></p></details>';
      box.innerHTML = '<form class="flagbox" id="flagForm" autocomplete="off"><input id="flagInput" spellcheck="false" data-i18n-ph="placeholder" aria-label="flag">' +
        '<button type="submit" class="btn" data-i18n="verify"></button></form><p class="fmt" data-i18n="format"></p><p id="feedback" role="status"></p>' + hints +
        '<div class="learn hidden" id="learn"><b data-i18n="learnTitle"></b><p data-i18n-html="learn"></p></div>' +
        '<nav class="pager">' + (n > 1 ? '<a href="reto' + (n - 1) + '.html" data-i18n="prev"></a>' : '<span></span>') +
        (n < TOTAL ? '<a href="reto' + (n + 1) + '.html" data-i18n="next"></a>' : '<a href="index.html" data-i18n="back"></a>') + '</nav>';
      document.getElementById('flagForm').addEventListener('submit', function (ev) {
        ev.preventDefault();
        var v = document.getElementById('flagInput').value.trim(), fb = document.getElementById('feedback');
        if (!v) { fb.textContent = t('empty'); fb.className = 'bad'; return; }
        sha256(v).then(function (h) {
          var ok = h === HASHES[n];
          fb.textContent = ok ? t('ok') : t('ko'); fb.className = ok ? 'good' : 'bad';
          if (ok) { markSolved(n); renderSolved(); }
        });
      });
    }
  }

  window.HS = {
    t: t, lang: function () { return lang; }, solved: solvedList, total: TOTAL, sha256: sha256, sha256js: sha256js, repo: REPO,
    resetProgress: function () { store('hs-solved', '[]'); apply(); },
    init: function (opts) {
      opts = opts || {};
      page = { es: opts.es || {}, en: opts.en || {} };
      onLang = opts.onLang || null;
      header(); footer();
      var n = +document.body.getAttribute('data-reto');
      if (n) buildChallenge(n);
      apply();
    }
  };
})();
