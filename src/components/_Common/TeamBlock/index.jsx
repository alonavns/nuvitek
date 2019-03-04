import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { TeamMember } from 'components/_Common'

class TeamBlock extends Component {
  render() {
    return (
      <div className="TeamBlock">
        <Container>
          <h2>{this.props.data.name}</h2>
          <Row>
            {this.props.data.members.map((member, index) => (
              <Col key={index} lg={4} md={12}>
                <TeamMember data={member} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default TeamBlock
