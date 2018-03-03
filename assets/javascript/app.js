$(document).ready(function () {



//variables

    var correct = 0;
    var incorrect = 0;
    var time = 0;
    var index = 0;
    var askedQuestions = [];

    var html=
"<p> Question: "+ question[i] +"</p>"+
"<p> Options:" +options +"</p>"+
"<p> Correct: "+ correct +"</p>" +
"<p> Incorrect "+ incorrect +"</p>"
;

var trivia= 
[
	 {  
     question: "The island of Saipan is a commonwealth of which country?",
     options: ["United Kingdom", "Australia", "China", "United States of America"],
     answer: [3, "United States of America"],
 	},

 	{  
     question: "The ancient practice of land-diving originated on Pentecost Island in which nation in the South Pacific?",
     options: ["Fiji", "Vanuatu", "Papua New Guinea", "Kiribati"],
     answer: [1, "Vanuatu"],
 	},

 	 {  
     question: "What extinct animal roamed the earth the same time as the Great Pyramids in Egypt were being constructed?",
     options: ["Sabertooth Tiger", "Velociraptor", "Mega Beaver", "Wooly Mammoth"],
     answer: [3, "Wooly Mammoth"],
 	},

 	 {  
     question: "In which European country is it illegal to name your pig Napoleon?",
     options: ["Italy", "England", "France", "Norway"],
     answer: [2, "France"],
 	},

 	 {  
     question: "The unicorn is the official national animal of which country?",
     options: ["Norway", "Scotland", "Sweden", "Ireland"],
     answer: [0, "Norway"],
 	},
            ]


//functions


function startGame(){
   $("#start").on("click", function(){
    randomizeQuestions();
   })

}

function randomizeQuestions(){
    for (var i = 0; i < trivia.question.length; i++){
       console.log(question[i]);
       updateHTML();
   }
}

function updateHTML(){
	 html=
"<p> Question: "+ question[i] +"</p>"+
"<p> Options: " +options +"</p>"+
"<p> Correct: "+ correct +"</p>" +
"<p> Incorrect "+ incorrect +"</p>"
;
document.querySelector("#game").innerHTML=html;
}




//call functions 
startGame();
// randomizeQuestions();
updateHTML();

// $("#start").on("click", function () {
//         startNewGame();
//     });


})