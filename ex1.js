JavaScript: Fahrenheit and Centigrade Temperatures: 

function cToF(celsius) {
  // this is celsius to Fahrenheit
  var fahr = (celsius * 1.8) + 32
  console.log(celsius + '\xB0' + "C is " + fahr + '\xB0'+"F")
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  var celsius = (5/9) * (fahrenheit - 32)
  console.log(fahrenheit + '\xB0' + "F is " + celsius + '\xB0'+"C")
}

cToF(60);
fToC(45);



Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

function computeAverageLengthOfWords(word1, word2) {
  var sum = word1.length + word2.length;
  var avg = sum/2;
  return(avg); 
}
var output = computeAverageLengthOfWords('code','programs');
console.log(output);  // --> 6



Given a person's name and age, "checkAge" returns one of two messages:

function checkAge(name, age) {
  if(age >= 21){
    return('Welcome, ' + name +'!');}
  else{
    return('Go home, ' + name + '!')
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'



Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

function isEvenAndGreaterThanTen(num) {
  if (num > 10 && num%2==0){
   return true;}
  else{
   return false;}
  
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false



Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

function findMinLengthOfThreeWords(word1, word2, word3) {
  if(word1.length < word2.length)
    if(word1.length < word3.length)
      return(word1.length);

  if(word2.length < word3.length)
    if(word2.length < word1.length)
      return(word2.length);
  
  if(word3.length < word2.length)
    if(word3.length < word1.length)
      return(word3.length);
  
}
  
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1



Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

function computeSummationToN(n) {
  var total = 0
  for (i = 0; i <= n; i += 1){
    total += i}
    
    return total
  
}

var output = computeSummationToN(6);
console.log(output); // --> 21
