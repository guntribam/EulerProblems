/**
 * Created by guntribam on 05/05/2014.
 */

var test = require('numbers');
var fibonacci = function(){
    var fiboNumbers = [1,2];
    var controle = true;
    for(var i = 1 ; controle == true; i++){
        if(fiboNumbers[i] < 4000000){
            var array = [fiboNumbers[i],fiboNumbers[i-1]];
            fiboNumbers.push(test.basic.sum(array));
        } else{
            controle = false;
        }
    }
    return fiboNumbers;

};
console.log(fibonacci());

var sumOfEvenInFibonacci = function(fibonacci){
    var sum = [];
    fibonacci.map(function(arrayCell){
       if(arrayCell % 2 == 0){
           sum.push(arrayCell);
       }
    });
    sum = test.basic.sum(sum);
    return sum;
};

console.log(sumOfEvenInFibonacci(fibonacci()));