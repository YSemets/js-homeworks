/*--------------Quadratic equation--------------*/


const calculate = (a, b, c) => {
    const d = b*b - (4*a*c);
    //console.log (d);

    const sqrt = Math.sqrt(d);//9
    //console.log(sqrt); // 3

    if (d > 0){
        const x1 = (-b + sqrt)/ (2 * a);
        const x2 = (-b - sqrt)/ (2 * a);
        return ["x1:",x1, "x2:",x2];

    } else if (d === 0){
        const x1 = -b / (2 * a);
        return [x1];

    } else (d < 0 )
        return ['No roots'];
        
};

const roots = calculate(1, 5, 6);
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

function  addition(...args) {
    const nums = args[0];
    let result = 0; 
    for (let i = 0; i < nums.length; i++) {
          result += nums[i];
  }
    return result;
}

function subtraction(...args) {
    const nums = args[0];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if(result === 0) { result  = nums[i]; continue}
          result -= nums[i];        
  }
    return result;
}

function  multiplication(...args) {
    const nums = args[0];
    let result = 1; 
    for (let i = 0; i < nums.length; i++) {
          result *= nums[i];
  }
    return result;
}

function division(...args) {
    const nums = args[0];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if(result === 0) { result  = nums[i]; continue}
          result /= nums[i];        
  }
    return result;
}


const calculate = (callback, ...args) => {

    return callback(args);

  };


  
  const result = calculate(addition, 1, 1, 1, 1);
  console.log (result);
  // 1 + 1 + 1 + 1 = 4
  const result = calculate(subtraction, 20, 10, 5);
  console.log (result);
  // 20 - 10 - 5 = 5
  const result = calculate(multiplication, 2, 10, 2);
  console.log (result);
  // 2 * 10 * 2 = 40
  const result = calculate(division, 20, 10, 2);
  console.log (result);
  // 20 / 10 / 2 = 1

  

/*--------------Fibonacci--------------*/

const fib = (n) => {

    var a = 1, b = 1, temp;
    const sequence = [a, b]; 

    while (n >= 3){
      temp = a;
      a = a + b;
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