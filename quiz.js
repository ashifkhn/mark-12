const quiz = document.querySelector(".quiz");
const btn = document.querySelector("#submit");
const output = document.querySelector("#output");

const quizAnswers = ["90", "right angled","Equilateral triangle","180 degrees"];

function scoreQuiz(e) {
    e.preventDefault()
  let score = 0;
  let indexValue = 0;
  const formResult = new FormData(quiz);
  for (let answer of formResult.values()) {
    if (answer === quizAnswers[indexValue]) {
      score = score + 1;
    }
    indexValue = indexValue + 1;
  }
  {
    output.innerText = "Your score is " + score;
  }
}

btn.addEventListener("click", scoreQuiz);
