onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded');
    clearTimeout(c);
  }, 1000);
};

const quote = document.querySelector('.quote');
const text =
  'If I had a single flower for every time I think about you, I could walk forever in my garden';
const spanElements = [];

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i];
  quote.appendChild(span);
  spanElements.push(span);
}

let currentLetter = 0;

function animateText() {
  if (currentLetter < spanElements.length) {
    spanElements[currentLetter].classList.add('visible');
    currentLetter++;
    setTimeout(() => {
      animateText();
    }, 100);
  }
}

animateText();
