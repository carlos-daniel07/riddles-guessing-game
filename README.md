# 🧠 Juego de Adivinanzas con Marcador

Juego de adivinanzas donde respondes una serie de acertijos en orden aleatorio, con marcador en vivo de aciertos y errores, y un modal de resultados al finalizar. Construido con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://juegodeadivinanzasjs.netlify.app/)

## ✨ Características

- Banco de **adivinanzas** que se presentan en **orden aleatorio** cada vez que se juega, mediante un algoritmo de shuffle simple.
- **Marcador en vivo** de aciertos y errores, visible en todo momento en la esquina superior.
- Validación de respuesta **insensible a mayúsculas/minúsculas y espacios** (`trim().toLowerCase()`).
- Soporte para responder presionando **Enter**, además del botón.
- **Modal de finalización** con animación de entrada (`popIn`), mostrando el resumen de aciertos/errores y un botón para reiniciar la partida desde cero.
- Reinicio completo del estado del juego (contadores, preguntas restantes) al cerrar el modal.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura del juego, marcador y modal de finalización.
- **CSS3** — animación de entrada del modal (`@keyframes popIn`), tarjetas de estadísticas con colores semánticos (verde/rojo), y overlay con `display: flex` condicional por clase.
- **JavaScript (Vanilla)** — algoritmo de shuffle con `Array.sort(() => Math.random() - 0.5)`, manejo de estado del juego con variables simples, y listener de teclado para responder con Enter.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
├── icon.png
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/riddles-guessing-game.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd riddles-guessing-game
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🎮 Cómo jugar

- Lee la adivinanza y escribe tu respuesta en el campo de texto.
- Presiona **Enter** o el botón "Responder".
- Al terminar todas las adivinanzas, aparece un resumen con tu puntaje y la opción de jugar de nuevo.

## 🧠 Qué aprendí / practiqué

- Implementar un shuffle simple de un array con `Array.sort()` y un comparador aleatorio, útil para presentar contenido sin repetición en orden distinto cada partida.
- Manejar el "fin de juego" detectando cuándo un array de elementos pendientes queda vacío (`remainingRiddles.length === 0`), en vez de usar un contador de índice fijo.
- Normalizar la entrada del usuario (`trim()` + `toLowerCase()`) antes de compararla, para que la validación no dependa de mayúsculas o espacios accidentales.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/193e01ed-397d-441e-82b9-e5213d8f2923" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
