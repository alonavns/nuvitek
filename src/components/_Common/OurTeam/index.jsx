import React, { Component } from 'react'
import { TeamBlock, JoinUs } from 'components/_Common'

class OurTeam extends Component {
  render() {
    var team1 = [], team2 = [];
    if (this.props.database['team-members'])
    this.props.database['team-members'].forEach(element => {
      if (element.type) team2.push(element);
      else team1.push(element);
    });
    const teams = [
      {
        name: 'Executive Team',
        members: team1
      },
      {
        name: 'Advisory Team',
        members: team2
      }
    ];
    return (
      <div className="OurTeam">
        {teams.map((team, index) => (
          <TeamBlock key={index} data={team} />
        ))}
        <JoinUs />
      </div>
    )
  }
}

export default OurTeam
