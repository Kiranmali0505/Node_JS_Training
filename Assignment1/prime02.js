
//find_primes(100) ---> return all primes under 100
//Find primes between 100 to 200
function isPrime(number){

    if(number<2){
        console.log(number,'not Prime ');
        return false;
    }

    for(var x=2;x<number;x++)
        if(number%x===0){
            console.log(number,'Not Prime')
            return false;
        }

    console.log(number,'is prime')
    return true;
    
}

function findPrimesinRange(min,max){

    if(max===undefined){
        max=min
        min=2
    }

    let result=[]; //an empty list

    for(let number=min; number<max; number++)
        if (isPrime(number))
            result.push(number);

    return result;
   
}


findPrimesinRange(100,200);

findPrimesinRange(100); 
