const { Router } = require('express')
const Path = require('path')
const router = Router()

router.get('/', (req, res) => {
  const songPath = Path.resolve(__dirname, '..', 'data', 'music', 'The New Division - Vicious.mp3')
  res.sendFile(songPath)
})

module.exports = router
