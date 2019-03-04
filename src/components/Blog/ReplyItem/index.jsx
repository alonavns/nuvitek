import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { ColorText } from 'components/_Common'

class ReplyItem extends Component {
  render() {
    var data = this.props.data;
    return (
      <div
        className={`ReplyItem`}
        style={{ ...this.props.style }}
      >
        <div className="WriterInfo">
          <div className="ReplyerPhoto">
            <img src={data.photo} />
          </div>
          <div className="ReplyInfo">
            <p className="ReplyerName">{data.name}</p>
            <p className="ReplyDate">{data.date}</p>
          </div>
          <div className="ReplyAgain">
            <p>Reply</p>
            <i className="fa fa-long-arrow-left"></i>
          </div>
        </div>
        <div className="ReplyContent">{data.text}</div>
      </div>
    )
  }
}

export default withRouter(ReplyItem);
