//Input: 1 parameter, a number to return as a string lazy(no short 4, 9, etc) roman numeral

//declare the return variable and set value to an empty string

// create an object of roman letters as keys with their coresponding numerical values

// loop through object and while num is greater than or equal to obj key's value, subtract num by the value of the object key's value and concat that key into 
    //return value variable

function toRomanLazy(num) {
  
  let lazyRoman = '';

  let romanValues = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  }
  for (let key in romanValues){
    while (num >= romanValues[key]){
      num -= romanValues[key];
      lazyRoman += key;
    }
  }
  
  return lazyRoman;
}

function toRoman(num) {
  
  let realRoman = '';

  let romanValues = {
    "M": 1000,
   "CM": 900,
    "D": 500,
   "CD": 400,
    "C": 100,
   "XC": 90,
    "L": 50,
   "XL": 40,
    "X": 10,
   "IX": 9,
    "V": 5,
   "IV": 4,
    "I": 1
  }
   for (let key in romanValues){
    while(num >= romanValues[key]){
      num -= romanValues[key];
      realRoman += key;
    }
  }
  return realRoman;
}

module.exports = { toRoman, toRomanLazy };
