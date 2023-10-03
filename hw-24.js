
let i = 1;
const printNumber = () => {
    console.log(i);
    i++;
    if (i <= 5) {
        setTimeout(printNumber, 1000);
        console.log ('after 1s delay');
    }
};

setTimeout(printNumber, 1000);


  // 1
  // after 1s delay
  // 2
  // after 1s delay
  // 3
  // after 1s delay
  // 4
  // after 1s delay
  // 5




for (let i = 1; i <= 5; i++) {
    delayedLoop (i);
}

function delayedLoop(i) {
    setTimeout(function() {
        console.log(i);
        setTimeout(function() {
            console.log("after 1s delay");
        });
    }, 1000 * i);
}
  // 1
  // after 1s delay
  // 2
  // after 1s delay
  // 3
  // after 1s delay
  // 4
  // after 1s delay
  // 5




  const getUserData = (id) => {
    return randomPromise(id);
  };
  
  function randomPromise(id) {
    return new Promise((resolve, reject) => {
      if (id >= 0.5) {
        resolve(`Error ${id}`);
      } else {
        reject(`404 not found`);
      }
    });
  }
  
  getUserData(5)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("404 not found");
    });
  
  // code for error
  // throw Error("404 not found");

 

  const users = [
    {
      id: 1,
      name: "Taras",
      age: 30,
      movies: [],
    },
    {
      id: 2,
      name: "Kate",
      age: 45,
      movies: ["Titanic", "Avatar"],
    },
  ];
  
  const getUserData = (id) => {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("404 not found");
      }
    });
  };
  
  getUserData(2)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });  

  // code for error
  // throw Error("404 not found");