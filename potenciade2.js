const powerOfTwo = (number) => {
    let x = 2;
    if (number <= 0){
    x = 1;
    }
    else{
    
      for(let i = 0; i < number; i++){
       x = x * 2;
      }
    }
    return x;
    };
    module.exports = powerOfTwo;