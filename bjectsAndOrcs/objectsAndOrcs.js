const adventurer = {
    name: "timothy",
   hitpoints: 10,
    belongings: ["sword", "axe", "tums"],
    companion: {
        name: "peanuts",
        type: "chichi",
        companion: {
            name: "tapeworm",
            type: "parasite"
    }
}
}
    
console.log(adventurer.companion);
console.log(adventurer.companion.type);
console.log(adventurer.companion.name);

const movies = [
    { title: "Toy Story"},
    { title: "Mall Cop"},
    { title: "harry meets Sallo"},
//];
  //console.log(movies)
  //console.log(movies[0])
  //console.log(movies[0].title)


 // for(let i =0; i< movies.length; i++){
 //   console.log(movies[i].title);
 // }

 //const foo: = {
 //   someArray: [1, 2, 3],
 //   someObject: {
 //       someProp:'oh, Hi, Billy'
    
    someMethod = () => {
        console.log("inside of method");
    }

 //console.log(foo.someObject.someProp[0]);
 //console.log(foo.someArray[0]); // 1
 //console.log(foo.someMethod());

 //const foo = [
 //   {prop: 'weeeee!'},
 //   2,
 //  ]

//     //other

    const foo = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]
    ]
console.log(foo[1][2]);//7

const foo = [
    1,
    "Hi",
    ()=> {
        console.log("fun")
    };   

]

const player = {
    name: "Josh the Great",
    health: 1000,
    power: 1000,
    stamina: 1000
}
const player = {
    name: "Josh the Great",
    health: 1000,
    power: 1000,
    stamina: 1000
}
const createEnemy = (nameIs, HealthIs, staminaIs) => {
    const createEmeny = {
        name: "Groot",
        health: 1000,
        power: 1000,
        stamina: 1000
    }   
}
const createPlayer = (nameIs, HealthIs, staminaIs) => {
    const createPlayer = {
        name: "Groot",
        health: 1000,
        power: 1000,
        stamina: 1000
    }   

class Character {
    //constructor
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms=2;
        this.name = name;
        this.age = age;
        this.eyes = hazel;
        this.hair = 'gray'
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs;
    }Greetings " )
    //set method
    setHair(hairColor) {
        this.hair = hairColor
    }
classyGreeting(otherClassyCharacter) {
    console.log("Greetings + otherClassyCharacter.name + "!"")
}
 greet(otherCharcter){
    console.log("Hi");
 }
 smite() {
    console.log('I smite thee, thou vile person');
 }
}

const player1 = new Character("Ariel", 97, "green",  );
const enemy = new Character("Sauron", 1000, "green");

console.log(player1.greet("Billy"));
console.log(player1.greet("Black Adam"));
player1.hair = 'supernova red'
console.log(player1);
player1.setHair('pearl');
console.log(enemy.classyGreeting(player1));

parent classes
pasted inform
class Hobbit extends Character {
    steal () {
        console.log("let's get away!")
    }
    greet (otherCharacter) {
        console.log("Hobbit says hello to ${otherCharacter")
    }
    smite() {
        super.smite();
            this.steal();
            console.log("another one");
    }
}
const frodo = new Hobbit("Mr Baggins", 33, "blue", "brown");
console.log(frodo);
console.log(frodo.smite());
console.log(frodo.steal());
console.log(frodo.greet("Sam"));

//creating a factory

class Car {
    constructor (make, serialNumber){
        this.serialNumber = serialNumber;
        this.make = make;

    }
    drive() {
        console.log('vroom vroom');

    }
}
class Factory {
    construtor(company){
        this.company = company;
        this.cars = {}
            }
}
gerericCar() {
    const newCar = new Car(this.company, this.AbortSignal.length);
    this.cars.push(newCar);
    findCar (index){
        return this.cars[index]
    }
}
const newCar = new Car()
const tesla = new Factory("Tesla");
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0))

const porche = new Factory('Porche');
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(1));