function toTheNthPower(number, power) {
    var power = 1;
    for(var i=0; i<power; i++){
       power *= number; 
        
       return power;    
    }
    return power;    
}

var result = toTheNthPower(4, 5);
console.log(result);

