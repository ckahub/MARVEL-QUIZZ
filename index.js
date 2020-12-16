var readlineSync= require("readline-sync");

var userAnswer= readlineSync.question("Whats ur name??");

console.log("Welocme "+userAnswer + " to MARVEL QUIZZ?? " )
var score=0;
function play(question,answer)
{
  var guestAnswer=readlineSync.question(question)
 // console.log(question.ques );
  //console.log(guestAnswer);
  
  if(guestAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("U are ri8!!");
      score=score+1;
      
    }
  else
  {
    console.log("U are wrong!!");
  }
}

var question=[
  {
    ques: "What is superhero name of Peter Parker?",
    answer: "SpiderMan",
  },

  {
    ques: "Who is only superhero who has shield ??",
    answer: "Captian America",
  },

  {
     ques: "Which superhero is from place Asgurad??",
     answer: "Thor",
     
  },
  {
     ques: "Who is called GOD OF THUNDER ??",
     answer: "Thor",
     
  },

  {
     ques: "Who is green avenger ??",
     answer: "Hulk",
     
  },

  {
     ques: "Who helped GOD OF THUNDER to kill HELLA ??",
     answer: "RAGNAROCK",
     
  },


  {
     ques: "WhO is superhero and famous neurosurgeon??",
     answer: "Dr Strange",
     
  },

  {
     ques: "Who is killed Thanos in Avenger-End Game ??",
     answer: "Thor",
     
  },



]

var highScore=[
  {
    name:"yash",
    score:"9"
  },
  {
    name:"kelvin",
    score:""
  }
]

for(var i=0; i<question.length;i=i+1)
{
  play(question[i].ques,question[i].answer);
  console.log("Current score is ", score);
  console.log("------------------------")   
}

console.log("YAY!! ur score is +", score);
console.log("-------------------------");

console.log("Checkout high score,if you should be there ping me,I will update it");
console.log( highScore[0].name ,"score is ", highScore[0].score);
console.log( highScore[1].name ,"score is ", highScore[1].score);

console.log("-------------------------");
console.log("")