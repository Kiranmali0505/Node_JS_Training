function isPrime(number){

    if(number<2){
        console.log(number,'not Prime ');
        return false;
    }

    for(var i=2;i<number;i++)
        if(number%i===0){
            console.log(number,'Not Prime')
            return false;
        }

    console.log(number,'is prime')
    return true;
    
}

isPrime(10)
isPrime(-10)
isPrime(2)

