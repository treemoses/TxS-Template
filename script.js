// function (parameter)
var name = 'this is my name'; // String
var number = 12003.2; // Number
var anotherNumber = 10; // Number
var anotherName = 'Billy'; // String
var Toast = 'Bread';
var Soda = 'Pop';
var Fish = 'Fillet';

// var resultBox = document.getElementById('result')
// alert(resultBox)
// resultBox.innerHTML = 'Something'

var voteBox = document.getElementById('vote-box')
// alert(voteBox)
voteBox.innerHTML = 'Vote Box'
voteBox.addEventListener('click', voteBoxFunction)
function voteBoxFunction(){
  voteBox.innerHTML = '<img src="images/1f62d.svg">';
}

var titleBox = document.getElementById('title')
// alert(titleBox)
titleBox.innerHTML = 'Title #2'
titleBox.addEventListener('mouseover', titleBoxFunction)
function titleBoxFunction(){
  titleBox.innerHTML = 'Title #2 ------'
}

var resultBox = document.getElementById('result')
var resultButton = document.getElementById('result-button')
var gifPanel = document.getElementById('gif-panel')

resultBox.hidden = true
resultButton.addEventListener('click', processClick)
function processClick(){
  resultBox.hidden = false;
  gifPanel.hidden = true;
}



//resultBox.hidden = false
// alert(name)
// alert(number)
// alert(aniotherNumber)
// alert(anotherName)
// alert(Bread)
// alert(Soda)
// alert(Fish)

// document.querySelector('#result').hidden = true
// document.getElementById('results')
