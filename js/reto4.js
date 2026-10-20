/* Reto 4 — Manipulación de parámetros de la URL */
var _d = '==AbyV3Xhx2XuV2XzVWam52bj9VYj5Wdu91ZhxmZ';
var rol = new URLSearchParams(location.search).get('rol');
if (!rol) {
  rol = 'invitado';
  history.replaceState(null, '', location.pathname + '?rol=invitado' + location.hash);
}

HS.init({
  es: {
    docTitle: 'El código escondido en la URL', title: 'El código escondido en la URL', cat: 'Parámetros URL', lvl: 'Fácil',
    roleLbl: 'Has entrado con el rol:', locked: '🔒 Solo el rol admin puede ver la flag.', welcome: '🔓 Bienvenido, admin. La flag es:',
    story: '<p>Este panel decide quién eres mirando la dirección de la página. Ahora mismo te trata como invitado, y solo un administrador puede ver la flag.</p>',
    h1: 'Mira la barra de direcciones: ¿qué hay después del <code>?</code>',
    h2: 'Cambia <code>?rol=invitado</code> por <code>?rol=admin</code> y pulsa Intro.',
    learn: 'Los parámetros de la URL los controla el usuario. Decidir permisos con ellos es un fallo de control de acceso (OWASP A01). Los permisos se comprueban en el servidor, con la sesión, nunca con algo que el cliente puede cambiar.'
  },
  en: {
    docTitle: 'The code hidden in the URL', title: 'The code hidden in the URL', cat: 'URL parameters', lvl: 'Easy',
    roleLbl: 'You are logged in with the role:', locked: '🔒 Only the admin role can see the flag.', welcome: '🔓 Welcome, admin. The flag is:',
    story: '<p>This panel decides who you are by looking at the page address. Right now it treats you as a guest (<code>invitado</code>), and only an administrator can see the flag.</p>',
    h1: 'Look at the address bar: what comes after the <code>?</code>',
    h2: 'Change <code>?rol=invitado</code> to <code>?rol=admin</code> and press Enter.',
    learn: 'URL parameters are controlled by the user. Deciding permissions with them is a broken access control flaw (OWASP A01). Permissions are checked on the server, against the session, never with something the client can change.'
  }
});

document.getElementById('rolePill').textContent = rol;
if (rol === 'admin') {
  document.getElementById('rolePill').classList.add('on');
  document.getElementById('locked').classList.add('hidden');
  document.getElementById('reveal').classList.remove('hidden');
  document.getElementById('flagOut').textContent = atob(_d.split('').reverse().join(''));
}
