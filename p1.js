/**
 * Created by C052802 on 05/05/2014.
 */
var sumOfMultiples = function(numbers, limit){
    var sum = 0;
    var controle = true;
    for(var i = 1; i < limit; i++){
        controle = true;
        numbers.map(function(arrayCell){
           if(i % arrayCell == 0 && controle == true){
               sum += i;
               controle = false;
           }
        });
    }
    return sum;
};

console.log(sumOfMultiples([3,5],1000));