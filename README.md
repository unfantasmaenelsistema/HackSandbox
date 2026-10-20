# HackSandbox

**10 retos CTF para principiantes que se resuelven en el navegador**, de [Un Fantasma en el Sistema](https://www.unfantasmaenelsistema.com).

▶ **Abrir:** https://unfantasmaenelsistema.github.io/HackSandbox/

Cada reto esconde una flag (`flag_…`) con una técnica real del hacking web. Solo necesitas el navegador y sus herramientas de desarrollador (`F12`): nada que instalar ni servidores que montar.

## Retos

| # | Reto | Técnica | Nivel |
|---|---|---|---|
| 1 | El enigma de Base64 | Codificación | Fácil |
| 2 | El secreto del inspector | HTML / DOM | Fácil |
| 3 | El puzzle de la consola | Consola · ROT13 | Fácil |
| 4 | El código escondido en la URL | Parámetros URL | Fácil |
| 5 | El secreto de las cookies | Cookies | Media |
| 6 | El misterio del CSS oculto | CSS | Fácil |
| 7 | La ofuscación de JavaScript | JavaScript | Media |
| 8 | El puzzle binario | Binario | Media |
| 9 | El cifrado Vigenère | Criptografía clásica | Media |
| 10 | La caja fuerte del cliente | Lógica en el cliente | Media |

Cada reto trae dos pistas y, al superarlo, un recuadro con lo que enseña y cómo se evita ese fallo en una aplicación real. El progreso se guarda en tu navegador.

## Writeup

📖 [**writeup/WRITEUP.md**](writeup/WRITEUP.md): la solución paso a paso de los diez retos, con capturas, las salidas reales de la consola, rutas alternativas y el porqué de cada fallo. **Contiene spoilers.**

## Cómo se comprueban las flags

Las flags no están en claro en el código que las comprueba: `assets/hs.js` solo guarda su SHA-256 y compara el hash de lo que escribes (con Web Crypto, o con una implementación en JS cuando la página no está en un contexto seguro). Así, leer el verificador no resuelve los retos.

Para cambiar una flag, calcula su hash y sustitúyelo en `HASHES`:

```bash
printf '%s' 'flag_nueva' | sha256sum
```

## Estructura

```
index.html          portada con los 10 retos y el progreso
reto1.html … 10     un reto por página
js/reto1.js … 10    mecánica y textos (ES/EN) de cada reto
assets/hs.js        común: cabecera y pie, idioma, tema, pistas, progreso y verificación SHA-256
assets/hs.css       estilos
icono.png           logo de la casa
writeup/            WRITEUP.md y sus capturas
```

Para probar en local: `python -m http.server` y abre `http://localhost:8000`.

## English

**HackSandbox** is a set of 10 beginner CTF challenges solved entirely with your browser’s developer tools: Base64, hidden DOM elements, the JavaScript console and ROT13, URL parameter tampering, cookie manipulation, CSS comments, obfuscated JavaScript, binary, the Vigenère cipher and client-side logic. Each challenge has two hints and explains the real-world lesson once solved. Flags are checked against SHA-256 hashes, so reading the checker does not give them away. Progress is stored in your browser. Bilingual (ES/EN), light/dark themes. A full step-by-step writeup (in Spanish) is in [`writeup/WRITEUP.md`](writeup/WRITEUP.md).

## Licencia / License

[MIT](LICENSE) © Un Fantasma en el Sistema.
