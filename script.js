const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answers = document.getElementById('answers')

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
 


const questions = [
    {question: 'where do you work?', answers: [
        {text: 'Deutsche Bakn' , correct: true},
        {text: 'Commerz Bank' , correct : false}
    ]},
    {question: 'where are the headquartes of DB located?', answers: [
        {text : 'Frankfurt' , correct: true} ,
        {text: ' Berlin', correct:false}
    ]}
]