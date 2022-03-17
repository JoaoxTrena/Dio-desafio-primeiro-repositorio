function validaArray(array, num){
   try{
    if(!array && !num) throw new ReferenceError("Enive os Parâmetros");

    if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");
    
    if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

    if(array.lenght !== num) throw new RangeError('Tamnha inválido');

    return array;
   }
   
catch(a){
    if(e instanceof ReferenceError){
        console.log("Este erro é um RefereceError")
        console.log(e.message)
    } else if(e instanceof TypeError){
        console.log("Este erro é um TypeError")
        console.log(e.message)
    }else if(e instanceof RangeError){
        console.log("Este erro é um RangeError")
        console.log(e.message)
    }else {
        console.log("Tipode erro não esperado:" + e);
    }
    

}

}
console.log(validaArray());