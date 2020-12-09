let readLineSync=require('readline-sync');
let color=require('chalk') 
const error = color.bold.red;
let highScore=[
  {
    user:'Ankit',
    score:10
  },
  {
    user:'Aman',
    score:9
  },
  {
    user:'Yogesh',
    score:9
  },
  {
    user:'Harsh',
    score:8
  }
]
var score=0;
console.log(color.hex('#0D28EE')('What is your name?'));
let username=readLineSync.question();
while(!username)
{
  console.log(error('No input! Please enter your name'));
  username=readLineSync.question();
}
console.log(color.hex('#EE0D70')("Let's see how much you know about Avengers!"));
console.log(color.hex('#EE0D70')("If you score more than 8, then you are a true Avengers fan"))


let questions=[
  {
    question:"What was the name of Gamora's sister?",
    options:[{
  option:'a',
  optionvalue:'Mantis'
},
{
  option:'b',
  optionvalue:'Nebula'
},
{
  option:'c',
  optionvalue:'Pepper'
},
{
  option:'d',
  optionvalue:'None of these'
}],
    answer:'Nebula'
  },
  {
    question:"What was the name of planet which had the Power Stone?",
    options:[{
  option:'a',
  optionvalue:'Morag'
},
{
  option:'b',
  optionvalue:'Earth'
},
{
  option:'c',
  optionvalue:'Titan'
},
{
  option:'d',
  optionvalue:'None of these'
}],
    answer:'Morag'
  },
  {
    question:"What was Thor's hammer name?",
    options:[{
  option:'a',
  optionvalue:'Mjolnir'
},
{
  option:'b',
  optionvalue:'Stormbreaker'
},
{
  option:'c',
  optionvalue:'Jarvis'
},
{
  option:'d',
  optionvalue:'None of these'
}],
    answer:'Mjolnir'
  },
   {
    question:"What was Iron Man's suit name in EndGame?",
    options:[{
  option:'a',
  optionvalue:'Mark 90'
},
{
  option:'b',
  optionvalue:'Mark 88'
},
{
  option:'c',
  optionvalue:'Mark 85'
},
{
  option:'d',
  optionvalue:'Mark 95'
}],
    answer:'Mark 85'
  },
   {
    question:"Who broke Captain America's shield?",
    options:[{
  option:'a',
  optionvalue:'Captain America'
},
{
  option:'b',
  optionvalue:'IronMan'
},
{
  option:'c',
  optionvalue:'Thanos'
},
{
  option:'d',
  optionvalue:'Thor'
}],
    answer:'Thanos'
  },
  {
    question:"Where did IronMan was stuck after Infinity War?",
    options:[{
  option:'a',
  optionvalue:'Titan'
},
{
  option:'b',
  optionvalue:'Space'
},
{
  option:'c',
  optionvalue:'Knowhere'
},
{
  option:'d',
  optionvalue:'Vormir'
}],
    answer:'Space'
  },
  {
    question:"Where was Antman during Infinity War?",
    options:[{
  option:'a',
  optionvalue:'Nidavellir'
},
{
  option:'b',
  optionvalue:'Vormir'
},
{
  option:'c',
  optionvalue:'Quantum Realm'
},
{
  option:'d',
  optionvalue:'Titan'
}],
    answer:'Quantum Realm'
  },
   {
    question:"Who was the villain in Guardians of the Galaxy",
    options:[{
  option:'a',
  optionvalue:'Ronan'
},
{
  option:'b',
  optionvalue:'Ego'
},
{
  option:'c',
  optionvalue:'Thanos'
},
{
  option:'d',
  optionvalue:'Korg'
}],
    answer:'Ronan'
  },
   {
    question:"How did Captain Marvel get her powers?",
    options:[{
  option:'a',
  optionvalue:'Tesseract'
},
{
  option:'b',
  optionvalue:'Mind Stone'
},
{
  option:'c',
  optionvalue:'Soul Stone'
},
{
  option:'d',
  optionvalue:'Reality Stone'
}],
    answer:'Tesseract'
  },
   {
    question:"Who did Cap give his shield to?",
    options:[{
  option:'a',
  optionvalue:'Falcon'
},
{
  option:'b',
  optionvalue:'Bucky'
},
{
  option:'c',
  optionvalue:'Black Panther'
},
{
  option:'d',
  optionvalue:'Howard Stark'
}],
    answer:'Falcon'
  }  
]


function checkAnswer(question){
  for(let i=0;i<question.options.length;i++)
  console.log(color.hex('#FF4500')(question.options[i].option,question.options[i].optionvalue))
   let flag=false;
  var userAnswer=readLineSync.question();
  if(userAnswer=='')
   {
     console.log(error('Invalid Input! Please choose the proper option'));
    checkAnswer(question)
   }
 else{
  for(let i=0;i<question.options.length;i++)
  {
    if(userAnswer.toUpperCase()==question.options[i].option.toUpperCase())
    {
      flag=true;
      if(question.options[i].optionvalue.toUpperCase()==question.answer.toUpperCase()){
      console.log(color.green('Correct!'));
    score++;
      }
    else
    console.log(color.red('Wrong!'));
    }

  }  
  if(!flag)
  {
    console.log(error('Invalid Option! Please choose the proper option'));
    checkAnswer(question)
  }
 }
}


function checkScore(){
if(score<5)
console.log(color.hex('#B73418')('You are not a Avengers fan! You scored only'),score)
else if(score>5 &&score<8)
console.log(color.hex('#D19213')('Not a true fan! But can be, You scored'),score)
else
console.log(color.hex('#44EE0D')('You are a true fan! You scored'),score)
}

function checkLeaderBoards(){
for(let i=0;i<highScore.length;i++)
{
  console.log(color.hex('#990DEE')('User:'),color.hex('#EE0DC2')(highScore[i].user),color.hex('#990DEE')('Score:'),color.hex('#EE0DC2')(highScore[i].score))
}
console.log(color.hex('#EED30D')('Do you want to play again? Press Y or N'));
if(readLineSync.keyInYN())
play(questions);
}
function compare(){

for(let i=0;i<highScore.length;i++)
{
  if(score>highScore[i].score){
  console.log(color.hex('#0DEEC8')('Congratulations!You have beaten',highScore[i].user,'by',score-highScore[i].score));
  highScore[i].user=username;
  highScore[i].score=score;
  }
  else if(score==highScore[i].score){
  console.log(color.hex('#510DEE')('You have scored same as',highScore[i].user));
  }
}
}
function play(questions)
{
  console.log(color.hex('#EE0D70')("Let's play!!!"))
  for(let i=0;i<questions.length;i++){
    console.log(color.blue(questions[i].question));
    checkAnswer(questions[i]);
}
checkScore();
compare();
let userSelection=readLineSync.question(color.hex('#EED30D')('Press 1 to check the leaderboards \nPress 2 to play again \nPress any other key to exit\n'))
if(userSelection==='1')
checkLeaderBoards();
else if(userSelection==='2')
play(questions);
}

play(questions);