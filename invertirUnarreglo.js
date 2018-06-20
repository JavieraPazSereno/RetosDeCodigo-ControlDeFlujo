const reverse = (array) => {
    let j = 0;
    let x = [];
    for(let i= array.length -1; i >= 0 ; i--){
        x[j] = array[i];
        j++;
    }
    return x;
    };
    
    module.exports = reverse;
    