const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const questionEl=document.getElementById('question');
const a_text=document.getElementById("a-text");
const b_text=document.getElementById("b-text");
const c_text=document.getElementById("c-text");
const d_text=document.getElementById("d-text");
const answerEls=document.querySelectorAll(".answer");
const quiz=document.getElementById('quiz');
let currentQuiz=0;
let score=0;
loadQuiz();
function loadQuiz()
{
    deSelectedAnswers();
   const currentQuizData=quizData[currentQuiz];
   questionEl.innerText=currentQuizData.question;
   a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b
     c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
  
}
function getSelected()
{
  
    var answer=undefined;
    answerEls.forEach((answerEl)=>{
        
        if(answerEl.checked){
            
         answer=answerEl.id;
        }
    });
    return answer;
}
function deSelectedAnswers()
{
   answerEls.forEach((answerEl)=>{
       answerEl.checked=false;
   })
}
const buttonClick=document.querySelector("button");
 buttonClick.addEventListener('click',()=>{
    const answer=getSelected();
    
    if(answer)
    {
        if(answer==quizData[currentQuiz].correct)
        {
         score++;
        }
    currentQuiz++;
    
    if(currentQuiz<quizData.length)
    {
    loadQuiz();
    }
    else
    {
       console.log(buttonClick);
        buttonClick.style.display="none";
      quiz.innerHTML=`<h2>You answered correctly to ${score}/${quizData.length}</h2>
      <p class="hi">Thank for answering!</p><button onclick="location.reload()">Reload<button/>`
    }
    
    
    }
   
 }
    )