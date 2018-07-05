import ButtonWidth from './ButtonWidth.view.js'
import React from 'react'

export default class ButtonWidthLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props } = this
    return (
      <ButtonWidth
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
