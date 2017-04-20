// Numbers and Strings - Add or Concatenate - script.js
 
//---------------------------------------------------------------------------------//
//These are the buttons to activate forms
 
var submitBut= $('#submit').click(findType);
var resetBut= $('#reset').click(resetForm);
 
//---------------------------------------------------------------------------------//
//These are global variables
 
var numList = [];
var wordList = [];
var obj = {};
var sum = 0;
 
//---------------------------------------------------------------------------------//
//This function determines if a value is a number or string and acts accordingly
 
function findType(el) {
  var el = $('#typeinput').val();
 
  if (isNaN(el)) {
    wordFunc(el);
  }else if(el =='') {
    numFunc(0);
  } else {
    numFunc(parseInt(el));
  }
}
 
//---------------------------------------------------------------------------------//
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
 
//---------------------------------------------------------------------------------//
//This function is for words
 
function wordFunc(word) {
  var wordCompare = [];
  wordCompare.push(word);
  var sentence = wordCompare.join(' ');
  var indWords = sentence.split(' ');
 
  $.each(indWords, function(index, value) {
    compareWords(value);});
  $.each(indWords, function(index, value) {
    wordCount(value);});
  $('#concatenated').append(' ', sentence);
  event.preventDefault();
}
 
//---------------------------------------------------------------------------------//
//This function will compare arrays, and write the word only if it doesn't
//already occur.
 
function compareWords(el) {
  var x = el.toLowerCase();
  var y = x.replace(/[^a-z0-9A-Z ]/gi, '');
  var indWord = $('<p>').text(y);
 
  if($.inArray(y, wordList) === -1){   
    $('#words').append(indWord);
    wordList.push(y);
  }else {
    wordList.push(y);
  }
}
 
//---------------------------------------------------------------------------------//
//This will add a count of each word in the master wordList array
 
function wordCountTemp(el) {
  var z = 0;
  for (var i=0; i<wordList.length; i++) {
    if (wordList[i] === el) {
      z++;
      var count = $('<p>').text(z);
    }
  }
  $('#wordcount').append(count);
}
 
//---------------------------------------------------------------------------------//
//This will add a count of each word in the master wordList array
// This code was devised using the article below by code_monk (1) and Flavius Stef (2)
//http://stackoverflow.com/questions/11649255/how-to-count-the-number-of-occurences-of-each-item-in-an-array
//http://stackoverflow.com/questions/957537/how-can-i-display-a-javascript-object
 
function wordCount(el, key) {
  var count = $('<p>').text(parseInt(obj[el]));
  obj[el] = obj[el]+1 || 1;
    $('#wordcount').append(count);
  console.log(obj);
}
 
//---------------------------------------------------------------------------------//
//This will reset everything
 
function resetForm() {
  console.log("the button is working");
}