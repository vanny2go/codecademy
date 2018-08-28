let userQuestion = 'Will I become a vampire?';
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'Its certain';
    break;
  case 1:
    eightBall = 'Its decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
	  break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 : 'Outlook not so good';
    break;
  case 7 : 'Signs point to yes';
    break;  
}

    console.log('Question: ' + userQuestion);
    console.log('The Magic Eight Ball answer: ' + eightBall);