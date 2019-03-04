import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withRouter } from "react-router-dom";
import { Button } from 'components/_Common'

class JoinUs extends Component {
  handleClickButton = (link) => {
    this.props.history.push(link);
  }
  render() {
    return (
      <div className="JoinUs">
        <Container>
        <h2>
          Join Us
          <div className="float-right">
            <Button label="CAREER OPPORTUNITIES" onClick={e => { this.handleClickButton('/careers') }} />
          </div>
        </h2>
        <p>For Nuvitek, employees are our most important asset. We hire great people, and then provide them with knowledge and tools to enable them to excel in the workplace. Satisfied employees deliver greater results: happy employees, happy customers.</p>
        </Container>
      </div>
    )
  }
}

export default withRouter(JoinUs)
