let dollars = 0;
let cursors = [];
let cursorInterval = 1000; // 1 second

document.getElementById('skibidi').addEventListener('click', () => {
    dollars += 1;
    updateScore();
});

document.getElementById('spawn-cursor').addEventListener('click', () => {
    spawnCursor();
});

function updateScore() {
    document.getElementById('score').textContent = `Dollars: $${dollars.toFixed(1)}`;
}

function spawnCursor() {
    const gameContainer = document.getElementById('game-container');
    const skibidi = document.getElementById('skibidi');
    const skibidiRect = skibidi.getBoundingClientRect();
    const containerRect = gameContainer.getBoundingClientRect();

    const cursor = document.createElement('div');
    cursor.className = 'cursor';

    const angle = Math.random() * 2 * Math.PI;
    const radius = 100; // Distance from Skibidi image
    const x = skibidiRect.left + window.scrollX + skibidiRect.width / 2 + radius * Math.cos(angle) - 10; // Center cursor around Skibidi
    const y = skibidiRect.top + window.scrollY + skibidiRect.height / 2 + radius * Math.sin(angle) - 10;

    cursor.style.left = `${x - containerRect.left}px`;
    cursor.style.top = `${y - containerRect.top}px`;

    gameContainer.appendChild(cursor);
    cursors.push(cursor);

    // Set up cursor earnings
    setInterval(() => {
        dollars += 0.1;
        updateScore();
    }, cursorInterval);
}
