//wether given number prime or not
var num =100;
function isprimeOne(num){
if(num>1 && num!=null)
{
    if(num===2)
    {
        return true;
    }
    else if(num>1)
    {
       if( num%i==0)
       return true;
    }
    else{
        return false;
    }
}
}
///Write a function to find and return all primes in a given range
var a=200; var b=300;

function isPrime(a,b){
    for(var i=2;i<num;i++)
    {
        if(num%i===0)
        return false;
        return num>1
    }
}
//find_primes(100,200) --> returns all primes between 100 and 200
var num=100;
function isprime1(num)
{
    for (var i=num;i<200;i++)
    {
        if(num%i!==0){
            return true;
        }
    }
}
//find_primes(100) ---> return all primes under 100
var num=3;
function isprime2(num){
    for(var i=2;i<100;i++)
    {
        if(num%i!==0){
return num;
        }
    }
}
var a=20;b=30;
//Write a function to accept multiple arguments and return all values that are prime.
function isprime3(a,b){
    for(var i=2;i<b;i++){
        if(a%i!==0){
            return true;
        }
    }
}