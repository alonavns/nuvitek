import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Testimoial } from "components/Home";
import photo from "assets/images/team/member-1.png";

class Testimoials extends Component {
  state = {
    diff: 0,
    moveLock: false,
    timer: null
  };
  componentDidMount() {
    var wrapperElement = document.getElementById("testimoials-wrapper");
    var containerElement = document.getElementById("testimoials-container");
    var self = this;
    const timer = setInterval(function() {
      if (self.state.moveLock) return;
      var diff = self.state.diff;
      var testimoialsCnt = 3;
      diff += 1;
      if (diff == testimoialsCnt) diff = 0;
      var left = -diff * 440;
      // var left = - diff * 440 + wrapperElement.offsetWidth / 2 - 200;
      // if (left + 440 * testimoialsCnt <= wrapperElement.offsetWidth) {
      //   diff = -1;
      //   left = wrapperElement.offsetWidth - 440 * testimoialsCnt;
      // }
      self.setState({ diff });
      containerElement.style.left = left + "px";
    }, 3000);
    this.setState({ timer });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  handleOver = e => {
    this.setState({ moveLock: true });
  };
  handleOut = e => {
    this.setState({ moveLock: false });
  };
  render() {
    var testimoials = [
      {
        description:
          "Ex esse labores gloriatur his, te vel latine posidonium. Usu ei habeo inciderint, cu mei veri assentior reprimique. Vis stet veritus ut, vis hinc adolescens in, essent laoreet ei est.",
        person: { name: "Romain Briaux", photo: photo, role: "Designer" }
      },
      {
        description:
          "Ex esse labores gloriatur his, te vel latine posidonium. Usu ei habeo inciderint, cu mei veri assentior reprimique. Vis stet veritus ut, vis hinc adolescens in, essent laoreet ei est.",
        person: { name: "Romain Briaux", photo: photo, role: "Manager" }
      },
      {
        description:
          "Ex esse labores gloriatur his, te vel latine posidonium. Usu ei habeo inciderint, cu mei veri assentior reprimique. Vis stet veritus ut, vis hinc adolescens in, essent laoreet ei est.",
        person: { name: "Romain Briaux", photo: photo, role: "Web Developer" }
      },
      {
        description:
          "Ex esse labores gloriatur his, te vel latine posidonium. Usu ei habeo inciderint, cu mei veri assentior reprimique. Vis stet veritus ut, vis hinc adolescens in, essent laoreet ei est.",
        person: { name: "Romain Briaux", photo: photo, role: "Designer" }
      },
      {
        description:
          "Ex esse labores gloriatur his, te vel latine posidonium. Usu ei habeo inciderint, cu mei veri assentior reprimique. Vis stet veritus ut, vis hinc adolescens in, essent laoreet ei est.",
        person: { name: "Romain Briaux", photo: photo, role: "Manager" }
      },
      {
        description:
          "Ex esse labores gloriatur his, te vel latine posidonium. Usu ei habeo inciderint, cu mei veri assentior reprimique. Vis stet veritus ut, vis hinc adolescens in, essent laoreet ei est.",
        person: { name: "Romain Briaux", photo: photo, role: "Web Developer" }
      }
    ];
    return (
      <div
        className={`Testimoials`}
        id={"testimoials-wrapper"}
        style={{ ...this.props.style }}
      >
        <div
          id={"testimoials-container"}
          onMouseOver={this.handleOver}
          onMouseOut={this.handleOut}
        >
          {testimoials.map((testimoial, index) => (
            <Testimoial key={index} data={testimoial} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Testimoials);
