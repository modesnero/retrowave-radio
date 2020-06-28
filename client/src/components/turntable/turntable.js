import React from 'react'

export default function turntable (props) {
  const { curSongNumber, toggleActivePlayer, isPlay } = props
  return (
    <>
      <img
        src={`/api/music/img/${curSongNumber}`}
        onClick={toggleActivePlayer}
        alt='Тут должна быть обложка, но походу что-то сломалось'
      ></img>
      <div className='disk'></div>
      <img
        className={isPlay ? 'small-disc play-disk' : 'small-disc'}
        src={`/api/music/img/${curSongNumber}`}
        alt='Тут должна быть обложка, но походу что-то сломалось'
      ></img>
      <div className='white-disc'></div>
    </>
  )
}
