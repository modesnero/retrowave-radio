const path = require('path')

let count = 0

const getItem = (name, albom) => ({
  id: count++,
  name,
  albom,
  path: path.resolve(__dirname, 'music', albom, `${name}.mp3`),
  imgPath: path.resolve(__dirname, 'img', `${albom}.jpg`)
})

const config = [
  getItem('Anachronist - Bits of Color', 'VA - Pure Synthwave'),
  getItem('Carbon Killer - The Last Stand', 'VA - Pure Synthwave'),
  getItem('Code Elektro - N3On', 'VA - Pure Synthwave'),
  getItem('Compilerbau - Neon Drive', 'VA - Pure Synthwave'),
  getItem(
    'Cosaquitos En Globo - Cruzando el Puente (Instrumental)',
    'VA - Pure Synthwave'
  ),
  getItem(
    'Douglas Holmquist feat. Susanna Lundgren - Something Beneath',
    'VA - Pure Synthwave'
  ),
  getItem('Exiles - Red Lights', 'VA - Pure Synthwave'),
  getItem('Fatal Friction - I Talk To You (Vocal Мix)', 'VA - Pure Synthwave'),
  getItem("Futurecop! feat. LGHTNNG - La Foi En L'eau", 'VA - Pure Synthwave'),
  getItem('Holew - Neon Streets', 'VA - Pure Synthwave'),
  getItem('LeBrock - One Night', 'VA - Pure Synthwave'),
  getItem(
    'Midnight Fighters feat. Majo Leiva - Runaway',
    'VA - Pure Synthwave'
  ),
  getItem("New Arcades - There's Only Two of Us Now", 'VA - Pure Synthwave'),
  getItem('NINA - Beyond Memory', 'VA - Pure Synthwave'),
  getItem("Oblique - I'm Your Mirror", 'VA - Pure Synthwave'),
  getItem('Oscillian - Ad Astra', 'VA - Pure Synthwave'),
  getItem("Oscillian feat. NINA - Don't Give Up", 'VA - Pure Synthwave'),
  getItem('Parallels - I.R.L', 'VA - Pure Synthwave'),
  getItem('September 87 - Ride All Night', 'VA - Pure Synthwave'),
  getItem('Sunglasses Kid - Graduation', 'VA - Pure Synthwave'),
  getItem('The Neon Droid - Goodbye Paradise Bay', 'VA - Pure Synthwave'),
  getItem('The New Division - Vicious', 'VA - Pure Synthwave'),
  getItem('Traverse Town - Killer', 'VA - Pure Synthwave'),
  getItem('VHS Dreams - Nightdrive', 'VA - Pure Synthwave')
]

module.exports = {
  size: count,
  config,
  getMusicById: id => config.find(item => item.id === id),
  getMusicByName: name => config.find(item => item.name === name)
}
