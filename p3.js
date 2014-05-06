/**
 * Created by guntribam on 05/05/2014.
 */

var largestPrimeFactor = function(number){
    var largest = number - 1;

    while(largest > 3){
        console.log(largest + "------------LARGEST");
        var isPrime = true;


            if( largest % 2 == 0 || largest % 3 == 0 || largest % 5 == 0 || largest % 7 == 0 || largest % 11 == 0 || largest % 13 == 0)
                isPrime = false;

        if(isPrime == true) {
            if (number % largest == 0)
                return largest;
            else
                largest--;
        }else
            largest--;

     if(largest <= 3)
        return number + " is a prime number possibly";
    }
}

console.log(largestPrimeFactor(200));