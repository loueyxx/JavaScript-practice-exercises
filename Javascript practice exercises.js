//function reverseString(str) {
  //return str.split('').reverse().join('')
//}

//reverseString("Hello, Josh. I did it!");

//function reverseString(str) {
 // var newString = "";
  
  //for (var i = str.length - 1; i >= 0; i --) {
    //newString = newString + str[i];
  //}
  //return newString;
//}

//reverseString("hello");


//function factorialize(num) {
  //if (num < 0) {
    //return -1;
  //} else if (num == 0) {
    //return 1;
  //} else  {
   //return (num * factorialize(num - 1));
   //}
//}

//factorialize(5);


//function palindrome(str) {
  //if (str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, ''//).toLowerCase().split('').reverse().join('')) {
  //return true;
//} else {
  //return false;
 //}
//}



//palindrome("banana");

//function findLongestWord(str) {
  //var words = str.split(' ');
  //var maxLength = 0;
  
  //for (var i = 0; i < words.length; i++){
    //if (words[i].length > maxLength){
      //maxLength = words[i].length;
    //}
  //}
  //return maxLength;
//}

//findLongestWord("The quick brown fox jumped over the lazy dog");


//function titleCase(str) {
  //var changeToArray = str.toLowerCase().split(' ');
  //var newArray = changeToArray.map(function(word) {
    //return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  //});
  //return newArray.join(' ');
//}

//titleCase("hello i am chloe");


function largestOfFour(arr) {
  var results = [];
  
  //create outer loop
  for (var ol = 0; ol < arr.length; ol++){
    var largestNumber = arr[ol][0];
      //create inner loop
      for (var il = 1; il < arr[ol].length; il++){
        if(arr[ol][il] > largestNumber) {
          largestNumber = arr[ol][il];
        }
      }
      results[ol] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);