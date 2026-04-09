const poem = document.querySelector('.poem');
const goldPhrase = document.querySelector('.last')?.textContent.trim() || '';
const normalPhrase = poem ? poem.textContent.replace(goldPhrase, '').trim() : '';

if (poem) {
    document.body.addEventListener('click', () => {
        createFloatingText(normalPhrase, goldPhrase);
    });
}

function createFloatingText(text, goldText) {
    const floating = document.createElement('div');
    floating.className = 'floating-text';
    floating.innerHTML = `${text}<br><span class="floating-text-gold">${goldText}</span>`;

    const x = randomNumber(8, 75);
    const y = randomNumber(5, 25);
    floating.style.left = `${x}vw`;
    floating.style.top = `${y}vh`;

    document.body.appendChild(floating);

    floating.addEventListener('animationend', () => {
        floating.remove();
    });
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
