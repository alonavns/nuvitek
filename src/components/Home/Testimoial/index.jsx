import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import quote from 'assets/images/home/about/icon-quote.svg'

class Testimoial extends Component {
  render() {
    return (
      <div
        className={`Testimoial`}
        style={{ ...this.props.style }}
      >
        <div className={'StoryQuoto'}>
          <img src={quote} />
        </div>
        <p>{this.props.data.description}</p>
        <div className={'StoryPerson'}>
          <img className={'PersonPhoto'} src={this.props.data.person.photo} />
          <div className={'PersonInfo'}>
            <h3>{this.props.data.person.name}</h3>
            <span>{this.props.data.person.role}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Testimoial);
