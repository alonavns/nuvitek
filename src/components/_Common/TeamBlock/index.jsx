import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { TeamMember } from 'components/_Common'

class TeamBlock extends Component {
  state = {
    left: 15,
  }
  moveContainer = (a) => {
    var members = this.props.data.members;
    if (members == undefined) members = [];
    var { left } = this.state;
    left += a * 370;
    if (left > 15) left = 15;
    if (left < 15 - (members.length - 1) * 370)
      left = 15 - (members.length - 1) * 370
    this.setState({left});
  }
  handleLeft = (e) => {
    this.moveContainer(-1);
  }
  handleRight = (e) => {
    this.moveContainer(1);
  }
  render() {
    var members = this.props.data.members;
    if (members == undefined) members = [];
    return (
      <div className="TeamBlock">
        <Container>
          <div className="TeamBlockHeader">
            <h2>{this.props.data.name}</h2>
            <div className="ScrollButtons">
              <div className="ScrollButton ScrollLeft" onClick={this.handleLeft}><i className="fa fa-arrow-left"></i></div>
              <div className="ScrollButton ScrollRight" onClick={this.handleRight}><i className="fa fa-arrow-right"></i></div>
            </div>
          </div>
          <Row>
            <Col lg={12} className="MembersContainer">
              <div className="MembersScroller" style={{left: this.state.left}}>
              {members.map((member, index) => (
                <TeamMember key={index} data={member} />
              ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default TeamBlock
