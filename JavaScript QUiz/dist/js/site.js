
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which type of JavaScript language is ___",
    answer: "Object-Based",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"

    ]
  },
  {
    id: 5,
    question: "Which one of the following also known as Conditional Expression",
    answer: "immediate if",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if"
    ]
  },
  {
    id: 6,
    question: "In JavaScript, what is a block of statement?",
    answer: "block that combines a number of statements into a single compound statement",
    options: [
      "Conditional block",
      "block that combines a number of statements into a single compound statement",
      "both conditional block and a single statement",
      "block that contains a single statement"
    ]
  },
  {
    id: 7,
    question: "When interpreter encounters an empty statements, what it will do",
    answer: "Ignores the statements",
    options: [
      "Shows a warning",
      "Prompts to complete the statement",
      "Throws an error",
      "Ignores the statements"
    ]
  },
  {
    id: 8,
    question: "the 'function' and 'var' are known as",
    answer: "Declaration statements",
    options: [
      "Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"
    ]
  },
  {
    id: 9,
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answer: "The local element",
    options: [
      "Global variable",
      "The local element",
      "The two of the above",
      "None of the above"
    ]
  },
  {
    id: 10,
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answer: "Function/Method",
    options: [
      "Preprocessor",
      "Triggering Event",
      "RMI",
      "Function/Method"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
