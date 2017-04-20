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
  $('#typeinput').val('');
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
  wordCount(y);
}
 
//---------------------------------------------------------------------------------//
//This function worked but had too many bugs. Leaving it in for recorded value
 
function wordCountTemp(el) {
  for (var i=0; i<worList.length; i++) {
    if (wordList[i] === el) {
      z++;
      var count = $('<p>').text(z);
    }
  }
  $('#wordcount').append(count);
}
 
//---------------------------------------------------------------------------------//
//This will add a count of each word in the master wordList array
// This code was devised using the article below by code_monk
//http://stackoverflow.com/questions/11649255/how-to-count-the-number-of-occurences-of-each-item-in-an-array
 
function wordCount(el) {
  var count = $('<p>').text(obj[el]+1);
  count.attr('id', el);
  obj[el] = obj[el]+1|| 1;
  if(obj[el] !== 1) {
    $('#' +el).replaceWith(count);
  }else {
    $('#wordcount').append('<p id="'+el+'">'+1+'</p>');
  }
}
 
//---------------------------------------------------------------------------------//
//This will reset everything
 
function resetForm() {
  $('#wordcount').html(' ');
  $('#words').html(' ');
  $('#numcount').html(' ');
  $('#sum').html(' ');
  $('#mean').html(' ');
  $('#concatenated').html(' ');
  numList = [];
  wordList = [];
  obj = {};
  sum = 0;
  $('#typeinput').val('');
}
 
//---------------------------------------------------------------------------------//