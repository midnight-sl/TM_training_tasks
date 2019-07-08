 function enterYourAge() {
  const age = +prompt('Type your age');
   if(age) {
     this.isAccessPermitted(age)
   } else {
     throw new Error('Enter your age!!!');
   }
 }
function checkAge(age){
  if (age < 18) {
    throw new Error('Your are not permitted to enter');
    return false;
  } else if (age >= 18) {
    console.log('Welcom :)');
    return true;
  }
}
function isAccessPermitted(age) {
  if (this.checkAge(age)) {
    const extra = prompt('You want to rent a car? -> Type yes');
    isExtraEnabled(extra);
  }
  return;
}
function isExtraEnabled(extra) {
  if (extra === 'yes') {
    chooseCar();
  } else {
    throw new Error('Sorry, you didn\'t agreed');
  }
}
function chooseCar(){
  const cars = ['A', 'B', 'C', 'D'];
  const giveChoice = prompt(cars).toUpperCase();
  if(cars.includes(giveChoice)) chosenCar(giveChoice);
  else throw new Error('Sorry, you chose the non-existing car');
}
function chosenCar(car){
  alert(`Thank you! Your car is ${car}`)
}
enterYourAge();
