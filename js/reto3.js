/* Reto 3 — Consola y ROT13 */
var MENSAJES = {
  es: 'Yn synt rf: synt_ebg13_ra_yn_pbafbyn',
  en: 'Gur synt vf: synt_ebg13_ra_yn_pbafbyn'
};
var mensajeSecreto = MENSAJES.es;

function rot13(texto) {
  return String(texto).replace(/[a-z]/gi, function (c) {
    var base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
  });
}

var CONSOLA = {
  es: ['%c👻 HackSandbox · Reto 3', '¡Bienvenido! El mensaje secreto está cifrado con ROT13:', 'Está guardado en la variable mensajeSecreto y la función rot13() ya está cargada.', 'Pruébala: rot13(mensajeSecreto)'],
  en: ['%c👻 HackSandbox · Challenge 3', 'Welcome! The secret message is encrypted with ROT13:', 'It is stored in the mensajeSecreto variable and the rot13() function is already loaded.', 'Try it: rot13(mensajeSecreto)']
};
function escribirEnConsola(l) {
  var c = CONSOLA[l];
  console.log(c[0], 'color:#39ff14;font-weight:bold;font-size:14px');
  console.log(c[1]);
  console.log('  ' + mensajeSecreto);
  console.log(c[2]);
  console.log(c[3]);
}

HS.init({
  es: {
    docTitle: 'El puzzle de la consola', title: 'El puzzle de la consola', cat: 'Consola · ROT13', lvl: 'Fácil',
    consoleHint: '📟 Mira la consola: F12 → pestaña Consola',
    story: '<p>Al cargar, esta página ha escrito un mensaje cifrado en la consola del navegador y ha dejado preparada la función para descifrarlo.</p>',
    h1: 'En la consola verás el mensaje y el nombre del cifrado. La variable <code>mensajeSecreto</code> lo guarda.',
    h2: 'Escribe <code>rot13(mensajeSecreto)</code> en la consola y pulsa Intro. ROT13 desplaza cada letra 13 posiciones, así que aplicarlo dos veces devuelve el original.',
    learn: 'La consola ejecuta JavaScript dentro de la página: puedes leer sus variables y llamar a sus funciones. ROT13 es un cifrado César con desplazamiento 13; no protege nada, solo evita leer algo «sin querer».'
  },
  en: {
    docTitle: 'The console puzzle', title: 'The console puzzle', cat: 'Console · ROT13', lvl: 'Easy',
    consoleHint: '📟 Check the console: F12 → Console tab',
    story: '<p>When it loaded, this page wrote an encrypted message to the browser console and left the function to decrypt it ready to use.</p>',
    h1: 'The console shows the message and the cipher’s name. The <code>mensajeSecreto</code> variable holds it.',
    h2: 'Type <code>rot13(mensajeSecreto)</code> in the console and press Enter. ROT13 shifts every letter 13 places, so applying it twice gives back the original.',
    learn: 'The console runs JavaScript inside the page: you can read its variables and call its functions. ROT13 is a Caesar cipher with a shift of 13; it protects nothing, it only stops you reading something “by accident”.'
  },
  onLang: function (l) { mensajeSecreto = MENSAJES[l]; escribirEnConsola(l); }
});
