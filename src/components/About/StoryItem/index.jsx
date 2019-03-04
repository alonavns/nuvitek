import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import quote from 'assets/images/home/about/icon-quote.svg'

class StoryItem extends Component {
  render() {
    return (
      <div
        className={`StoryItem`}
        style={{ ...this.props.style }}
      >
        <div className={'StoryName float-right'}>{this.props.data.name}</div>
        <div className={'StoryQuoto'}>
          <img src={quote} />
        </div>
        <p>{this.props.data.description}</p>
        <div className={'StoryPerson'}>
          <img className={'PersonPhoto'} src={this.props.data.person.photo} />
          <div className={'PersonInfo'}>
            <h3>{this.props.data.person.name}</h3>
            <NavLink to={this.props.data.person.example} target="_blank">Example</NavLink>
          </div>
          <div className={'PersonMore'}>
            <NavLink to={this.props.data.person.example} target="_blank"><i className="fa fa-arrow-right"></i></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(StoryItem);
