// Array with image paths and results
const outcomes = [
  { img: 'images/outcome1.jpg', text: 'Outcome 1: Success!' },
  { img: 'images/outcome2.jpg', text: 'Outcome 2: Failure!' },
];

// Function to make a random decision
function makeDecision() {
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  return outcomes[randomIndex];
}

// Set up event listener for the button
document
  .getElementById('decisionButton')
  .addEventListener('click', function () {
    const decision = makeDecision();
    const imgElement = document.getElementById('decisionImage');
    const resultElement = document.getElementById('result');
    imgElement.src = decision.img;
    imgElement.style.display = 'block'; // Show the image
    resultElement.innerText = decision.text;
  });
