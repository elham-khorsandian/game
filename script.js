const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
const question = document.getElementById('question')
const answers = document.getElementById('answers')

nextButton.addEventListener('click' , () => {
    currentQuestion++
    setNextQuestion()
})

const questions = [
    {question: 'where do you work?', answers: [
        {text: 'Deutsche Bakn' , correct: true},
        {text: 'Commerz Bank' , correct : false}
    ]},

]