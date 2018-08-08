// drake album picture https://i.scdn.co/image/012ecd119617ac24ab56620ace4b81735b172686
//album URI
// songURI spotify:track:2G7V7zsVDxg1yRsu7Ew9RJ

const gifs = [
  'https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif',
  'https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif',
  'https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif',
  'https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif',
  'https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif',
  'https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif',
  'https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
  'https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif',
  'https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif',
  'https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif',
  'https://i.giphy.com/media/l0HlOWpCtvk3ImJpe/giphy.gif'
]
// spotify:album:7yf9ZJyHRbp8sHtpDKfPpt
document.querySelector('#range').addEventListener('change', (e) => {
  console.log(e.target.value)
  document.querySelector('.score').innerHTML = e.target.value / 10
  document.querySelector('.box-image').style.backgroundImage = `url(${gifs[Math.floor((e.target.value)/10)]})`;
})

console.log(getAlbumCover('spotify:album:3X8Nrq4TvSd54ymTiXYcD6'))




function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}


function getAlbumCover(song) {
  //return the Image for a specific song ID
  const songCode = song.split(':')[2];
  const data = fetch(`https://cors-anywhere.herokuapp.com/https://embed.spotify.com/oembed?url=http://open.spotify.com/track/${songCode}`).
                     then(r => r.json());
  return data;
}
