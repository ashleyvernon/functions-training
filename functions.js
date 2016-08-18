// TODO: add your solutions here!
function challenge(word1, word2){
    console.log(word1 + " " + word2);
    return word1 + " " + word2
}

var result = challenge('rock', 'climbing');
console.log(result);

function repeatPhrase(phrase, n) {
    for(var i=1; i<n; i++){
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);

function toTheNthPower(number, power) {
    var total = number;
    for(var i=1; i<power; i++){
       total *= number;      
    }
    return total;    
}

var result = toTheNthPower(4, 5);
console.log(result);



