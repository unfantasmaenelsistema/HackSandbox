/* Reto 8 — Binario en un comentario HTML */
HS.init({
  es: {
    docTitle: 'El puzzle binario', title: 'El puzzle binario', cat: 'Binario', lvl: 'Media',
    bitsHint: '💾 8 bits = 1 carácter',
    story: '<p>Un mensaje viaja escondido en el código fuente de esta página, escrito como lo ve el ordenador: ceros y unos.</p>',
    h1: 'Pulsa <b>Ctrl+U</b> y busca un comentario HTML (<code>&lt;!-- … --&gt;</code>) lleno de ceros y unos.',
    h2: 'Cada grupo de 8 bits es un carácter ASCII: <code>01100110</code> = 102 = <code>f</code>. En la consola: <code>\'…\'.split(\' \').map(b =&gt; String.fromCharCode(parseInt(b, 2))).join(\'\')</code>. En CyberChef: «From Binary».',
    learn: 'Binario, hexadecimal y Base64 son formas distintas de escribir los mismos bytes. Reconocerlas a simple vista ahorra mucho tiempo en un CTF.'
  },
  en: {
    docTitle: 'The binary puzzle', title: 'The binary puzzle', cat: 'Binary', lvl: 'Medium',
    bitsHint: '💾 8 bits = 1 character',
    story: '<p>A message is hidden in this page’s source code, written the way the computer sees it: zeros and ones.</p>',
    h1: 'Press <b>Ctrl+U</b> and look for an HTML comment (<code>&lt;!-- … --&gt;</code>) full of zeros and ones.',
    h2: 'Each group of 8 bits is one ASCII character: <code>01100110</code> = 102 = <code>f</code>. In the console: <code>\'…\'.split(\' \').map(b =&gt; String.fromCharCode(parseInt(b, 2))).join(\'\')</code>. In CyberChef: “From Binary”.',
    learn: 'Binary, hexadecimal and Base64 are different ways of writing the same bytes. Recognising them at a glance saves a lot of time in a CTF.'
  }
});
