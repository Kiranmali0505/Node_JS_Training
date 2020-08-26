//wether given number prime or not
var num =promt("Please Enter the number:",2);
if(num>1 && num!=null)
{
    if(num===2)
    {
        return true;
    }
    else if(num>1)
    {
       if( num% num!==0)
       return true;
    }
    else{
        return false;
    }
}
///Write a function to find and return all primes in a given range

function isPrime(num){
    for(var i=2;i<num;i++)
    {
        if(num%i===0)
        return false;
        return num>1
    }
}
//find_primes(100,200) --> returns all primes between 100 and 200
function isprime(num)
{
    for (var i=num;i<200;i++)
    {
        if(num%i!==0){
            return true;
        }
    }
}
//find_primes(100) ---> return all primes under 100
function isprime(num){
    for(var i=2;i<100;i++)
    {
        if(num%i!==0){
return num;
        }
    }
}

//Write a function to accept multiple arguments and return all values that are prime.
function isprime(a,b){
    for(var i=2;i<b;i++){
        if(a%i!==0){
            return true;
        }
    }
}