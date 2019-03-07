import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { ColorText } from 'components/_Common'

class BlogItem extends Component {
  render() {
    var data = this.props.data;
    return (
      <div
        className={`BlogItem`}
        style={{ ...this.props.style }}
      >
        <img className="BlogPhoto" src={data.photo} alt="" />
        <img className="BlogWriter" src={data.writer} alt="" />
        <ColorText label={data.category} />
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <div className="BlogOptions">
          <div className="BlogReadMore"><NavLink to="/news/1">Read More</NavLink></div>
          <div className="BlogComments"><i className="fa fa-commenting"></i> {data.comments} comments</div>
        </div>
      </div>
    )
  }
}

export default withRouter(BlogItem);
