import React, { Component } from 'react'
import Player from '../player'
import Background from '../background'

export default class App extends Component {
  state = {
    isLabelVisible: true
  }

  labelVisibleToggle = () => {
    this.setState(({ isLabelVisible }) => ({ isLabelVisible: !isLabelVisible }))
  }

  render () {
    const { isLabelVisible } = this.state

    return (
      <>
        <Background isLabelVisible={isLabelVisible} />
        <Player labelVisibleToggle={this.labelVisibleToggle} />
      </>
    )
  }
}
