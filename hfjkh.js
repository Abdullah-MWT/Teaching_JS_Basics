const output = document.getElementById('output');

document.addEventListener('mousemove', (e) => {
  output.innerHTML = `
    <h3>Mouse Event</h3>
    <p>Type: ${e.type}</p>
    <p>ClientX: ${e.clientX}, ClientY: ${e.clientY}</p>
    <p>ScreenX: ${e.screenX}, ScreenY: ${e.screenY}</p>
  `;
});

document.addEventListener('keydown', (e) => {
  output.innerHTML = `
    <h3>Keyboard Event</h3>
    <p>Type: ${e.type}</p>
    <p>Key: ${e.key}</p>
    <p>KeyCode: ${e.keyCode}</p>
    <p>Alt: ${e.altKey}, Ctrl: ${e.ctrlKey}, Shift: ${e.shiftKey}</p>
  `;
});


