const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim() || 'Anonymous';
  nameOutput.textContent = `Hello, ${name}!`;
});
