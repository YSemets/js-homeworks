

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const randomResolve = async () => {
  try {
    const randomDecimal = Math.random();
    const rand = await delay(1000);

    if (randomDecimal < 0.5) {
      return Promise.resolve("even");
    } else {
      return Promise.reject("odd");
    }
  } catch (error) {
    throw error;
  }
};

randomResolve()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });


  


const delay = (ms) => new Promise (resolve => setTimeout(resolve, ms));
const randomResolve = async () =>{
    try {
        const randomDecimal = Math.random ();
        const rand = await delay (1000);

        if (randomDecimal < 0.5) {
            return Promise.resolve ("🥳 Yasss");
        } else {
            return Promise.reject ("🫠🫡 ok");
        }
    } catch (error){
        throw (error);
    }
};

const createPromiseArr = async (n) => {
    const promises = [];

    for (i = 0; i < n; i++){
        promises.push (randomResolve());
    }
    Promise.all(promises)
        .then (result => {
            result.forEach(result =>{
                console.log(result);
            });
        })
        .catch(error => {
            console.error(error);
        });
  };

  createPromiseArr(5);





const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const randomResolve = async () => {
  try {
    const randomDecimal = Math.random();
    await delay(1000);

    if (randomDecimal < 0.5) {
      return "🥳 Yasss";
    } else {
      return "🫠🫡 ok";
    }
  } catch (error) {
    throw error;
  }
};

const createPromiseArr = async (length) => {
  const promises = [];

  for (let i = 0; i < length; i++) {
    promises.push(randomResolve());
  }

  try {
    const results = await Promise.all(promises);
    results.forEach(result => {
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
};

const printResponse = async () => {
  console.log('Starting...');
  await createPromiseArr(8);
  console.log('Done!');
};

printResponse();
