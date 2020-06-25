const { Router } = require('express')
const path = require('path')
const router = Router()

const musicServicePath = path.resolve(__dirname, '..', 'data', 'music-service')
const musicService = require(musicServicePath)

router.get('/song/:id', (req, res) => {
  const { id } = req.params
  const song = musicService.getMusicById(Number(id))
  res.sendFile(song.path)
})

router.get('/img/:id', (req, res) => {
  const { id } = req.params
  const song = musicService.getMusicById(Number(id))
  console.log(song)
  res.sendFile(song.imgPath)
})

router.get('/size', (req, res) => {
  res.json({ size: musicService.size })
})

module.exports = router
