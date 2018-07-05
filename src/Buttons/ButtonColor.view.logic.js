import ButtonColor from './ButtonColor.view.js'
import React from 'react'

export default class ButtonColorLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props }= this
    return (
      <ButtonColor
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
