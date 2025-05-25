const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const gridSize = 15;
const cellSize = canvas.width / gridSize;
let level = 1;

let x = Math.floor(gridSize / 2);
let y = Math.floor(gridSize / 2);
const path = [{ x, y }];

//para nivel 15
let randomControlMap = null;


document.getElementById("info").textContent = `Nivel ${level} - ${getControlType(level)}`;
draw();

document.addEventListener("keydown", (e) => {
  const move = getMovement(e.key, level);
  if (move) {
    x = Math.max(0, Math.min(gridSize - 1, x + move.dx));
    y = Math.max(0, Math.min(gridSize - 1, y + move.dy));
    path.push({ x, y });
    draw();
  }

  // Avanza al siguiente nivel con Enter
  if (e.key === "Enter") {
    if (level < 15) {
      level++;
      x = y = Math.floor(gridSize / 2);
      path.length = 0;
      path.push({ x, y });

      // Resetear controles aleatorios al entrar al nivel 15
      if (level === 15) {
        randomControlMap = null;
      }

      document.getElementById("info").textContent = `Nivel ${level} - ${getControlType(level)}`;
      draw();
    } else {
      alert("¡Has completado todos los niveles!");
    }
  }
});



function getMovement(key, lvl) {
  const normal = {
    ArrowUp: { dx: 0, dy: -1 },
    ArrowDown: { dx: 0, dy: 1 },
    ArrowLeft: { dx: -1, dy: 0 },
    ArrowRight: { dx: 1, dy: 0 },
  };

  switch (true) {
    case lvl <= 7:
      return normal[key];
    case lvl <= 10:
      return invertDirection(normal[key]);
    case lvl <= 12:
      return rotateDirection(normal[key], "clockwise");
    case lvl <= 14:
      return rotateDirection(normal[key], "counter");
    case lvl === 15:
      if (!randomControlMap) {
        randomControlMap = {};
        const directions = Object.values(normal);
        const keys = Object.keys(normal);
        // Mezcla aleatoria
        const shuffled = directions.sort(() => 0.5 - Math.random());
        keys.forEach((key, i) => {
          randomControlMap[key] = shuffled[i];
        });
      }
      return randomControlMap[key];
    default:
      return null;
  }
}


function invertDirection(move) {
  if (!move) return null;
  return { dx: -move.dx, dy: -move.dy };
}

function rotateDirection(move, direction) {
  if (!move) return null;
  if (direction === "clockwise") return { dx: -move.dy, dy: move.dx };
  if (direction === "counter") return { dx: move.dy, dy: -move.dx };
  return move;
}

function randomDirection() {
  const options = [
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
  ];
  return options[Math.floor(Math.random() * options.length)];
}

function getControlType(lvl) {
  if (lvl <= 7) return "Controles normales";
  if (lvl <= 10) return "Controles invertidos";
  if (lvl <= 12) return "Controles rotados en sentido horario";
  if (lvl <= 14) return "Controles rotados en sentido antihorario";
  if (lvl === 15) return "Controles aleatorios";
  return "Fin del juego";
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Dibujar grid
  ctx.strokeStyle = "#ccc";
  for (let i = 0; i <= gridSize; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(canvas.width, i * cellSize);
    ctx.stroke();
  }

  // Dibujar trayectoria
  ctx.fillStyle = "#3498db";
  path.forEach(pos => {
    ctx.fillRect(pos.x * cellSize, pos.y * cellSize, cellSize, cellSize);
  });

  // Punto inicial
  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(Math.floor(gridSize / 2) * cellSize, Math.floor(gridSize / 2) * cellSize, cellSize, cellSize);
}

document.getElementById("reset").addEventListener("click", () => {
  x = y = Math.floor(gridSize / 2);
  path.length = 0;
  path.push({ x, y });
  draw();
});
