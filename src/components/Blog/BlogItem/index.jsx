import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { ColorText } from 'components/_Common'

class BlogItem extends Component {
  render() {
    var data = this.props.data;
    var likebtn = this.props.likebtn;
    return (
      <div
        className={`BlogItem`}
        style={{ ...this.props.style }}
      >
        <img className="BlogPhoto" src={data.image1} alt="" />
        {likebtn && (
          <div className="LikeBtn"><i className="fa fa-heart-o"></i></div>
        )}
        <img className="BlogWriter" src={data.image2} alt="" />
        <ColorText label={'Technology'} />
        <h4>{data.title}</h4>
        <p>{data.content1}</p>
        <div className="BlogOptions">
          <div className="BlogReadMore"><NavLink to={"/news/" + this.props.index}>Read More</NavLink></div>
          <div className="BlogComments"><i className="fa fa-commenting"></i> {data.comments} comments</div>
        </div>
      </div>
    )
  }
}

export default withRouter(BlogItem);
