const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')
const quizQuestions = [
    {
        question: "Vishakya done PhD in:",
        answers: {
            a: "Physics",
            b: "Chemistry",
            c: "Surface Science",
            d: "Mathematics"
        },
        correctAnswer: "c"
    },
    {
        question: "Vishakya currently work at",
        answers: {
            a: "QUT",
            b: "UQ",
            c: "UNSW",
            d: "ANU"
        },
        correctAnswer: "a"
    },
    {
        question: "Vishakya's research work is on",
        answers: {
            a: "DAN",
            b: "Plants",
            c: "Molecules",
            d: "Animals"
        },
        correctAnswer: "c"
    },
    {
        question: "Vishakya's technical skills include",
        answers: {
            a: "UHV",
            b: "STM",
            c: "XPS",
            d: "All above"
        },
        correctAnswer: "d"
    }
];

function buildQuiz() {
  
    // variable to store the HTML output
    const output = [];

    for(i=0; i<quizQuestions.length; i++){
        // varibale to store the list of possible answers
        const answers = [];

        // for each avaialabele answer to this qustion add a html radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<lable>'
                +'<input type="radio" name="question'+i+'"value="'+letter+'">'
                +letter + ':'
                +quizQuestions[i].answers[letter]
                +'</lable>' 
                );
        }
        //add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
        }

        //combined our output list into one srting of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    
function showResults() {
    
    //gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;

    //for each question...
    for(i=0; i<quizQuestions.length; i++){

        //find seleted answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        //if answer is correct 
        if (userAnswer===quizQuestions[i].correctAnswer) {
            //add to the number of correct answers
            numCorrect++;

            //color the answers green
            answerContainers[i].style.color = 'lightgreen'
            }

            //if answer is wrong or blank
            else{
                //color the answer red
                answerContainers[i].style.color = 'red';
            }
    }
    //if non of the answers correct
    if (numCorrect === 0) {
        resultsContainer.innerHTML = "That wasn't your best effort - You didn't get a single answer correct.";
    }

    //if only one answer correct
    if (numCorrect === 1) {
        resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
    }

    //if two answers correct
    if (numCorrect === 2) {
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that";
    }

    //if three correct answers
    if (numCorrect === 3) {
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Vishakya pretty well!";
    }

    //if all answers are correct
    if (numCorrect === 4) {
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Vishakya pretty well!";
    }
}

//load quiz
buildQuiz();

submitButton.onclick=function(){
    showResults();
}