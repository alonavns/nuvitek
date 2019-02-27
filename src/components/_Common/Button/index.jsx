import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button
        className={`Button ${this.props.green ? 'Green' : ''}`}
        onClick={this.props.onClick || null}
        style={{ ...this.props.style }}
      >
        {this.props.label}
      </button>
    )
  }
}

export default Button
