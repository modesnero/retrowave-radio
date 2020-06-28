import React from 'react'
import './background.scss'

export default function Background ({ isLabelVisible }) {
  const labelStyle = isLabelVisible
    ? 'label scale-in-center'
    : 'label scale-out-center'

  return (
    <>
      <div className='inner-wrapper'>
        <div className='landscape'></div>
      </div>

      <div className={labelStyle}>
        <span className='retro'>
          <span className='letter'>R</span>
          <span className='letter'>e</span>
          <span className='letter'>t</span>
          <span className='letter'>r</span>
          <span className='letter'>o</span>
        </span>
        <span className='wave'>
          <span className='letter'>w</span>
          <span className='letter'>a</span>
          <span className='letter'>v</span>
          <span className='letter'>e</span>
        </span>
        <span className='radio'>
          <span className='letter'>r</span>
          <span className='letter'>a</span>
          <span className='letter'>d</span>
          <span className='letter'>i</span>
          <span className='letter'>o</span>
        </span>
      </div>

      {isLabelVisible ? <div className='triangle'></div> : null}
    </>
  )
}
