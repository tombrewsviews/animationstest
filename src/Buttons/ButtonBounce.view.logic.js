import ButtonBounce from './ButtonBounce.view.js'
import React from 'react'

export default class ButtonBounceLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props } = this
    return (
      <ButtonBounce
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
