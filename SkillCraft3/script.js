const questions = [

{
    question:"Which language is used for web styling?",
    options:["HTML","CSS","Java","Python"],
    answer:"CSS"
},

{
    question:"Which company developed JavaScript?",
    options:["Microsoft","Google","Netscape","Apple"],
    answer:"Netscape"
},

{
    question:"Which keyword is used to declare a variable in JavaScript?",
    options:["var","int","string","define"],
    answer:"var"
},

{
    question:"HTML stands for?",
    options:[
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlink Text Language",
        "Home Tool Markup Language"
    ],
    answer:"Hyper Text Markup Language"
}

];


let currentQuestion=0;
let score=0;
let selectedAnswer="";


const questionElement=document.getElementById("question");
const optionsElement=document.getElementById("options");


function loadQuestion(){

    selectedAnswer="";

    let q=questions[currentQuestion];

    questionElement.innerHTML=q.question;

    optionsElement.innerHTML="";


    q.options.forEach(option=>{

        let button=document.createElement("button");

        button.innerHTML=option;

        button.classList.add("option");


        button.onclick=function(){

            selectedAnswer=option;


            document.querySelectorAll(".option")
            .forEach(btn=>btn.classList.remove("selected"));

            button.classList.add("selected");

        };


        optionsElement.appendChild(button);

    });

}



function nextQuestion(){

    if(selectedAnswer=="")
    {
        alert("Please select an answer");
        return;
    }


    if(selectedAnswer==questions[currentQuestion].answer)
    {
        score++;
    }


    currentQuestion++;


    if(currentQuestion < questions.length)
    {
        loadQuestion();
    }
    else
    {
        showResult();
    }

}



function showResult(){

    document.getElementById("quiz")
    .classList.add("hide");


    document.getElementById("result")
    .classList.remove("hide");


    document.getElementById("score")
    .innerHTML=
    "You scored "+score+" out of "+questions.length;

}



function restart(){

    currentQuestion=0;
    score=0;

    document.getElementById("quiz")
    .classList.remove("hide");


    document.getElementById("result")
    .classList.add("hide");


    loadQuestion();

}



loadQuestion();