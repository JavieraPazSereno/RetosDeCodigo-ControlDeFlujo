const countVowels = (str) => {
  let counter = 0;
  const vocales = ["a","e","i","o","u"];
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j <vocales.length; j++){
      if(str.charAt(i) == vocales[j]){
        counter ++; 
        break;
      }
    }
  }
  return counter;
  };
  
  module.exports = countVowels;
  