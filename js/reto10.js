/* Reto 10 — La caja fuerte del cliente */
var accesoConcedido = false;
var _c = [76, 70, 75, 77, 117, 70, 75, 117, 70, 69, 77, 67, 73, 75, 117, 92, 67, 92, 79, 117, 79, 68, 117, 79, 70, 117, 73, 70, 67, 79, 68, 94, 79];

function abrirCajaFuerte() {
  if (accesoConcedido === true) {
    document.getElementById('safePill').textContent = HS.t('granted');
    document.getElementById('safePill').classList.add('on');
    document.getElementById('flagOut').textContent = _c.map(function (x) { return String.fromCharCode(x ^ 42); }).join('');
    document.getElementById('reveal').classList.remove('hidden');
  } else {
    document.getElementById('safePill').textContent = HS.t('denied');
    var p = document.getElementById('safePill');
    p.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 250 });
  }
}

HS.init({
  es: {
    docTitle: 'La caja fuerte del cliente', title: 'La caja fuerte del cliente', cat: 'Lógica en el cliente', lvl: 'Media',
    stateLbl: 'Estado:', open: 'Abrir la caja fuerte', denied: 'acceso denegado', granted: 'acceso concedido', welcome: '🔓 La caja se abre. Dentro hay una flag:',
    story: '<p>La caja fuerte solo se abre si la variable <code>accesoConcedido</code> vale <code>true</code>. El problema para el programador: esa variable vive en tu navegador.</p>',
    h1: 'Abre <code>js/reto10.js</code> en F12 → Fuentes y mira qué condición comprueba el botón.',
    h2: 'En la consola escribe <code>accesoConcedido = true</code> y vuelve a pulsar el botón. Otra vía: pon un punto de interrupción en el <code>if</code> y cambia el valor cuando se detenga.',
    learn: 'Toda comprobación hecha en el navegador se puede saltar: variables, condiciones, botones deshabilitados… El cliente es territorio del atacante; las decisiones de seguridad se toman en el servidor.'
  },
  en: {
    docTitle: 'The client-side safe', title: 'The client-side safe', cat: 'Client-side logic', lvl: 'Medium',
    stateLbl: 'Status:', open: 'Open the safe', denied: 'access denied', granted: 'access granted', welcome: '🔓 The safe opens. There is a flag inside:',
    story: '<p>The safe only opens if the <code>accesoConcedido</code> (“access granted”) variable is <code>true</code>. The developer’s problem: that variable lives in your browser.</p>',
    h1: 'Open <code>js/reto10.js</code> in F12 → Sources and see which condition the button checks.',
    h2: 'In the console type <code>accesoConcedido = true</code> and press the button again. Another way: set a breakpoint on the <code>if</code> and change the value when it pauses.',
    learn: 'Every check done in the browser can be bypassed: variables, conditions, disabled buttons… The client is the attacker’s territory; security decisions are made on the server.'
  },
  onLang: function () {
    var p = document.getElementById('safePill');
    p.textContent = HS.t(p.classList.contains('on') ? 'granted' : 'denied');
  }
});
document.getElementById('openSafe').addEventListener('click', abrirCajaFuerte);
