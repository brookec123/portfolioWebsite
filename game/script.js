const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
const playerSize = 20;
const movementAmount = 5;

function drawPlayer() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(playerX - playerSize / 2, playerY - playerSize / 2, playerSize, playerSize);
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
}

function movePlayer(event) {
    switch (event.key) {
        case "ArrowUp":
            playerY -= movementAmount;
            break;
        case "ArrowDown":
            playerY += movementAmount;
            break;
        case "ArrowLeft":
            playerX -= movementAmount;
            break;
        case "ArrowRight":
            playerX += movementAmount;
            break;
    }

    // Keep the player within the bounds of the canvas
    if (playerX - playerSize / 2 < 0) playerX = playerSize / 2;
    if (playerX + playerSize / 2 > canvas.width) playerX = canvas.width - playerSize / 2;
    if (playerY - playerSize / 2 < 0) playerY = playerSize / 2;
    if (playerY + playerSize / 2 > canvas.height) playerY = canvas.height - playerSize / 2;

    drawGame();
}

document.addEventListener("keydown", movePlayer);