class Animal {
    constructor(type, gender, age=0){
        this.type = type;
        this.gender = gender;
        this.age = age;
    }   
    set nameValue(name) {
         this.name = name;
        }
    set ageValue(age) {
          this.age = age
        }
    static ageCheck(age) {
        return (age > 20)          
    }
    isAgeCritical() {
        return Animal.ageCheck(this.age) ? console.error('Your pet is too old') : console.log('Your cat is young and healthy');
    }
}
class Dog extends Animal {
    constructor(){
        super()
    }
}
class Cat extends Animal {
    constructor(){
        super()
    }
}
class Parror extends Animal {
    constructor(){
        super()
    }
}
const cat = new Cat();
cat.age = 27;
cat.nameValue = 'Thomas';
console.log('Cat ' + cat.name + "'s age is" + cat.age);
console.log(cat.isAgeCritical());
