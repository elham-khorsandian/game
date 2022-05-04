//const previousButton = document.getElementById('previous')
//const nextButton = document.getElementById('next')
/* const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answers = document.getElementById('answers') */

const question1 = document.getElementById("question1");
const deutsche = document.getElementById("deutsche");
const commerz = document.getElementById("commerz");
const question2 = document.getElementById("question2");
const frankfurt = document.getElementById("frankfurt");
const berlin = document.getElementById("berlin");
const submit = document.getElementById("submit")
let score = 0

deutsche.addEventListener("click", () => {
    deutsche.textContent = "correct"
    score +=1  
});
commerz.addEventListener("click", () => {
    commerz.textContent = "wrong" 
});

frankfurt.addEventListener("click" , () =>{
    frankfurt.textContent = "correct"
    score +=1
})
berlin.addEventListener("click", () => {
    berlin.textContent = "wrong" 
});

submit.addEventListener("click" , () => {
    submit.textContent = score
})







/* const questions = [
    {question: 'where do you work?', answers: [
        {text: 'Deutsche Bakn' , correct: true},
        {text: 'Commerz Bank' , correct : false}
    ]},
    {question: 'where are the headquartes of DB located?', answers: [
        {text : 'Frankfurt' , correct: true} ,
        {text: ' Berlin', correct:false}
    ]}
] */


/* 
nextButton.addEventListener('click' , () => {
    currentQuestion++
    setNextQuestion()
})

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestion])
}
function showQuestion(questions){
    questionElement.innerText=questions.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click' , selectAnswer)
        answers.appendChild(button)
        
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answers.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

 */