

function pythagorean(a, b){
    const aPyth = Math.pow (a, 2);
    const bPyth = Math.pow (b, 2);
    const c = Math.sqrt (aPyth + bPyth);

    return c;
};

const result = pythagorean(5, 12);
console.log(result);
// 13






function formatMoney(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Invalid input';
    }

    const isNegative = num < 0; 
    const absoluteNumber = Math.abs(num);

    const numString = absoluteNumber.toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return isNegative ? '-' + numString : numString;
}

const formattedMon = formatMoney(1232323);
console.log(formattedMon); // "1,232,323.00"

const formattedMon = formatMoney(-23.2132);
console.log(formattedMon); // "-23.21"




function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Invalid input';
    }

    const sign = Math.sign(num) === 0 ? '-' : '+';
    const absoluteNumber = Math.abs(num);

    if (Number.isInteger(absoluteNumber)) {
        const numInt = absoluteNumber.toLocaleString('en-US', { useGrouping: true }).replace(/[ ,]+/g, ",");
        const signInt = sign.concat(' ', numInt);
        return signInt;
    } else {
        const numDec = absoluteNumber.toLocaleString('en-US', { useGrouping: true, minimumFractionDigits: 3, maximumFractionDigits: 3 }).numDec.replace(/[ ,]+/g, ",");
        const signDec = sign.concat(' ', numDec);
        return signDec;
    }

};



function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Invalid input';
    }

    const sign = num < 0 ? '-' : '+';
    const absoluteNumber = Math.abs(num);

    const options = {
        useGrouping: true,
        minimumIntegerDigits: 1,
        minimumSignificantDigits: 1,
        maximumFractionDigits: 3,
        minimumFractionDigits: 0, 
    };

    if ((!Number.isInteger(absoluteNumber)) && (absoluteNumber % 1 !== 0)){
        options.minimumFractionDigits = 3; 
    }

    const formattedNumber = absoluteNumber.toLocaleString('en-US', options);
    const formattedNumWithCommas = formattedNumber.replace(/[ ,]+/g, " ");

    const resultNum = sign + ' ' + formattedNumWithCommas;
    return resultNum;
}

const formattedNum = formatNumber(-1232323);
console.log(formattedNum);
// - 1 232 323

const formattedNum = formatNumber(1223.65378);
console.log(formattedNum);
// 1 223.654





function generatePassword(n){
    let pass = '';
    let str = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz;";
 
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    }
    return pass;
};
 
const newPass = generatePassword(8);
console.log(newPass);
// 1H:s4dh$



function calc(firstNum, secondNum, precision) {
    if (precision === undefined) {
        precision = 2; 
    }

    if (firstNum === 0) {
        return "Infinity";
    }

    const result = (secondNum * 100 / firstNum).toFixed(precision);
    return parseFloat(result).toString();
};

const result = calc(200, 50, 0);
console.log(result);
// 25

const result = calc(200, 0.14, 1);
console.log(result);
// 0.1



function splitNumber(num){
    const res = {};
    const string = num.toString();
    const array = string.split('.');

    res.int  = +array[0];
    res.dec = +array[1] ? +array[1] : 0;;
    return res;
};

const result = splitNumber(2);
console.log (result);
// {int: 2, decimal: 0}

const result = splitNumber(2.34);
console.log (result);
// {int: 2, decimal: 34}




function isPrime(n){
    let isPrimeNum = true;
    for(let i = n-1; i>=2; i--) {
      if(n%i === 0) {
        isPrimeNum = false;
      }
    }
    return isPrimeNum;
};

const result = isPrime(4);
console.log (result);
// false

const result = isPrime(5);
console.log (result);
// true



function isArmstrong(n){
    const toArray = n.toString().split('').map(Number);
    const newNum = toArray.map(a => {return a**3}).reduce((a, b) => a + b);

    if(newNum === n){
        return true;
    }else{
        return false;
    }
    
};

const result = isArmstrong(4);
console.log (result);
// false

const result = isArmstrong(153);
console.log (result);
// true
