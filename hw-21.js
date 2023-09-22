


const cachesDecorator = (func) => {
    const cache = new Map();
  
    return function (...args) {
      const key = args.join(',');
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
      }
    };
  };
  
  const obj = {
    num: 1,
    result: null,
    sum: function (num) {
      return this.num + num;
    },
  };
  
  const sumFunction = function (num) {
    return this.num + num;
  };
  
  const decoratedSum = cachesDecorator(sumFunction);
  console.log(decoratedSum.call(obj, 2)); // 3  
  
  const decoratedObjSum = cachesDecorator(obj.sum.bind(obj));
  console.log(decoratedObjSum(3)); // 4




  const factorial = (initialNumber) => {
    if (initialNumber === 0 || initialNumber === 1) {
        return 1;
      } else {
        return initialNumber * factorial(initialNumber - 1);
      }
  };
  
  console.log(factorial(5));
  // 120
  



  const fib = (length) => {
    if (length <= 0) {
        return [];
      } else if (length === 1) {
        return [0];
      } else if (length === 2) {
        return [1, 1];
      } else {
        const seq = fib(length - 1);
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
        return seq;
      }
  };
  
  console.log(fib(5));
  // 1 1 2 3 5
  


  
  const list = {
    title: "lesson-1",
    next: {
      title: "lesson-2",
      next: {
        title: "lesson-3",
        next: {
          title: "lesson-4",
          next: {
            title: "lesson-5",
            next: null,
          },
        },
      },
    },
  };
  
  const readList = (list) => {
    if (list === null) {
      return;
    } else {
      console.log(list.title);
      readList(list.next);
    }
  };
  
  readList(list);
  // lesson-1
  // lesson-2
  // lesson-3
  // lesson-4
  // lesson-5  