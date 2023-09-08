

/*========================================*/

const strReverse = () => {
  let str = 'hello';
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--){
    reverse += str[i];
  }
  console.log (reverse);

}
strReverse();




/*========================================*/


const countWords = (str) => {
  let arr = str.split(/\s+/).length;

  console.log (arr);
};

countWords("Hi my name is Taras");
// 5


/*========================================*/


const clearWhiteSpace = (str) => {
  let arr = str.replace(/ /g, "");

  console.log (arr);
};

const result = clearWhiteSpace("  1   2   ");
// 12




/*========================================*/


const cutStr = (str, maxLength) => {
  if (str.length > maxLength){
    console.log(str.slice(0, maxLength) + '...');
  } else {
    console.log (str);
  }
};

cutStr("Hello", 5);
// "Hello"
cutStr("Hello there", 5);
// "Hello..."



/*========================================*/

const palindrome = (str) => {
  const temp = str.length;
  const calc = Math.floor(temp / 2)

  for (let i = 0; i < calc ; i++) {
    if (str.charAt(i) !== str.charAt(temp - 1 - i)) {
      console.log('false');
    }else{
      console.log('true');
    }
  }
  
};

palindrome("tenet");
// true
//palindrome("js");
// false

