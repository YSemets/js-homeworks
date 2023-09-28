
const university = {
  universityName: "Polytechnic",
  dean: "",
};

const faculty = {
  facultyName: "",
  groups: [],
  enlistStudent(studentName){
    const student = { name: studentName };
    if (this.groups.length === 0) {
      this.groups.push([student]);
    } else {
      this.groups[this.groups.length - 1].push(student);
    }
  },
  __proto__: university,
};

console.log(faculty.universityName);
// Polytechnic

faculty.enlistStudent("Taras");
console.log(faculty.groups);
// [['Taras']]






function Animal(name) {
  this.name = name;
  this.getInfo = function() {
    return this.name;
  };
}


function Mammal(name, live) {
  this.name = name;
  this.live = live;
  this.getInfo = function() {
    return this.live;
  };
  this.run = function() {
    return "Run";
  };
}


function Bird(name, live, species) {
  this.name = name;
  this.live = live;
  this.species = species;
  this.getInfo = function() {
    return this.live;
  };
  this.fly = function() {
    return "Fly";
  };
}


function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.whoIsGoodDog = function() {
    return 'Woof Woof';
  };
}


function Penguin(name, species) {
  Bird.call(this, name, 'aquatic', species); 
  this.swim = function() {
    return "Swim";
  };
  this.fly = function() {
    return "Can't fly";
  };
}

const lion = new Animal("Lion");
const elephant = new Mammal("Elephant", "Nature");
const sparrow = new Bird("Sparrow", "tree", "Bird");
const goldenRetriever = new Dog("Richie", "Golden Retriever");
const penguin = new Penguin("Penguin", "Bird");

console.log(lion.getInfo());
console.log(elephant.run());
console.log(sparrow.fly());
console.log(goldenRetriever.whoIsGoodDog());
console.log(penguin.swim());
console.log(penguin.fly());

