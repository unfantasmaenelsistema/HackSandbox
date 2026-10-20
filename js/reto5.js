/* Reto 5 — Cookies manipulables */
var _d = '=4WY0lGZl9VZz91cll2av92YfNXYs91ZhxmZ';
// La misma ruta que usa el navegador por defecto (RFC 6265: hasta la última «/», sin incluirla),
// para que «document.cookie = "es_admin=true"» desde la consola sustituya a esta cookie y no cree otra.
var RUTA = location.pathname.replace(/\/[^\/]*$/, '') || '/';

function leerCookie(nombre) {
  var m = document.cookie.split(';').map(function (c) { return c.trim(); })
    .filter(function (c) { return c.indexOf(nombre + '=') === 0; })[0];
  return m ? m.slice(nombre.length + 1) : null;
}
// Solo se crea si no existe: así el cambio que hagas sobrevive a la recarga.
if (leerCookie('es_admin') === null) document.cookie = 'es_admin=false; path=' + RUTA + '; SameSite=Lax';

HS.init({
  es: {
    docTitle: 'El secreto de las cookies', title: 'El secreto de las cookies', cat: 'Cookies', lvl: 'Media',
    cookieLbl: 'Cookie', reload: 'Recargar', locked: '🔒 Solo los administradores pueden ver la flag.', welcome: '🔓 Hola, administrador. La flag es:',
    story: '<p>Esta web guarda en una cookie si eres administrador. Tú eres un usuario normal… por ahora.</p>',
    h1: 'En F12 → <b>Aplicación</b> (<b>Almacenamiento</b> en Firefox) → <b>Cookies</b> encontrarás <code>es_admin</code>.',
    h2: 'Haz doble clic en el valor, cámbialo a <code>true</code> y recarga la página. Desde la consola: <code>document.cookie = "es_admin=true"</code> y recarga.',
    learn: 'Las cookies viven en tu navegador y puedes editarlas. Guardar en ellas datos de autorización sin firmar (<code>es_admin=true</code>, <code>rol=user</code>) permite escalar privilegios. Una sesión segura solo guarda un identificador aleatorio o un token firmado que el servidor comprueba.'
  },
  en: {
    docTitle: 'The cookie secret', title: 'The cookie secret', cat: 'Cookies', lvl: 'Medium',
    cookieLbl: 'Cookie', reload: 'Reload', locked: '🔒 Only administrators can see the flag.', welcome: '🔓 Hello, administrator. The flag is:',
    story: '<p>This site stores in a cookie whether you are an administrator (<code>es_admin</code>). You are a regular user… for now.</p>',
    h1: 'In F12 → <b>Application</b> (<b>Storage</b> in Firefox) → <b>Cookies</b> you will find <code>es_admin</code>.',
    h2: 'Double-click the value, change it to <code>true</code> and reload the page. From the console: <code>document.cookie = "es_admin=true"</code> and reload.',
    learn: 'Cookies live in your browser and you can edit them. Storing unsigned authorisation data in them (<code>es_admin=true</code>, <code>role=user</code>) lets anyone escalate privileges. A secure session only stores a random identifier or a signed token that the server verifies.'
  }
});

var valor = leerCookie('es_admin');
document.getElementById('cookiePill').textContent = valor;
if (valor === 'true') {
  document.getElementById('cookiePill').classList.add('on');
  document.getElementById('locked').classList.add('hidden');
  document.getElementById('reveal').classList.remove('hidden');
  document.getElementById('flagOut').textContent = atob(_d.split('').reverse().join(''));
}
