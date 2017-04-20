// Numbers and Strings - Add or Concatenate - script.js
 
//----------------------------------------------------------------------------------//
//These are the buttons to activate forms
 
var submitBut= $('#submit').click(findType);
var resetBut= $('#reset').click(resetForm);
 
//----------------------------------------------------------------------------------//
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
  }else if(el =='') {
    numFunc(0);
  } else {
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
  var wordCompare = [];
  wordCompare.push(word);
  var sentence = wordCompare.join(' ');
  var indWords = sentence.split(' ');
 
  $.each(indWords, function(index, value) {
    compareWords(value);});
 
  $('#concatenated').append(' ', sentence);
  event.preventDefault();
}
 
//----------------------------------------------------------------------------------//
//This function will compare arrays, and write the word only if it doesn't already occur.
 
function compareWords (el) {
  var indWord = $('<p>').text(el);
  if($.inArray(el, wordList) === -1){
    $('#container').append(indWord);
    wordList.push(el);
  }else {
    wordList.push(el);
  }
}
 
//----------------------------------------------------------------------------------//
//This will reset everything
 
function resetForm() {
  console.log("the button is working");
}