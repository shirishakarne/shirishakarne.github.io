const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const questionData = quizData[currentQuestion];
  
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";
  
    questionData.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", checkAnswer);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizData.length}</p>
      <button onclick="location.reload()">Retry</button>
    `;
  }
  
  loadQuestion();
  