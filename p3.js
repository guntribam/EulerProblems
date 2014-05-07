/**
 * Created by guntribam on 05/05/2014.
 */
var largestPrimeFactor = function(number){
    var largestPrime = number - 1;
    var control = true;
    while(control){
        if (number % largestPrime == 0){
            for (var i = 2; i < number; i++)
                if (largestPrime % i == 0)
                    break;
                else
                    return largestPrime;
            largestPrime--;
        } else
            largestPrime--;
    }
}
console.log(largestPrimeFactor(100));