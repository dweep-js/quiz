// Array of questions
const question = [
  "What is my favorite color?",
  "What's my favorite food?",
  "What is my favorite song?",
  "What's my favorite music artist?",
  "Who is my favorite YouTuber?",
  "Who is my best friend?"
];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to shuffle the options array
function shuffleOptionsArray(optionsArray) {
  return optionsArray.map(optionSet => shuffleArray(optionSet));
}

// Array of options
const options = [
  ["red", "blue", "green", "brown"],
  ["apple", "banana", "pear", "guava"],
  ["another one", "not allowed", "chamber of reflection", "heart to heart"],
  ["artic monkeys", "mac deemacro", "tv girl", "laufey"],
  ["bro code", "odin project", "fine gap", "free code camp"],
  ["tim", "iri", "eva", "aqua"]
];

// Array of correct answers
const correct = [
  "red",
  "apple",
  "another one",
  "laufey",
  "bro code",
  "tim"
];

// Shuffle the options array
const shuffledOptions = shuffleOptionsArray(options);

// Log the shuffled options to see results
console.log(shuffledOptions);

// Export all variables and functions
export { question, options, correct, shuffledOptions, shuffleArray, shuffleOptionsArray };
