import ButtonAdd from './ButtonAdd.view.js'
import React from 'react'

export default class ButtonAddLogic extends React.Component {
  state = {
    isClicked: false,
  }

  render() {
    const { props } = this
    return (
      <ButtonAdd
        {...props}
        {...this.state}
        onClick={event => this.setState({ isClicked: !this.state.isClicked })}
      />
    )
  }
}
