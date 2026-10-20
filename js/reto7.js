/* Reto 7 — JavaScript ofuscado
 * (Ofuscado a mano a propósito: el reto consiste en entenderlo.) */
var _0x5e1d = ['\x5f\x70\x72\x6f\x74\x65\x67\x65\x72', '\x63\x61\x72\x5f\x6e\x6f\x5f\x65\x73', '\x66\x6c\x61\x67\x5f\x6f\x66\x75\x73'];
var _0x9a01 = ['\x4e\x61\x64\x61\x20\x71\x75\x65\x20\x76\x65\x72', '\x41\x63\x63\x65\x73\x6f\x20\x64\x65\x6e\x65\x67\x61\x64\x6f'];
function _0x2b7c() { return _0x5e1d['\x73\x6c\x69\x63\x65']()['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](''); }
function _0x7f3e(_0x1) { return _0x9a01[_0x1 % _0x9a01['\x6c\x65\x6e\x67\x74\x68']]; }
var _0x44aa = _0x7f3e(0x1);

HS.init({
  es: {
    docTitle: 'La ofuscación de JavaScript', title: 'La ofuscación de JavaScript', cat: 'JavaScript', lvl: 'Media', scriptLbl: 'Script sospechoso',
    story: '<p>El programador ha escondido la flag dentro de un script ofuscado, con nombres sin sentido y caracteres escritos en hexadecimal. La página nunca la muestra, pero el código sabe construirla.</p>',
    h1: 'F12 → <b>Fuentes</b> (<b>Depurador</b> en Firefox) → <code>js/reto7.js</code>. Las secuencias como <code>\\x66</code> son caracteres en hexadecimal: <code>\\x66</code> = <code>f</code>.',
    h2: 'No hace falta descifrarlo a mano: pega en la consola el array <code>_0x5e1d</code> para verlo legible, o llama directamente a la función que lo une, <code>_0x2b7c()</code>, que ya está cargada.',
    learn: 'Ofuscar no es proteger: el navegador tiene que poder ejecutar el código, así que tú también puedes. Cualquier secreto que viaje al cliente (claves de API, contraseñas) está expuesto aunque esté ofuscado.'
  },
  en: {
    docTitle: 'JavaScript obfuscation', title: 'JavaScript obfuscation', cat: 'JavaScript', lvl: 'Medium', scriptLbl: 'Suspicious script',
    story: '<p>The developer hid the flag inside an obfuscated script, with meaningless names and characters written in hexadecimal. The page never shows it, but the code knows how to build it.</p>',
    h1: 'F12 → <b>Sources</b> (<b>Debugger</b> in Firefox) → <code>js/reto7.js</code>. Sequences like <code>\\x66</code> are characters written in hexadecimal: <code>\\x66</code> = <code>f</code>.',
    h2: 'No need to decode it by hand: paste the <code>_0x5e1d</code> array into the console to see it readable, or call the function that joins it, <code>_0x2b7c()</code>, which is already loaded.',
    learn: 'Obfuscation is not protection: the browser must be able to run the code, so you can too. Any secret sent to the client (API keys, passwords) is exposed even when obfuscated.'
  }
});
