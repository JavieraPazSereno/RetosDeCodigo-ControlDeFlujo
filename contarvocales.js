const countVowels = (str) => {
    let counter = 0;
    const volcales = ["a","e","i","o","u"];
    for(let i=0; i<str.length; i++){
      for(let j=0; j<vocales.length; j++){
        if(str[i]==vocales[j]){
          counter ++;
        }
      }
    }
    return counter;
    };
    
    module.exports = countVowels;
    