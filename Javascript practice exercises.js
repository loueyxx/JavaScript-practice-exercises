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


//function largestOfFour(arr) {
  //var results = [];
  
  //create outer loop
  //for (var ol = 0; ol < arr.length; ol++){
    //var largestNumber = arr[ol][0];
      //create inner loop
      //for (var il = 1; il < arr[ol].length; il++){
        //if(arr[ol][il] > largestNumber) {
          //largestNumber = arr[ol][il];
        //}
      //}
      //results[ol] = largestNumber;
  //}
  //return results;
//}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function repeatStringNumTimes(str, num) {
  if (num > 0) {
   return str.repeat(num);
} else {
      return "";
  }
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
   var newString = "";
  
  if (num <= 3){
   newString = str.substr(0, num);
  } else {
    newString = str.substr(0, num -3);
  }
  
  if (num >= str.length){
    return str;
  }
    return newString.concat("...");
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

function chunkArrayInGroups(arr, size) {
  var newArray = [];

  while (arr.length) {
    newArray.push(arr.splice(0, size));
  }
 return newArray;
}

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);


function mutation(arr) {

  var firstWord = arr[1].toLowerCase();
  var secondWord = arr[0].toLowerCase();
    
  for (var i = 0; i < firstWord.length; i++){
    if (secondWord.indexOf(firstWord[i]) === -1) {
      return false;
    }
   }
  
  return true;
}
mutation(["bike", "bike"]);

function bouncer(arr) {
  return arr.filter(Boolean);  
}

bouncer([7, "ate", "", false, 9]);

function destroyer(arr) {
 
 var args = Array.prototype.slice.call(arguments);
  
  for(var i=0; i < arr.length; i++){
   for (var j = 0; j < args.length; j++)
     if (arr[i] === args[j]) {
       delete arr[i];
     }
 }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);