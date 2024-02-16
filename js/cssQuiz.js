const quizCssQuestion = [
    {
        numb: 1,
        question: " what does the abbreviation HTML stand for ?",
        options: ["hyperTeext Markup Language ", "HighText Markup Language", "HyperText Markdon Language", "None of the above"],
        answerIndex: 0,
    },
    {
        numb: 2,
        question: "  Who is making the Web standards?",
        options: ["Google", "Mozilla", "The World Wide web Consortium", "Microsofr"],
        answerIndex: 2,

    },
    {
        numb: 3,
        question: "  Choose the correct HTML element for the largest heading ? ",
        options: ["head", "heading", "h6", "h1"],
        answerIndex: 3,


    },
    {
        numb: 4,
        question: "  What is the correct HTML element for inserting a line break?",
        options: ["lb", "br", "break", "none of the above"],
        answerIndex: 1,
    },
    {
        numb: 5,
        question: "  What is the correct HTML for adding a background color?",
        options: ["body bg ='yellow '", "background yellow background", "body style='background-color :yello'", "None of the above"],
        answerIndex: 2,
    },
    {
        numb: 6,
        question: "  Choose the correct HTML element to define important text",
        options: ["strong", "i", "b", "important"],
        answerIndex: 0,

    },
    {
        numb: 7,
        question: " Choose the correct HTML element to define emphasized text",
        options: ["italic", "em", "i", "none of the above"],
        answerIndex: 1,


    },
    {
        numb: 8,
        question: "  What is the correct HTML for creating a hyperlink?",
        options: ["href", "url", "name", "a tag"],
        answerIndex: 0,
    },
    {
        numb: 9,
        question: "  Which character is used to indicate an end tag?",
        options: ["^", "/", "*", "<"],
        answerIndex: 1,
    },
    {
        numb: 10,
        question: "  How can you open a link in a new tab/browser window?",
        options: ["<a href=a href=url target=new", "target_self", "target=_blank", "None of the above"],
        answerIndex: 2,
    },

];
const thirdPage = document.getElementsByClassName("ques")[0];
const SecontPage = document.getElementsByClassName("second_page")[0];
const lastButton = document.getElementById("ques-sub");
let cssButton = document.getElementById('b');
const startButton2 = document.getElementById('frwd-2')
cssButton.addEventListener('click', cssQuestionView)
function cssQuestionView() {
    console.log('hello')
    startButton2.style.visibility = "visible";
}

startButton2.addEventListener('click', showCss)
function showCss() {
    thirdPage.style.visibility = "visible";
    SecontPage.style.visibility = "hidden";
    startButton2.style.visibility = "hidden";
    subjectChoose.innerHTML = "CSS"
    scoreGain.innerHTML = '0/10';
}


let currentquestionCssIndex=0;
const totalNumberCssQuestion=quizCssQuestion.length;
 function showCssQuestion(){
    lastButton.style.visibility = "visible";
    let currentCssQuestion= quizCssQuestion[currentquestionCssIndex]
 }