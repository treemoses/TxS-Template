// List of gifs from document

/*
1 'https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif',
2 'https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif',
3 'https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif',
4 'https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif',
5 'https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif',
6 'https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif',
7 'https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
8 'https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif',
9 'https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif',
10 'https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif',

*/

// those are variables selecting main elements on the page

var resultBox = document.getElementById('result')
var titleBox = document.getElementById('title')
var gifPanel = document.getElementById('gif-panel')
var mainImage = document.getElementById('main-image')
var youImage = document.getElementById('you-image')
var spotifyImage = document.getElementById('spotify-image')
var yrImage = document.getElementById('yr-image')
var youScore = document.getElementById('you-score')
var spotifyScore = document.getElementById('spotify-score')
var yrScore = document.getElementById('yr-score')
var userRating = document.getElementById('clickRating')
var compareButton = document.getElementById('result-button')
// this is how you replace the image from the background
mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
compareButton.hidden = true;

// this is how you create a function
function testClickFunction(){
  alert('clickedddd')
}
function showResultBox(){

}
var userRating;
userRating = 1
userRating = 2
userRating = 3
userRating = 4
userRating = 5
userRating = 6
userRating = 7
userRating = 8
userRating = 9

function clicked1() {
  showButton()
  userRating = 1;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)";
}
function clicked2() {
  showButton()
  userRating = 2;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)";
}
function clicked3() {
  showButton()
  userRating = 3;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)";
}
function clicked4() {
  showButton()
  userRating = 4;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)";
}
function clicked5() {
  showButton()
  userRating = 5;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)";
}
function clicked6() {
  showButton()
  userRating = 6;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)";
}
function clicked7() {
  showButton()
  userRating = 7;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)";
}
function clicked8() {
  showButton()
  userRating = 8;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)";
}
function clicked9() {
  showButton()
  userRating = 9;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)";
}
function clicked10() {
  showButton()
  userRating = 10;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)";
}

function clickedCompare(){
  resultBox.hidden = false;
  gifPanel.hidden = true;
  youScore.innerHTML = userRating;
}

function clickRating(){
  voteBox.hidden = true;
}

function showButton(){
  compareButton.hidden = false;
}




// Activity today will be

// 1. Create a variable to store the user selected Rating  userRating
// 2. Create 10 different functions to update the userRating score
// 3. Add the functions to the correpondent HTML elements, using the onclick="functionName()" attribute
// 4. Create a function to process the click on Compare button
// 5. The function should, hide the element voteBox and show resultBox
// 5.1 Show User score replacing youScore.innerHTML = content
// 5.2. Change youImage with appropriated Gif image
