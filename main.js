const myQuestions = [
  {
    question: "Javascript is ________ language.",
    answers: {
      a: "Programing",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
      e: "getLocation()",
    },
    multi: true,
    correctAnswer: "cd",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question: "Javascript is ________ language.",
    answers: {
      a: "Programing",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
      e: "getLocation()",
    },
    multi: true,
    correctAnswer: "cd",
  },
];

let content__question = document.querySelector(".content__question");
let content__answer = document.querySelector(".content__answer");
let btn_pre = document.querySelector(".buttons__pre");
let btn_next = document.querySelector(".buttons__next");
let btn_submit = document.querySelector(".buttons__submit");

function showListAnswer(objectQuestion, index = indexCurrent) {
  content__answer.innerHTML = "";
  const savedAnswer = userAnswer[index] ? userAnswer[index].split("") : "";
  for (const answer in objectQuestion.answers) {
    const answer__item = document.createElement("div");
    const radio = document.createElement("input");
    const label = document.createElement("label");
    const icon = document.createElement("span");
    label.innerHTML = answer + ". " + objectQuestion.answers[answer];
    label.setAttribute("for", answer);
    if (objectQuestion.multi) {
      radio.setAttribute("name", answer);
      radio.setAttribute("type", "checkbox");
    } else {
      radio.setAttribute("name", index);
      radio.setAttribute("type", "radio");
    }
    if (answer === savedAnswer[0]) {
      radio.checked = true;
      savedAnswer.shift();
    }
    radio.setAttribute("id", answer);
    radio.value = index;
    label.appendChild(icon);
    answer__item.appendChild(radio);
    answer__item.appendChild(label);
    content__answer.appendChild(answer__item);
  }

  console.log("save", savedAnswer);
}
let userAnswer = new Array(myQuestions.length).fill("");
function showQuestion(objectQuestion, index) {
  content__question.innerHTML =
    `Question ${index + 1}: ` + objectQuestion.question;

  showListAnswer(objectQuestion, index);
}
let indexCurrent = 0;

showQuestion(myQuestions[indexCurrent], indexCurrent);

btn_next.addEventListener("click", () => {
  saveUserAnswer(indexCurrent);
  indexCurrent += 1;
  showQuestion(myQuestions[indexCurrent], indexCurrent);
  console.log(userAnswer);

  if (indexCurrent === myQuestions.length - 1) {
    btn_next.style.display = "none";
    btn_submit.style.display = "block";
  }
  if (indexCurrent >= 1 && indexCurrent <= myQuestions.length - 1) {
    btn_pre.style.display = "block";
  }
});
btn_pre.addEventListener("click", () => {
  saveUserAnswer(indexCurrent);
  indexCurrent = indexCurrent - 1;
  showQuestion(myQuestions[indexCurrent], indexCurrent);
  console.log(userAnswer);
  if (indexCurrent >= 1 && indexCurrent <= myQuestions.length - 1) {
    btn_pre.style.display = "block";
    btn_submit.style.display = "none";
  }
  if (indexCurrent >= 0 && indexCurrent >= myQuestions.length - 2) {
    btn_next.style.display = "block";
  }
  if (indexCurrent === 0) {
    btn_pre.style.display = "none";
  }
});
function saveUserAnswer(index) {
  userAnswer[index] = "";
  let radioList = document.getElementsByTagName("input");
  for (i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      userAnswer[index] += radioList[i].id;
    }
  }
}
if (indexCurrent === 0) {
  btn_pre.style.display = "none";
  btn_submit.style.display = "none";
}

btn_submit.addEventListener("click", () => {
  saveUserAnswer(indexCurrent);
  let result = 0;
  userAnswer.forEach((value, index) => {
    if (value === myQuestions[index].correctAnswer) {
      result += 1;
    }
  });
  let showResult = document.querySelector(".result");
  showResult.innerHTML = `Point: ${result}/${myQuestions.length}`;
  console.log(result);
});
