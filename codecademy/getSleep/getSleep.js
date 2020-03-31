const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 9;
        break;
      case 'wednesday':
        return 10;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 5;
        break;
      case 'sunday':
        return 12;
        break;
      default:
        return "Error!";
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours*7;  
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep, like ' + (actualSleepHours - idealSleepHours) + 'hours more than needed.');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You should get some rest. ' +  (idealSleepHours -  actualSleepHours) + ' hours.' );
    }
  }
  
  console.log(getSleepHours('tuesday'));
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  calculateSleepDebt()