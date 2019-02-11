import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <div className={`Input ${this.props.green ? 'White' : ''}`}>
        {this.props.textarea ? (
          <textarea
            style={{ ...this.props.style }}
            placeholder={this.props.placeholder || ''}
            onChange={this.props.onChange || null}
          >
            {this.props.value}
          </textarea>
        ) : (
          <input
            style={{ ...this.props.style }}
            placeholder={this.props.placeholder || ''}
            onChange={this.props.onChange || null}
            value={this.props.value}
          />
        )}
        {this.props.required && <i className='fa fa-asterisk' />}
      </div>
    )
  }
}

export default Input
