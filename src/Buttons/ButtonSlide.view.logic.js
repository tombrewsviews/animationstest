import ButtonSlide from './ButtonSlide.view.js'
import React from 'react'

export default class ButtonSlideLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props } = this
    return (
      <ButtonSlide
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
