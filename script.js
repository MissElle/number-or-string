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
      //This will fade-out the story counter
      $('#storycounter').animate({top: '60vh', opacity: '0'}, '10');
      $('#storycounter').animate({top: '60vh', opacity: '100'}, '10');
      $('#storycounter').animate({top: '50vh', opacity: '0'}, '100');
  }else if(el =='') {
    numFunc(0);
    //This will fade-out the level counter
    $('#levelcounter').animate({top: '60vh', opacity: '0'}, '10');
    $('#levelcounter').animate({top: '60vh', opacity: '100'}, '10');
    $('#levelcounter').animate({top: '50vh', opacity: '0'}, '100');
  } else {
    numFunc(parseInt(el));
    //This will fade-out the level counter
    $('#levelcounter').animate({top: '60vh', opacity: '0'}, '10');
    $('#levelcounter').animate({top: '60vh', opacity: '100'}, '10');
    $('#levelcounter').animate({top: '50vh', opacity: '0'}, '100');
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
//This effects the monster animations
  $('.monster').css('animation-name', 'pan');
  $('.monster').css('animation-delay', '0s');
  $('.monster').css('animation-duration', '2s');
  $('.monster').css('animation-iteration-count', '1');
  $('.ani').css('animation-name','happy');
  $('.ani').css('animation-duration', '5s');
  $('.ani').css('animation-iteration-count', '1');
  $('.ani').css('background-position', '100% top');
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
//This effects the monster animations
  $('.monster').css('animation-name', 'shake');
  $('.monster').css('animation-delay', '0s');
  $('.monster').css('animation-duration', '2s');
  $('.monster').css('animation-iteration-count', '1');
  $('.ani').css('animation-name','hurt');
  $('.ani').css('animation-duration', '5s');
  $('.ani').css('animation-iteration-count', '1');
  $('.ani').css('background-position', '60% top');
}
 
//---------------------------------------------------------------------------------//
//This function will compare arrays, and write the word only if it doesn't
//already occur.
 
function compareWords(el) {
  var x = el.toLowerCase();
  var y = x.replace(/[^a-z0-9A-Z ]/gi, '');
  var indWord = $('<p>').text(y);
 
  if($.inArray(y, wordList) === -1){   
    $('#words-smith').append(indWord);
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
 