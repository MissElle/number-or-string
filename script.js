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
//  $.each(indWords, function(index, value) {
//    wordCount(value);});
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
 
function wordCount(value) {
  var z = 0;
  for (var i=0; i<wordList.length; i++) {
    if (wordList[i] === value) {
      z++;
      var count = $('<p>').text(z);
    }
  }
  $('#wordcount').append(count);
}
 
//---------------------------------------------------------------------------------//
//This will reset everything
 
function resetForm() {
  console.log("the button is working");
}