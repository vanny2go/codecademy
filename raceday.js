let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 21;

if (registeredEarly===false){
raceNumber += 1000;}

if (age>18 && registeredEarly=== true && raceNumber <1000){
  console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber}`);
} else if (registeredEarly=== true || age > 18){
  console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber}`);
} else if (age < 18 && registeredEarly===false){
   console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber}`);
 } else{
   console.log('Please see the registration desk to get your number');
 }