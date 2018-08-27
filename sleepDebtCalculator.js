const getSleepHours = (day) =>{
  switch(day){
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 8;
    case 'Thursday':
      return 7;
    case 'Friday':
      return 7;
    case 'Saturday':
      return 12;
    case 'Sunday':
      return 10;
  }
};

const getActualSleepHours = () =>{
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
};

const getIdealSleepHours = () =>{
  var idealHours = 8;
  return idealHours * 7;
};

calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours){
    console.log('Perfect Amount of Sleep');
  }
  
  else if(actualSleepHours > idealSleepHours){
     console.log('You overslept '+ (idealSleepHours + actualSleepHours) + ' hours.');
  }
	else if(actualSleepHours < idealSleepHours){
    console.log('You got' + (idealSleepHours - actualSleepHours) + 'hours less sleep than you needed. Get some rest.');
  }
};

calculateSleepDebt();