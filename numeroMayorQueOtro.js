const max = (A, B, C) => {
 
    if(A > B && A > C){
      return A;
    }
     if(B > A && B > C){
       return B;
   }
     if(C > A && C > B){
       return C;
     }
   };
   module.exports = max;
   