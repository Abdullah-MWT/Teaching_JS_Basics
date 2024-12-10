const sentences = [
    "The quick brown fox jumps over the lazy dog.",
  "Typing fast requires practice and patience.",
  "JavaScript is a versatile programming language.",
  "Frontend development involves HTML, CSS, and JavaScript.",
  "Artificial intelligence is shaping the future of technology."
  ];
  
  // Prevent User From Copying the text
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') { // Check for Ctrl+C or Command+C
      e.preventDefault(); // Prevent the default copy action
      alert("Please don't try to cheat!"); // Show the custom message
    }
  });

  const sentenceContainer = document.getElementById('sentence');
  const inputbox = document.getElementById('inputBox');
  const startbtn = document.getElementById('startBtn');
  const resultContainer = document.getElementById('results');

  let currentSentence = '';
  let startTime;

  // Function To Start the Test
  function startTest() {
    // Reset everything
    resultContainer.innerHTML = '';
    inputbox.value = '';
    inputbox.disabled = false;

    // Display a random Sentence
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceContainer.textContent = currentSentence;

    // Record the Start Time
    startTime = new Date().getTime();

    // Focus on the inputBox
    inputbox.focus();

    // Add EventListener to track the typing
    inputbox.addEventListener('input', checktyping)
  }

  // Function To Check typing speed and accuracy
  function checktyping() {
    const typedText = inputbox.value;

    // Check if user has done typing the sentence
    if (typedText === currentSentence) {
        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000

        // Calculate Typing Speed
        const words = currentSentence.split(" ").length
        const wpm = Math.round((words / timeTaken) * 60)

        // Display Results
        resultContainer.innerHTML = `
         <p>🎉 You finished typing!</p>
         <p>Time Taken: ${timeTaken.toFixed(2)} seconds </p>
         <p>Typing Speed: ${wpm} WPM </p>
        `

        // Disable the inputBox
        inputbox.disabled = true;

        // Remove the EventListener
        inputbox.removeEventListener('input', checktyping)
    }
  }

  startbtn.addEventListener('click', startTest)