import React, { Component } from 'react'
import './player.scss'

export default class Player extends Component {
  state = {
    songNumber: 0,
    name: '',
    albom: '',
    play: false,
    isActivePlayer: false,
    hystory: []
  }

  componentDidMount = async () => await this.updateAudio(false)

  prevSong = async () => {
    const hystory = this.state.hystory.slice()
    if (hystory.length <= 2) return

    this.togglePlay()
    this.setState(({ hystory }) => {
      hystory.pop()
    })

    hystory.pop()
    hystory.pop()
    const songNumber = hystory.pop()

    const infoResponse = await fetch(`/api/music/info/${songNumber}`)
    const { name, albom } = await infoResponse.json()

    this.audio = new Audio(`/api/music/song/${songNumber}`)
    this.setState({ songNumber, name, albom })

    this.togglePlay()
  }

  updateAudio = async isUpdate => {
    if (this.audio) this.togglePlay()

    const sizeResponse = await fetch('/api/music/size')
    const { size } = await sizeResponse.json()
    const songNumber = Math.floor(Math.random() * (size - 1))

    const infoResponse = await fetch(`/api/music/info/${songNumber}`)
    const { name, albom } = await infoResponse.json()

    this.audio = new Audio(`/api/music/song/${songNumber}`)
    this.setState(({ hystory }) => {
      hystory.push(songNumber)
      return { hystory }
    })
    this.setState({ songNumber, name, albom })

    if (isUpdate) this.togglePlay()
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause()
    })
  }

  render () {
    const { songNumber, isActivePlayer, play, name, albom } = this.state
    return (
      <>
        <div className='player-wrapper'>
          <div className={isActivePlayer ? 'player active' : 'player'}>
            <img
              src={`/api/music/img/${songNumber}`}
              onClick={() =>
                this.setState(({ isActivePlayer }) => ({
                  isActivePlayer: !isActivePlayer
                }))
              }
              alt='Тут должна быть обложка, но походу что-то сломалось'
            ></img>
            <div className='disk'></div>
            <img
              className={play ? 'small-disc play-disk' : 'small-disc'}
              src={`/api/music/img/${songNumber}`}
              alt='Тут должна быть обложка, но походу что-то сломалось'
            ></img>
            <div className='white-disc'></div>

            <div className='player-content'>
              <p className='name'>{name}</p>
              <p className='albom'>{albom}</p>

              <div className='control'>
                {/* <i class='fas fa-th-list fa-2x'></i> */}

                <i
                  className='fas fa-backward fa-2x'
                  onClick={this.prevSong}
                ></i>

                {!play ? (
                  <i
                    className='fas fa-play fa-2x'
                    onClick={this.togglePlay}
                  ></i>
                ) : (
                  <i
                    className='fas fa-pause fa-2x'
                    onClick={this.togglePlay}
                  ></i>
                )}

                <i
                  className='fas fa-forward fa-2x'
                  onClick={() => this.updateAudio(true)}
                ></i>

                {/* <i class='far fa-heart fa-2x'></i> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
