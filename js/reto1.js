/* Reto 1 — Base64 */
var MENSAJE = {
  es: 'TGEgZmxhZyBlczogZmxhZ19iYXNlNjRfbm9fZXNfY2lmcmFkbw==',
  en: 'VGhlIGZsYWcgaXM6IGZsYWdfYmFzZTY0X25vX2VzX2NpZnJhZG8='
};
HS.init({
  es: {
    docTitle: 'El enigma de Base64', title: 'El enigma de Base64', cat: 'Codificación', lvl: 'Fácil', msgLbl: 'Mensaje interceptado',
    story: '<p>Un agente ha dejado este mensaje en un foro. Parece un galimatías, pero es una de las codificaciones más usadas de Internet. Descífralo y encontrarás la flag.</p>',
    h1: 'Fíjate en el final: el relleno <code>=</code> o <code>==</code> es típico de Base64.',
    h2: 'En la consola del navegador: <code>atob(\'…\')</code>. En una terminal: <code>echo \'…\' | base64 -d</code>. También vale CyberChef con la receta «From Base64».',
    learn: 'Base64 <b>no es cifrado</b>: no hay clave y cualquiera lo deshace. Sirve para meter datos binarios en texto (adjuntos de correo, JSON, la cabecera <code>Authorization: Basic</code>), no para ocultar nada.'
  },
  en: {
    docTitle: 'The Base64 riddle', title: 'The Base64 riddle', cat: 'Encoding', lvl: 'Easy', msgLbl: 'Intercepted message',
    story: '<p>An agent left this message on a forum. It looks like gibberish, but it is one of the most common encodings on the Internet. Decode it and you will find the flag.</p>',
    h1: 'Look at the end: the <code>=</code> or <code>==</code> padding is typical of Base64.',
    h2: 'In the browser console: <code>atob(\'…\')</code>. In a terminal: <code>echo \'…\' | base64 -d</code>. CyberChef’s “From Base64” recipe works too.',
    learn: 'Base64 is <b>not encryption</b>: there is no key and anyone can reverse it. It exists to carry binary data inside text (email attachments, JSON, the <code>Authorization: Basic</code> header), not to hide anything.'
  },
  onLang: function (l) { document.getElementById('encoded').textContent = MENSAJE[l]; }
});
