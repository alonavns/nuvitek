import React, { Component } from 'react'

class ColorText extends Component {
  render() {
    return (
      <span
        className={`ColorText ${this.props.green ? 'Green' : ''}`}
        style={{ ...this.props.style }}
      >
        {this.props.label}
      </span>
    )
  }
}

export default ColorText
