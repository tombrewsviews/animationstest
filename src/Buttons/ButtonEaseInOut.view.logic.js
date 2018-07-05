import ButtonEaseInOut from './ButtonEaseInOut.view.js'
import React from 'react'

export default class ButtonEaseInOutLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props } = this
    return (
      <ButtonEaseInOut
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
