/* Reto 9 — Cifrado Vigenère */
var clave = 'fantasma';
var MENSAJES = {
  es: 'Qa seay qs: klnz_vaseseex_cgz_cqaix',
  en: 'Yhr ylss ix: fytg_nugjnrke_uan_hlnoe'
};

// Vigenère clásico: la clave solo avanza con las letras; el resto se copia igual.
function descifrarVigenere(texto, k) {
  var r = '', j = 0;
  k = String(k).toLowerCase();
  for (var i = 0; i < texto.length; i++) {
    var c = texto.charCodeAt(i), mayus = c >= 65 && c <= 90, minus = c >= 97 && c <= 122;
    if (!mayus && !minus) { r += texto[i]; continue; }
    var base = mayus ? 65 : 97, desp = k.charCodeAt(j++ % k.length) - 97;
    r += String.fromCharCode((c - base - desp + 26) % 26 + base);
  }
  return r;
}

HS.init({
  es: {
    docTitle: 'El cifrado Vigenère', title: 'El cifrado Vigenère', cat: 'Criptografía clásica', lvl: 'Media', msgLbl: 'Mensaje cifrado',
    story: '<p>Este mensaje está cifrado con Vigenère, un cifrado clásico que usa una palabra clave. Sin la clave cuesta romperlo… pero el programador la dejó en el código.</p>',
    h1: 'Abre <code>js/reto9.js</code> (F12 → Fuentes) y busca una variable que guarde la clave.',
    h2: 'El script trae la función <code>descifrarVigenere(texto, clave)</code>: llámala desde la consola con el mensaje y la clave. La clave solo avanza con las letras; los espacios, los dos puntos y los guiones bajos se quedan igual.',
    learn: 'La seguridad de un cifrado está en la clave, no en el algoritmo (principio de Kerckhoffs). Si la clave está en el código del cliente, cualquiera puede descifrar. Y Vigenère, además, se rompe sin clave con análisis de frecuencias (método de Kasiski).'
  },
  en: {
    docTitle: 'The Vigenère cipher', title: 'The Vigenère cipher', cat: 'Classical crypto', lvl: 'Medium', msgLbl: 'Encrypted message',
    story: '<p>This message is encrypted with Vigenère, a classical cipher that uses a keyword. Without the key it is hard to break… but the developer left it in the code.</p>',
    h1: 'Open <code>js/reto9.js</code> (F12 → Sources) and look for a variable holding the key.',
    h2: 'The script includes the <code>descifrarVigenere(text, key)</code> function: call it from the console with the message and the key. The key only advances on letters; spaces, colons and underscores stay the same.',
    learn: 'A cipher’s security lies in the key, not in the algorithm (Kerckhoffs’s principle). If the key is in the client’s code, anyone can decrypt. Vigenère can also be broken without the key through frequency analysis (Kasiski examination).'
  },
  onLang: function (l) { document.getElementById('cipher').textContent = MENSAJES[l]; }
});
