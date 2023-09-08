/*--------------Quadratic equation--------------*/


const calculate = (a, b, c) => {
    const d = b*b - (4*a*c);
    //console.log (d);

    const sqrt = Math.sqrt(d);//9
    //console.log(sqrt); // 3

    if (d > 0){
        const x1 = (-b + sqrt)/ (2 * a);
        const x2 = (-b - sqrt)/ (2 * a);
        return { x1: x1, x2: x2 };

    } else if (d === 0){
        const x1 = -b / (2 * a);
        return { x1: x1 };

    } else (d < 0 )
        return { x1: null, x2: null };
        
};

const roots = calculate(1, 2, 5);
{
    console.log (roots);
    //   x1: -2,
    //   x2: -3,
};



/*--------------Factorial--------------*/

let res = 1;
const factorial = (num) => {
    for (i = 1; i<=num; i++){
        res = res * i;
    }
    console.log (res);
  };
  
  const result = factorial(5);
  // 120


/*--------------Calculator--------------*/

function addition(...args) {
  let result = 0; 
  for (let i = 0; i < args.length; i++) {
      result += args[i];
  }
  return result;
}

function subtraction(...args) {
  let result = args[0]; 
  for (let i = 1; i < args.length; i++) {
      result -= args[i];        
  }
  return result;
}

function multiplication(...args) {
  let result = 1; 
  for (let i = 0; i < args.length; i++) {
      result *= args[i];
  }
  return result;
}

function division(...args) {
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
      result /= args[i];        
  }
  return result;
}

const calculate = (callback, ...args) => {
  return callback(...args);
};



  
  const totalAdd = calculate(addition, 1, 1, 1, 1);
  console.log (totalAdd);
  // 1 + 1 + 1 + 1 = 4
  const totalSub = calculate(subtraction, -2, -2, 3);
  console.log (totalSub);
  // 20 - 10 - 5 = 5
  const totalMul= calculate(multiplication, 2, 10, 2);
  console.log (totalMul);
  // 2 * 10 * 2 = 40
  const totalDiv = calculate(division, 20, 10, 2);
  console.log (totalDiv);
  // 20 / 10 / 2 = 1



/*--------------Fibonacci--------------*/

const fib = (n) => {
  let a = '1', b = '1', temp;
  const sequence = [a, b];

  while (n >= 3) {
      temp = a;
      a = (parseInt(a) + parseInt(b)).toString();
      b = temp;
      sequence.push(a);
      n--;
  }

  return sequence;
};
  
  const result = fib(5);
  console.log(result);
  // 1 1 2 3 5


/*--------------Pyramid--------------*/


const printPyramid = (n) => {
    const mid = Math.floor((2*n-1)/2);
    for(let row=0; row<n; ++row)
    {
      let level = ''
      for(let col=0; col<2*n-1; col++)
      {
        if(mid-row <=col && mid+row >= col)
          level+='*';
        else level +='#';
      }
      console.log(level);
    }
  };
  
  printPyramid(5);
  // ####*####
  // ###***###
  // ##*****##
  // #*******#
  // *********


