const quizHtmlQuestion =[
    {    numb :1,
        question : " what does the abbreviation HTML stand for ?",
        options : ["hyperTeext Markup Language ", "HighText Markup Language", "HyperText Markdon Language", "None of the above"],
        answerIndex:0,
    },
    {
      numb :2,
        question : "  Who is making the Web standards?",
        options : ["Google","Mozilla","The World Wide web Consortium","Microsofr"],
        answerIndex :2,

    },
    {
      numb :3,
      question : "  Choose the correct HTML element for the largest heading ? ",
      options : ["head","heading","h6","h1"],
      answerIndex : 3,


    },
    {  
      numb :4,
      question : "  What is the correct HTML element for inserting a line break?",
      options : ["lb" , "br","break","none of the above"],
        answerIndex : 1 , 
    },
    {
      numb :5,
      question : "  What is the correct HTML for adding a background color?",
      options : ["body bg ='yellow '", "background yellow background","body style='background-color :yello'","None of the above"],
        answerIndex:2,
    },
    {
      numb :6,
      question: "  Choose the correct HTML element to define important text",
      options : ["strong","i","b","important"],
        answerIndex: 0,

    },
    {
      numb :7,
      question : " Choose the correct HTML element to define emphasized text",
      options : ["italic","em","i","none of the above"],
      answerIndex:1,


    },
    {
      numb :8,
      question : "  What is the correct HTML for creating a hyperlink?",
      options : ["href","url","name","a tag"],
      answerIndex:0,
    },
    {
      numb :9,
      question: "  Which character is used to indicate an end tag?",
      options:["^","/","*","<"],
      answerIndex:1,
    },
    {
      numb :10,
      question:"  How can you open a link in a new tab/browser window?",
      options:["<a href=a href=url target=new","target_self","target=_blank", "None of the above"],
      answerIndex:2,
    },
 ];
 const quizCssQuestion =[
  {
    question:"What does CSS stand for?",
    options:["computer style sheets","creative style sheets ", "colorful style sheets ", "Cascading style Sheets"],
    question:3,
  },
  {
    question:"What is the correct HTML for referring to an external style sheet?",
    options:["stylesheet","style src=mystyle.css","link ", "none of the above"],
      answerIndex:2,

  },
  {
    question :"Where in an HTML document is the correct place to refer to an external style sheet?",
    options : ["At the end of document","head","body tag","none of the above"],
     answerIndex:1,
  },
  {
    question :""
  }
 ];



 let currentQuestionHtmlIndex=0 ;
 const totalNumberHtmlofQuestion= quizHtmlQuestion.length;


   const firstPage = document.getElementsByClassName("first_page")[0];
   const SecontPage =document.getElementsByClassName("second_page")[0];
   const enterUserName = document.getElementById("userinput");
   const firstButton = document.getElementById("first_sub");
   const nextFirstPage = document.getElementById("btn-first_page");
   const thirdPage = document.getElementsByClassName("ques")[0];
   nextFirstPage.style.visibility="hidden";
   SecontPage.style.visibility="hidden";
   const startButton1 = document.getElementById("frwd-1");
   const startButton2 = document.getElementById("frwd-2");
   const startButton3 = document.getElementById("frwd-3");
   const startButton4 = document.getElementById("frwd-4");

   const htmlButton= document.getElementById("a");
   const csslButton= document.getElementById("b");
   const javscriptButton= document.getElementById("c");
   const jquerrytButton= document.getElementById("d");

   startButton1.style.visibility="hidden";
   startButton2.style.visibility="hidden";
   startButton3.style.visibility="hidden";
   startButton4.style.visibility="hidden";

   const correctdiv = document.getElementById("correct-answer");

   
  const questiondiv = document.getElementById("ques-nub");
  thirdPage.style.visibility="hidden";
  const lastButton= document.getElementById("ques-sub");
 // const upper_ques_div=document.getElementsByClassName("upper-ques")[0];
 let timeTaken = document.getElementById("time1");
 let subjectChoose = document.getElementById("subject1");
 let scoreGain = document.getElementById("score1");


 const counterQuestion = document.getElementById("ques-count");
 const optionDiv = document.querySelectorAll(".ab-1");
// console.log(optionDiv);

let score = 0;
const last_page= document.getElementsByClassName("final")[0];
const studentName = document.getElementById("last-name");
last_page.style.visibility="hidden";
//document.("user").innerHTML=enterUserName.value;
let counter ;
 
// const userAnswer = document.querySelector("input[name=ans]:checked");
// console.log(correctAnswer);

  lastButton.addEventListener("click",nextButtonClickHandler);


   firstButton.addEventListener("click", getUserName)
   function getUserName(){
   //console.log(enterUserName.value);
   const studentNameEnter = enterUserName.value;
   
  
  // document.getElementById("")
   if ( studentNameEnter == "" ) {
        let popup=document.getElementById("pop-1").innerHTML="enter your name";
       
       return 
   }else{
    nextFirstPage.style.visibility="visible";
   }
  
 };

 nextFirstPage.addEventListener("click",secondfny)
 function secondfny(){
    firstPage.style.visibility="hidden";
    SecontPage.style.visibility="visible";
    document.getElementById("student_Name").innerHTML=enterUserName.value;
    console.log(enterUserName.value);
    nextFirstPage.style.visibility="hidden";
    
 }
    
   htmlButton.addEventListener("click",htmlquestFy );

   function htmlquestFy(){
    startButton1.style.visibility="visible";
   }
 startButton1.addEventListener("click",starthandler1);
 function starthandler1(){
/*  upper_ques_div.innerHTML=upper_ques_div.innerHTML + `<div class="timer">time</div>
        <div class="ques_sub_name">html</div> 
        <div class="score-1">1/10</div>`;*/ 
  thirdPage.style.visibility="visible";
  SecontPage.style.visibility="hidden";
  startButton1.style.visibility="hidden";
 //timeTaken.innerHTML=2 ;
 subjectChoose.innerHTML="Html"
 scoreGain.innerHTML='0/10';
   
  showHtnlQuestion()
  startTime(0);

  
 
 }
 



 function showHtnlQuestion(){
 
  lastButton.style.visibility="visible";
  let currentHtmlQuestion = quizHtmlQuestion[currentQuestionHtmlIndex]
 // const count = quizHtmlQuestion.numb;
 //console.log(quizHtmlQuestion[currentQuestionHtmlIndex].numb)
 
    counterQuestion.innerHTML=`${quizHtmlQuestion[currentQuestionHtmlIndex].numb}/10`;
  questiondiv.innerHTML=`<div> ${quizHtmlQuestion[currentQuestionHtmlIndex].numb} . ${currentHtmlQuestion.question} </div>`;
  
   
   
   
     for(let index=0; index< currentHtmlQuestion.options.length; index++){
      const element =currentHtmlQuestion.options[index];

      questiondiv.innerHTML=questiondiv.innerHTML+`<div class="ab-1"><input type="radio" name="ans" id="r${index}" value="${index}"/><label for="r${index}">${element}</label></div>`;
     }
  
 }

 function startTime (time){
  let minu=0;
  counter = setInterval(timer, 1000);
  function timer(){
   
    if(time==60){
      minu++
      time=0
      
    }else{
      time++;
      
    }
    document.getElementById('min').innerHTML=minu
    timeTaken.innerHTML=time;
  }
  
 };

 function nextButtonClickHandler(){
  
 
console.log(currentQuestionHtmlIndex)

 if(currentQuestionHtmlIndex >8){
  lastButton.style.visibility="hidden";
  counterQuestion.style.visibility="hidden";
 // questiondiv.innerHTML="<div style = 'text-align: center';>score</div>"
 last_page.style.visibility="visible";
 thirdPage.style.visibility="hidden";
 studentName.innerHTML="Your Name  "+ enterUserName.value +"!" ;

 correctdiv.innerHTML="your marks is "+ score +".";
 

 }
 else{
  const userAnswerRadioButton =document.querySelector("input[name=ans]:checked");
  questiondiv.style.backgroundColor="white";
  //console.log(userAnswer);
  
  
  if(userAnswerRadioButton==null){
    questiondiv.style.backgroundColor="red";
    alert("select answer");
    return;
  } 

  
  const userAnswer = userAnswerRadioButton.value;
  let correctAnswer =quizHtmlQuestion[currentQuestionHtmlIndex].answerIndex;
  
  if (userAnswer == correctAnswer){
   score= score+1;
  scoreGain.innerHTML=`${score}/10`;
  
   
  }
 
  currentQuestionHtmlIndex =currentQuestionHtmlIndex + 1;
  showHtnlQuestion();
 }
  
 
   
 //selectAnswer()
 };