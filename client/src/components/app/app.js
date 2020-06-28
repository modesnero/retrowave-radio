import React, { Component } from 'react'
import Player from '../player'
import './app.scss'

export default class App extends Component {
  render () {
    return (
      <>
        <div className='inner-wrapper'>
          <div className='landscape'></div>
        </div>
        <div className='label'>
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
        <div className='triangle'></div>
        <Player />
      </>
    )
  }
}
