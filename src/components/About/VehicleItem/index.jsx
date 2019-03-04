import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'

class VehicleItem extends Component {
  render() {
    return (
      <div
        className={`VehicleItem`}
        style={{ ...this.props.style }}
      >
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <h4>{this.props.data.name}</h4>
              <p>{this.props.data.description}</p>
            </Col>
            <Col lg={6} md={12}>
              <h4>Contract</h4>
              <div className={'ContractWrapper'}>
                <span>COPY</span>
                <span>{this.props.data.contract}</span>
              </div>
              <h4>Contact</h4>
              <p className="ContactText">{this.props.data.contact}</p>
            </Col>
          </Row>
          <NavLink to={this.props.data.link} target="_blank"><i className="fa fa-arrow-down"></i></NavLink>
        </Container>
      </div>
    )
  }
}

export default withRouter(VehicleItem);
