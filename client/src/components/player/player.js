import React, { Component } from 'react'

export default class Player extends Component {
  state = {
    songNumber: 0,
    play: false
  }

  componentDidMount = async () => await this.updateAudio()

  updateAudio = async () => {
    if (this.audio) this.togglePlay()

    const response = await fetch('/api/music/size')
    const { size } = await response.json()
    const songNumber = Math.floor(Math.random() * (size - 1))

    this.audio = new Audio(`/api/music/song/${songNumber}`)
    this.togglePlay()
    this.setState({ songNumber })
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause()
    })
  }

  render () {
    const { songNumber } = this.state
    return (
      <>
        <img src={`/api/music/img/${songNumber}`} alt='упс' />
        <button onClick={this.togglePlay}>
          {this.state.play ? 'Pause' : 'Play'}
        </button>
        <button onClick={this.updateAudio}>Next</button>
      </>
    )
  }
}
