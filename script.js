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
var title = [
  "Overseas",
  "Let it Go",
  "Lover Boy",
  "ラビリンス",
  "Feel Good Inc.",
]

var artist = [
  "Bohan Phoenix",
  "Higher Brothers",
  "Phum Viphurit",
  "Mondo Grosso",
  "Gorillaz",
]

var songsData = [{
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

var userScore = ''

function processButton(rating) {
  userScore = rating
  //replace backgroundImage with gif reom the list, where list index is userScore -1
  mainImage.style.backgroundImage = gifs[userScore - 1];
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
var slidecontainer = document.getElementById('slide-bar')
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
function testClickFunction() {
  alert('clickedddd')
}

function showResultBox() {

}
var userRating;
var currentSong = 0;

iframeElement.src = getSpotifySrc(songsData[currentSong].songURI)
setAlbumCover(songsData[currentSong].songURI, mainImage)




var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;




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

function clickButton(rating) {
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


function clickedCompare() {
  resultBox.hidden = false;
  gifPanel.hidden = true;
  youScore.innerHTML = userRating;
  spotifyScore.innerHTML = songsData[currentSong].spotifyRating
  youImage.style.backgroundImage = gifs[userRating - 1]
  spotifyImage.style.backgroundImage = gifs[songsData[currentSong].spotifyRating - 1]

}


function clickedNext() {
  currentSong = currentSong + 1;
  if (currentSong >= songsData.length) {
    Score()
  } else {
    resultBox.hidden = true;
    gifPanel.hidden = false;
    compareButton.hidden = true;
    iframeElement.src = getSpotifySrc(songsData[currentSong].songURI)
    setAlbumCover(songsData[currentSong].songURI, mainImage)
    songsData[currentSong].userRating = userRating
  }


}

function clickRating() {
  voteBox.hidden = true;
}

function showButton() {
  compareButton.hidden = false;
}

function slidecontainer() {
  slidecontainer.hidden = true;
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





function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}

async function setAlbumCover(song, element) {
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

var myResult;

function Score() {
  myResult = Math.abs(songsData[0].userRating - songsData[0].spotifyRating) +
    Math.abs(songsData[1].userRating - songsData[1].spotifyRating) +
    Math.abs(songsData[2].userRating - songsData[2].spotifyRating) +
    Math.abs(songsData[3].userRating - songsData[3].spotifyRating) +
    Math.abs(songsData[4].userRating - songsData[4].spotifyRating);
  myResult = myResult / songsData.length;

  resultBox.hidden = true;
  gifPanel.hidden = true;
  compareButton.hidden = true;

  var nesEle = document.getElementById('total-score')
  if( myResult > 0 && myResult <= 2.5 ){
    nesEle.innerHTML = "You were very close to Spotify's own scores."
  }

  if( myResult > 2.5 && myResult <= 5 ){
    nesEle.innerHTML = "You and Spotify have similar musical tastes."
  }

  if( myResult > 5 && myResult <= 7.5 ){
    nesEle.innerHTML = "You don't have much in common with Spotify's taste in music."
  }

  if( myResult > 7.5 && myResult <= 10 ){
    nesEle.innerHTML = "Ooof. You and Spotify do not enjoy similar musical styles."
  }

  // if(myResult>0 && myResult<=3){
  //   show something
  //   nesEle.InnerHTML="something"
}


/*
songsData[0].songURI
songsData[0].songTitle
songsData[0].artistName

songsData[INDEX].songURI
songArtist.innerHTML=songsData[INDEX].artistName
songTitle.innerHTML=songsData[INDEX].songTitle
*/
