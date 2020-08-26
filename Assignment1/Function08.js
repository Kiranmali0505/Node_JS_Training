function outer(oparam){

    var olocal=oparam*10;

    function inner(iparam){
        var ilocal=oparam*iparam;

        //ES2015 back tick operator syntax
        console.log(`oparam=${oparam}\tolcal=${olocal}\tiparam=${iparam}\tilocal=${ilocal}`);
    }

    return inner; //will have access to its closure variables

}


let i1= outer(10);  //what is i1? it is an instance of inner()

//but outer function has finished. 
//in java/c#/c++ oparam and olocal would be dead since outer() has finished

//Now how can i1() access oparam and olocal?
//JAVASCRIPT closure concept
//If a function (inner) is alive, all values available to it during its creation, will 
//remain alive for it. This is known as closure scope of scope.
// that means even if outer() is dead, inner will have an access to its closure variables
// that is variables of its outer scope --- oparam and olocal


i1(5);  // oparam=10, olocal=100, iparam=5, ilocal=50


//what if I call outer() again with oparam=100
let i2=outer(100); //oparam=100, iparam=1000

//now we have two function objects i1, and i2. bother have their own closures
// for i1() --> oparam=10, iparam=100
// for i2() --> oparam=100, iparam=1000



i1(1); //oparam=10, olocal=100, iparam=1, ilocal=10
i2(1); //oparam=100, olocal=1000, iparam=1, ilocal=100