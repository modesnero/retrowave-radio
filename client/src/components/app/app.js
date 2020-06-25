import React, { Component } from 'react'

export default class App extends Component {
  state = {
    size: 0,
    songNumber: 0
  }

  componentDidMount = async () => {
    const size = await this.getSize()
    const songNumber = Math.floor(Math.random() * (size - 1))
    this.setState({ size, songNumber })
  }

  getSize = async () => {
    const response = await fetch('/api/music/size')
    const { size } = await response.json()
    return size
  }

  render () {
    const { songNumber } = this.state
    const imgPath = `/api/music/img/${songNumber}`
    const songPath = `/api/music/song/${songNumber}`
    return (
      <>
        <h1>Radio</h1>
        <img src={imgPath} alt='упс' />
        <audio src={songPath} controls autoPlay />
      </>
    )
  }
}
