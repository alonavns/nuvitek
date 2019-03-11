import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'

class CareerItem extends Component {
  state = {
    actived: false,
  }
  handleOpen = (e) => {
    this.setState({ actived: !this.state.actived })
  }
  render() {
    return (
      <div
        className={`CareerItem`}
        style={{ ...this.props.style }}
      >
        <div className={'CareerBox'}>
          <div className="float-left">
            <span>POSITION</span>
            <p className="CareerName">{this.props.data.name}</p>
          </div>
          <div className="float-right">
            <span className="CareerTime">Full Time</span>
            <i className={this.state.actived ? 'fa fa-arrow-up' : 'fa fa-arrow-down'} onClick={this.handleOpen}></i>
          </div>
        </div>
        {this.state.actived && (
        <div className={'CareerDetails'}>
          <p>{this.props.data.description}</p>
          <Container>
          <Row>
            {this.props.data.links.map((link, index) => (
              <Col key={index} lg={12} md={6}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </Col>
            ))}
          </Row>
          </Container>
        </div>
        )}
      </div>
    )
  }
}

export default withRouter(CareerItem);
