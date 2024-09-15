const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
  question.innerHTML = 'I Love You Too :)';
  document.getElementById('b').style.display = 'none';
  document.getElementById('image').src = 'yes.gif'; // assuming the image id is 'image'
  noBtn.style.display = 'none'; // remove the no button
});

noBtn.addEventListener('mouseover', () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});
// Get the "Virtual flower" button element
const virtualFlowerButton = document.querySelector('a[href="#"]');

// Add an event listener to the button
virtualFlowerButton.addEventListener('click', () => {
  // Redirect to "flower html.html" page
  window.location.href = 'flower html.html';
});
const memoriesButton = document.querySelector('.memories-btn'); // assuming the button has a class of "memories-btn"

// Add an event listener to the button
memoriesButton.addEventListener('click', () => {
  // Redirect to "vindex.html" page
  window.location.href = 'vindex.html';
});

const cutestButton = document.querySelector('.cutest-btn'); // assuming the button has a class of "memories-btn"
cutestButton.addEventListener('click', () => {
  // Redirect to "vindex.html" page
  window.location.href = 'scroller.html';
});

const hottestButton = document.querySelector('.hottest-btn'); // assuming the button has a class of "memories-btn"
hottestButton.addEventListener('click', () => {
  // Redirect to "vindex.html" page
  window.location.href = 'scroller2.html';
});
const tbtn = document.querySelector('.tbtn'); // assuming the button has a class of "memories-btn"
tbtn.addEventListener('click', () => {
  // Redirect to "vindex.html" page
  window.location.href = 'WhatsApp Image 2024-09-15 at 2.59.55 PM.jpeg';
});
const poem = document.querySelector('.poem'); // assuming the button has a class of "memories-btn"
poem.addEventListener('click', () => {
  // Redirect to "vindex.html" page
  window.location.href =
    "Textured Hand Lettered Father's Day Poem Facebook Post.jpg";
});
