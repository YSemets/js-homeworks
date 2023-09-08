

function filterRange(arr, from, to){
  return arr.filter(element => element >= from && element <= to);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredArr = filterRange(arr, 3, 7);
console.log(filteredArr);
// 3,4,5,6,7






const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];

function sortArr(arr) {
  arr.sort((a, b) => {
    if (a === "" || a === " ") return -1;
    if (b === "" || b === " ") return 1;
    return a.length - b.length;
  });
}
sortArr(arr);
console.log(arr);



const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const averageAge = (arr) => {
  const filteredArr = arr.filter(person => person.age > 17 && person.age < 55);
  const { length } = filteredArr;

  if (length === 0) {
    return 0;
  }

  const sumOfAges = filteredArr.reduce((acc, person) => {
    return acc + person.age;
  }, 0);

  const averAge = sumOfAges / length;

  return parseFloat(averAge.toFixed(1));
};

console.log(averageAge(arr)); 
// 31.4




const arr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

function compareUsers(a, b) {

  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }
  
  return a.age - b.age;
}

const sortedArr = arr.slice().sort(compareUsers);
console.log(sortedArr);

// [
//   { name: "Alan", age: 5 },
//   { name: "Alan", age: 32 },
//   { name: "Boris", age: 55 },
//   { name: "Chris", age: 14 },
//   { name: "Elizabeth", age: 8 },
//   { name: "Elizabeth", age: 48 },
//   { name: "John", age: 2 },
//   { name: "John", age: 5 },
//   { name: "John", age: 25 },
//   { name: "John", age: 45 },
//   { name: "Kate", age: 74 },
//   { name: "Mary", age: 2 },
//   { name: "Mary", age: 29 },
//   { name: "Pete", age: 30 },
//   { name: "Taras", age: 19 },
//   { name: "Taras", age: 25 },
// ];




const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

function minMaxAge(arr) {
  const sortedArr = arr.slice().sort(function(a, b) {
    return a.age - b.age;
  });

  const min = sortedArr[0].age;
  const max = sortedArr[sortedArr.length - 1].age;

  return {
    min: min,
    max: max
  };
}

const result = minMaxAge(arr);
console.log(result);

// {min:5, max:74}



const strings = [
  "HELLO",
  "World",
  "JS",
  "Js",
  "HI",
  "Hello",
  "HTML",
  "CSS",
  "js",
];

function unique(strings) {
  let notDublicates = {};
  let result = [];

  strings.forEach(element => {
    const lowercaseElement = element.toLowerCase();

    if (!notDublicates[lowercaseElement]) {
      notDublicates[lowercaseElement] = true;
      result.push(element);
    }
  });

  return result;
}
console.log(unique(strings)); 

// HELLO, World, JS, HI, HTML, CSS





  function findLongestConsecutive(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    arr.sort((a, b) => a - b); 
  
    let result = [arr[0]];
    let currentConsecutive = [arr[0]];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] + 1) {
    
        currentConsecutive.push(arr[i]);
      } else if (arr[i] !== arr[i - 1]) {
        
        currentConsecutive = [arr[i]]; 
      }
  
      if (currentConsecutive.length > result.length) {
        
        result = currentConsecutive; 
      }
    }
  
    return result;
  }
  

const arr = [1, 2, 3, 4, 5, 2, 3, 4, 5];
const longestConsecutive = findLongestConsecutive(arr);
console.log(longestConsecutive);
// [1, 2, 3, 4, 5]
