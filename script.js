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

document.querySelector('#range').addEventListener('change', (e) => {
  console.log(e.target.value)
  document.querySelector('.score').innerHTML = e.target.value / 10
  document.querySelector('.box-image').style.backgroundImage = `url(${gifs[Math.floor((e.target.value)/10)]})`;
})


function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}
