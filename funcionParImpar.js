const evenOrOdd = (n) => {
    return comprobar(n);
  };
  
  function comprobar(n){
   if(n % 2  === 0){
      return 0;
   }
   
   else{
     return 1;
   }
  }
  
  module.exports = evenOrOdd;
  