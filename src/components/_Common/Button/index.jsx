import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div
        className={`Button`}
        onClick={this.props.onClick || null}
        style={{ ...this.props.style }}
      >
        {this.props.label}
      </div>
    )
  }
}

export default Button
