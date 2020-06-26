const path = require('path')

let count = 0

const addItem = (name, albom) => ({
  id: count++,
  name,
  albom,
  path: path.resolve(__dirname, 'music', albom, `${name}.mp3`),
  imgPath: path.resolve(__dirname, 'img', `${albom}.jpg`)
})

const config = [
  addItem('Anachronist - Bits of Color', 'VA - Pure Synthwave'),
  addItem('Carbon Killer - The Last Stand', 'VA - Pure Synthwave'),
  addItem('Code Elektro - N3On', 'VA - Pure Synthwave'),
  addItem('Compilerbau - Neon Drive', 'VA - Pure Synthwave'),
  addItem(
    'Cosaquitos En Globo - Cruzando el Puente (Instrumental)',
    'VA - Pure Synthwave'
  ),
  addItem(
    'Douglas Holmquist feat. Susanna Lundgren - Something Beneath',
    'VA - Pure Synthwave'
  ),
  addItem('Exiles - Red Lights', 'VA - Pure Synthwave'),
  addItem('Fatal Friction - I Talk To You (Vocal Мix)', 'VA - Pure Synthwave'),
  addItem("Futurecop! feat. LGHTNNG - La Foi En L'eau", 'VA - Pure Synthwave'),
  addItem('Holew - Neon Streets', 'VA - Pure Synthwave'),
  addItem('LeBrock - One Night', 'VA - Pure Synthwave'),
  addItem(
    'Midnight Fighters feat. Majo Leiva - Runaway',
    'VA - Pure Synthwave'
  ),
  addItem("New Arcades - There's Only Two of Us Now", 'VA - Pure Synthwave'),
  addItem('NINA - Beyond Memory', 'VA - Pure Synthwave'),
  addItem("Oblique - I'm Your Mirror", 'VA - Pure Synthwave'),
  addItem('Oscillian - Ad Astra', 'VA - Pure Synthwave'),
  addItem("Oscillian feat. NINA - Don't Give Up", 'VA - Pure Synthwave'),
  addItem('Parallels - I.R.L', 'VA - Pure Synthwave'),
  addItem('September 87 - Ride All Night', 'VA - Pure Synthwave'),
  addItem('Sunglasses Kid - Graduation', 'VA - Pure Synthwave'),
  addItem('The Neon Droid - Goodbye Paradise Bay', 'VA - Pure Synthwave'),
  addItem('The New Division - Vicious', 'VA - Pure Synthwave'),
  addItem('Traverse Town - Killer', 'VA - Pure Synthwave'),
  addItem('VHS Dreams - Nightdrive', 'VA - Pure Synthwave'),

  addItem(
    'Arcade Dreams (Timecop1983 Remix)',
    'The Midnight  - The Midnight Remixed'
  ),
  addItem('Arcade Dreams', 'The Midnight  - The Midnight Remixed'),
  addItem('Collateral (Kobana Remix)', 'The Midnight  - The Midnight Remixed'),
  addItem(
    'Crystalline (Dan Sieg Remix)',
    'The Midnight  - The Midnight Remixed'
  ),
  addItem(
    'Daytona (Blood Groove & Kikis Remix)',
    'The Midnight  - The Midnight Remixed'
  ),
  addItem('Kids (PROFF Dub Remix)', 'The Midnight  - The Midnight Remixed'),
  addItem('Lonely City (ERKKA Remix)', 'The Midnight  - The Midnight Remixed'),
  addItem('Lost Boy (A.M.R Remix)', 'The Midnight  - The Midnight Remixed'),
  addItem('Nocturnal (Nox Vahn Remix)', 'The Midnight  - The Midnight Remixed'),
  addItem('Shadows (Uppermost Remix)', 'The Midnight  - The Midnight Remixed'),
  addItem(
    'The Years (Jayeson Andel Remix)',
    'The Midnight  - The Midnight Remixed'
  ),
  addItem(
    'Tokyo Night Train (Claes Rosen Remix)',
    'The Midnight  - The Midnight Remixed'
  )
]

module.exports = {
  size: count,
  config,
  getMusicById: id => config.find(item => item.id === id),
  getMusicByName: name => config.find(item => item.name === name)
}
