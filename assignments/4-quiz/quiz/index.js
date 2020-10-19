class Quiz {
    constructor(question){
        this.allQuestions = question;
        this.activeIndex = 0;
        this.score = 0;
        this.createUI();
    }
    next() {
        // if(this.activeIndex >= this.allQuestions.length - 1) return;

        const currentAnswerSelected = document.querySelector('input[type="radio"]:checked').value;
        const currentQuestion = this.getCurrentQuestion();

        if (currentQuestion.isCorrectAnswer(currentAnswerSelected)){
            this.updateScore(this.score + 1);
            console.log("Right")
        } else {
            console.log ("Wrong")
        }

        this.activeIndex = this.activeIndex + 1;
        this.createUI()
    }
    getCurrentQuestion() {
        return this.allQuestions[this.activeIndex];
    }
    prev() {
        this.activeIndex = this.activeIndex - 1;
    }
    updateScore (score) {
        this.score = score;
    }
    createUI() {
        let root = document.querySelector('.root')
        let box = document.createElement('div');
        root.innerHTML = "";
        console.log(root)
        root.append(box);
        
        let quizHeading = document.createElement("h1");
        quizHeading.textContent = "QuizBuzz";

        let currentStatus = document.createElement("p");
        currentStatus.textContent = `Question: ${this.activeIndex + 1} / ${this.allQuestions.length}`;

        let score = document.createElement('p');
        score.textContent =`Your Score: ${this.score}`
        
        if(this.activeIndex === this.allQuestions.length) {
            let congratulations = document.createElement("p");
            congratulations.innerText = "Congratulations!";
            box.append(quizHeading, score, congratulations);
            return;
        }

        let currentQuestion = this.getCurrentQuestion();
        let currentQuestionUI = currentQuestion.createUI();

        let nextButton = document.createElement("button");
        nextButton.textContent = "Next";

        nextButton.addEventListener("click", () => {
            console.log("clicked", this);
            this.next();
        });

        box.append(quizHeading, currentStatus, score, currentQuestionUI, nextButton);
    }
}
class Question {
    constructor (title, options, correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrectAnswer(answer){
        return this.getCorrectAnswer() === answer;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex]
    }
    createUI(){
        let body = document.querySelector('body');
        //
        let p = document.createElement('p');
        p.innerText = this.title;
        let radioContainer = document.createElement('div');
        radioContainer.className  = "radio-container"
        //
        this.options.forEach((option) =>{
            let input = document.createElement("input");
            input.type = "radio";
            input.name = "answer";
            input.value = option;
            let label = document.createElement('label');
            label.textContent = option;
            
            radioContainer.append(input, label)

            });

        let div = document.createElement('div');
        div.append(p, radioContainer);
        return div;
       
    }
}

let question1 = new Question (
    "What is part of a database that holds only one type of information?",
    ["Report", "Field", "Record", "File"],
    1
)
let question2 = new Question (
    "In which decade with the first transatlantic radio broadcast occur?",
    ["1850s", "1860s", "1870s", "1900s"],
    3
)
let question3 = new Question (
    "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    ["Flash", "Flange", "Fury", "FRAM"],
    0
)
let question4 = new Question (
    "Who developed Yahoo?",
    ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],
    1
)

let quiz = new Quiz ([question1,question2, question3,question4]);

