const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question container')

let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()

} )

function startGame () {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion();
}


function setNextQuestion(){
  resetState() 
showQuestion (shuffledQuestions[currentQuestionIndex])

}


function showQuestion (question){
questionElement.innerText = question.question
question.answers.forEach(answer =>{
  const button = document.createElement('button')
  button.innerText = answer.text 
  button.classList.add('btn')
  if (answer.correct) {
  button.dataset.correct = answer.correct
  }
  button.addEventListener ('click', selectAnswer )
  answerButtonsElement.appendChild(button) 
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    questionElement.innerText = 'Fim do quiz diário :)'
  }
}


function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct )
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
} )

nextButton.classList.remove('hide')
}


function setStatusClass (element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  }
else {
  element.classList.add('wrong')

}

}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var correct = new Boolean(false);

function resetState (){
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild)
  answerButtonsElement.removeChild(answerButtonsElement.firstChild)

}



const questions = [
  
{
question: 'Quantas calorias tem um brigadeiro de 30g?',
answers: [
  {text: '80', correct: true },
  {text: '30', correct: false },
  {text: '132', correct: false }
]
},
{
question: 'Quantas calorias tem uma pipoca do cinemark grande?',
answers: [
{text: '643', correct: false},
{text: '765', correct: false},
{text: '910', correct: true}
]
},
{
question: 'Quantas gramas de proteína possui 100g de peito de frango?',
answers: [
{text: '15', correct: false},
{text: '27', correct: true},
{text:'42', correct: false}
]
},
{
  question: 'Quantas calorias 1 hora de corrida gasta?',
answers: [
  {text: '321', correct: false},
  {text: '560', correct: true},
{text: '769', correct: false}
]
},
{
  question: 'Quantas calorias possui um big mac?',
  answers: [
{text: '318', correct: false},
{text: '506', correct: true},
{text: '700', correct: false}
  ]
}

]
