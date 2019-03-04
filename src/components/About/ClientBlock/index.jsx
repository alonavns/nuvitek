import React, { Component } from 'react'

class ClientBlock extends Component {
  render() {
    return (
      <div
        className={`ClientBlock`}
        style={{ ...this.props.style }}
      >
        <div className={'ClientIcon Icon-' + this.props.icon}></div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default ClientBlock
