/* Reto 2 — Elemento oculto con CSS */
HS.init({
  es: {
    docTitle: 'El secreto del inspector', title: 'El secreto del inspector', cat: 'HTML', lvl: 'Fácil',
    nothing: 'Aquí no hay nada que ver… 👀',
    story: '<p>Esta página parece vacía, pero el navegador ha recibido más de lo que te enseña: hay un elemento escondido con CSS.</p>',
    h1: 'Abre las herramientas de desarrollador (F12) y ve a la pestaña <b>Elementos</b> (<b>Inspector</b> en Firefox).',
    h2: 'Busca un elemento con <code>display: none</code>. También puedes pulsar <b>Ctrl+U</b> para ver el código fuente.',
    learn: 'Ocultar algo con CSS solo lo esconde de la vista: el HTML entero llega a tu navegador. Nunca pongas datos sensibles en una página «escondidos» con <code>display: none</code>.'
  },
  en: {
    docTitle: 'The inspector’s secret', title: 'The inspector’s secret', cat: 'HTML', lvl: 'Easy',
    nothing: 'Nothing to see here… 👀',
    story: '<p>This page looks empty, but your browser received more than it shows: there is an element hidden with CSS.</p>',
    h1: 'Open the developer tools (F12) and go to the <b>Elements</b> tab (<b>Inspector</b> in Firefox).',
    h2: 'Look for an element with <code>display: none</code>. You can also press <b>Ctrl+U</b> to view the page source.',
    learn: 'Hiding something with CSS only hides it from view: the whole HTML reaches your browser. Never put sensitive data on a page “hidden” with <code>display: none</code>.'
  }
});
