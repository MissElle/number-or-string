// Numbers and Strings - Add or Concatenate - script.js
 
//----------------------------------------------------------------------------------//
//These are the buttons to activate forms
 
var submitBut= $('#submit').click(findType);
var resetBut= $('#reset').click(resetForm);
 
//----------------------------------------------------------------------------------//
//These are global variables
 
var numList = [];
var wordList = [];
var sum = 0;
 
//----------------------------------------------------------------------------------//
//This function determines if a value is a number or string and acts accordingly
 
function findType(el) {
  var el = $('#typeinput').val();
 
  if (isNaN(el)) {
    wordFunc(el);
    console.log("this is a string");
  }else {
    numFunc(parseInt(el));
  }
}
 
//----------------------------------------------------------------------------------//
//This function is for numbers
 
function numFunc(num) {
  numList.push(num);
  for (var i in numList) {
    var count = numList.length;
    sum += numList[i];
    var mean = sum/count;
  
    $('#numcount').text(count);
    $('#sum').text(sum);
    $('#mean').text(mean);
  }
  event.preventDefault();
  sum = 0;
}
 
//----------------------------------------------------------------------------------//
//This function is for words
 
function wordFunc(word) {
 
  wordList.push(word);
  var sentence = wordList.join(' ');
  var indWords = sentence.split(' ');
  $('#concatenated').text(sentence);
 
  for(var i=0; i<indWords.length; i++) {
   
    console.log(indWords[i]);
  }
 
  event.preventDefault();
}
 
//----------------------------------------------------------------------------------//
 
//This will reset everything
 
function resetForm() {
  console.log("the button is working");
}
 