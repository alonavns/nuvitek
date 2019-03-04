import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Button } from 'components/_Common'

class JoinUs extends Component {
  render() {
    return (
      <div className="JoinUs">
        <Container>
        <h2>
          Join Us
          <div className="float-right">
            <Button label="CAREER OPPORTUNITIES" />
          </div>
        </h2>
        <p>For Nuvitek, employees are our most important asset. We hire great people, and then provide them with knowledge and tools to enable them to excel in the workplace. Satisfied employees deliver greater results: happy employees, happy customers.</p>
        </Container>
      </div>
    )
  }
}

export default JoinUs
