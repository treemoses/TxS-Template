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
var title=[
 "Overseas",
 "Let it Go",
 "Lover Boy",
 "ラビリンス",
 "Feel Good Inc.",
]

var artist=[
  "Bohan Phoenix",
  "Higher Brothers",
  "Phum Viphurit",
  "Mondo Grosso",
  "Gorillaz",
]

var songsData=[
  {
  songTitle: "Overseas",
  songURI: "spotify:track:5WEdhokZKavl1ed1ocL7fm",
  spotifyRating: 7,
  userRating: null,
  artistName: "Bohan Pheonix",
},
{
  songTitle: "Let it Go",
  songURI: "spotify:track:1uGooqNfg2PDfVZ0POkzuU",
  spotifyRating: 9,
  userRating: null,
  artistName: "Higher Brothers",
},
{
  songTitle: "Lover Boy",
  songURI: "spotify:track:2rd4FH1cSaWGc0ZiUaMbX9",
  spotifyRating: 8,
  userRating: null,
  artistName: "Phum Viphurit",
},
{
  songTitle: "ラビリンス",
  songURI: "spotify:track:3K2zyJhcnMMA6yOdR6hOW7",
  spotifyRating: 7,
  userRating: null,
  artistName: "Mondo Grosso",
},
{
songTitle: "Feel Good Inc.",
songURI: "spotify:track:0d28khcov6AiegSCpG5TuT",
spotifyRating: 8,
userRating: null,
artistName: "Gorillaz",
},
];
// those are variables selecting main elements on the page
var iframeElement = document.querySelector("#song-iframe");

const gifs = [
  'url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)',
  'url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)',
  'url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)',
  'url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)',
  'url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)',
  'url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)',
  'url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)',
  'url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)',
  'url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)',
  'url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)',
];

var userScore =''
function processButton(rating){
  userScore = rating
    //replace backgroundImage with gif reom the list, where list index is userScore -1
    mainImage.style.backgroundImage = gifs [userScore - 1 ];
}

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
/*
var songTitle=document.getElementById('song-title')
var songArtist=document.getElementById('song-artist')
*/
// this is how you replace the image from the background
// mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
compareButton.hidden = true;
nextButton.hidden = true;

var slider = document.getElementById('range')
slider.value
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

// gifs[0]
// gifs[1]
// gifs[2]
// gifs[3]
// gifs[4]
// gifs[5]
// gifs[6]
// gifs[7]
// gifs[8]
// gifs[9]

function clickButton(rating){
  showButton()
  userRating = rating
  mainImage.style.backgroundImage = gifs[rating - 1]
}

function nextButton() {
  showButton()

}

// function youImage(){
// }
/*
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
*/


function clickedCompare(){
  resultBox.hidden = false;
  gifPanel.hidden = true;
  youScore.innerHTML = userRating;
  spotifyScore.innerHTML = songsData[currentSong].spotifyRating
  youImage.style.backgroundImage = gifs[userRating - 1]
  spotifyImage.style.backgroundImage = gifs[ songsData[currentSong].spotifyRating - 1]

}

function clickedNext(){
  resultBox.hidden = true;
  gifPanel.hidden = false;
  compareButton.hidden = true;
  currentSong = currentSong +1;
  iframeElement.src = getSpotifySrc(songsData[currentSong].songURI)
  setAlbumCover(songsData[currentSong].songURI , mainImage)
}

function clickRating(){
  voteBox.hidden = true;
}

function showButton(){
  compareButton.hidden = false;
}
/*
var songs = [
  "spotify:track:5WEdhokZKavl1ed1ocL7fm", //Overseas Spotify dancability=7.27
  "spotify:track:1uGooqNfg2PDfVZ0POkzuU", //Let it Go Spotify dancablility=8.62
  "spotify:track:2rd4FH1cSaWGc0ZiUaMbX9", //Lover Boy Spotify dancability=7.98
  "spotify:track:3K2zyJhcnMMA6yOdR6hOW7", //ラビリンス Spotify dancibility=6.95
  "spotify:track:0d28khcov6AiegSCpG5TuT", //Feel Good Inc. Spotify danciblity=8.18
]
*/
var currentSong = 0;

iframeElement.src = getSpotifySrc(songsData[currentSong].songURI)
setAlbumCover(songsData[currentSong].songURI , mainImage)






function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}

async function setAlbumCover(song, element){
  var aa = await getAlbumCover(song);
  element.style.backgroundImage = `url(${aa})`;
}

async function getAlbumCover(song) {
  //return the Image for a specific song ID
  const songCode = song.split(':')[2];
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://embed.spotify.com/oembed?url=http://open.spotify.com/track/${songCode}`)
    .then(r => r.json());
  return data.thumbnail_url;
}


/*
songsData[0].songURI
songsData[0].songTitle
songsData[0].artistName

songsData[INDEX].songURI
songArtist.innerHTML=songsData[INDEX].artistName
songTitle.innerHTML=songsData[INDEX].songTitle
*/
