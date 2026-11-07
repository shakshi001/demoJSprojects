document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choice-list");
  const nextBtn = document.getElementById("next-btn");
  const resultConatiner = document.getElementById("result-container");
  const score = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
    const startBtn = document.getElementById("start-btn");
    
    console.log(container);
    console.log(questionContainer);
    console.log(questionText);
    console.log(choiceList);
    console.log(nextBtn);
    console.log(resultConatiner);
    console.log(score);
    console.log(restartBtn);
    console.log(startBtn);

    const question =
    [
      {
        questions: "what is the capital of France",
        choices: ["Paris", "London", "BerLin", "Mardrid"],
        answer: "Paris",
      },
      {
        questions: "which planet is known as the Red Plannet",
        choices: ["Mars", "Venus", "Jupiter", "Satrun"],
        answer: "Mars",
      },
      {
        questions: "Who wrote 'Hamlet' ?",
        choices: [
          "Charles Dickens",
          "Jane Austen",
          "William Shakespeare",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
    ];

    let currentQuestionIndex = 0;
    let marks = 0
    
    startBtn.addEventListener("click", startQuiz)

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < question.length)
        {
            showQuestion();
        }
        else
        {
            showResult();
        }
    })
    
    function startQuiz() {
        resultConatiner.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        startBtn.classList.add("hidden");
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add("hidden");
        questionText.textContent = question[currentQuestionIndex].questions
        choiceList.innerHTML = "" // clear previous choices
        question[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement("li");
            li.textContent = choice
            li.addEventListener("click", () => selectAnswer(choice)) 
            choiceList.appendChild(li);
            // u dont want to call the function immediately but you want to pass
            // the parameter of the function
        })     

    }


    function selectAnswer(choice)
    {
        const correctAns = question[currentQuestionIndex].answer;
        if (choice === correctAns)
        {
            marks++;
        }
        nextBtn.classList.remove("hidden");
    }

    function showResult()
    {
         restartBtn.classList.remove("hidden")
         resultConatiner.classList.remove("hidden");
        score.textContent = marks;

    }

  restartBtn.addEventListener("click", () => {
       currentQuestionIndex = 0;
         restartBtn.classList.add("hidden");
         resultConatiner.classList.add("hidden");
         marks = 0;
        showQuestion();
   })






});
