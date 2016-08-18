// TODO: add your solutions here!
//********FUNCTION #1*********
function challenge(word1, word2){
    console.log(word1 + " " + word2);
    return word1 + " " + word2
}

var result = challenge('rock', 'climbing');
console.log(result);


//********FUNCTION #2*********
function repeatPhrase(phrase, n) {
    for(var i=1; i<n; i++){
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);


//********FUNCTION #3*********
function toTheNthPower(number, power) {
    var total = number;
    for(var i=1; i<power; i++){
       total *= number;      
    }
    return total;    
}

var result = toTheNthPower(4, 5);
console.log(result);


//********FUNCTION #4*********
function areaOfACircle(radius) {
    return radius*radius*Math.PI;
    
}

var result = areaOfACircle(2);
console.log(result);


//********FUNCTION 5**********
function pythagoreanTheorem(a, b) {
    return Math.hypot(a, b);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);

//********FUNCTION #6*********
function isXEvenlyDivisibleByY(x, y) {
    if(x%y===0){
        return true;
    } else {
        return false;
    }
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

//********FUNCTION #7*********
function countVowels(word) {
    return word.match(/[aeiou]/gi).length;
}

var result = countVowels("stealing");
console.log(result);


//********FUNCTION #8*********
function findWdi(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] === 'wdi'){
            return true;
        }
	}
    return false;
}

findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false


//********FUNCTION #9*********
function printTriangle(length) {
    for (var i = 1; i < length + 1; i++) {
        console.log('*'.repeat(i)); 
    } 
}

printTriangle(3);




