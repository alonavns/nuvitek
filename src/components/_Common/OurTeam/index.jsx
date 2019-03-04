import React, { Component } from 'react'
import { TeamBlock, JoinUs } from 'components/_Common'
import photo1 from 'assets/images/team/member-1.png'
import photo2 from 'assets/images/team/member-2.png'
import photo3 from 'assets/images/team/member-3.png'
import photo4 from 'assets/images/team/member-4.png'
import photo5 from 'assets/images/team/member-5.png'
import photo6 from 'assets/images/team/member-6.png'

class OurTeam extends Component {
  render() {
    const teams = [
      {
        name: 'Executive Team',
        members: [
          {
            name: 'Johnny Atkins',
            jobtitle: 'Job Title',
            description: 'Ut sea labores argumentum inciderint, oratio menandri ad mel. Explicari definiebas comprehensam mea ea.',
            photo: photo1,
            socials: [
              { name: 'facebook', link: 'https://facebook.com' },
              { name: 'twitter', link: 'https://twitter.com' },
              { name: 'linkedin', link: 'https://linkedin.com' },
            ]
          },
          {
            name: 'Lola Perkins',
            jobtitle: 'Job Title',
            description: 'Ut sea labores argumentum inciderint, oratio menandri ad mel. Explicari definiebas comprehensam mea ea.',
            photo: photo2,
            socials: [
              { name: 'facebook', link: 'https://facebook.com' },
              { name: 'twitter', link: 'https://twitter.com' },
              { name: 'linkedin', link: 'https://linkedin.com' },
            ]
          },
          {
            name: 'Chad Romero',
            jobtitle: 'Job Title',
            description: 'Ut sea labores argumentum inciderint, oratio menandri ad mel. Explicari definiebas comprehensam mea ea.',
            photo: photo3,
            socials: [
              { name: 'facebook', link: 'https://facebook.com' },
              { name: 'twitter', link: 'https://twitter.com' },
              { name: 'linkedin', link: 'https://linkedin.com' },
            ]
          },
        ]
      },
      {
        name: 'Advisory Team',
        members: [
          {
            name: 'Alexsander Hoffman',
            jobtitle: 'Job Title',
            description: 'Ut sea labores argumentum inciderint, oratio menandri ad mel. Explicari definiebas comprehensam mea ea.',
            photo: photo4,
            socials: [
              { name: 'facebook', link: 'https://facebook.com' },
              { name: 'twitter', link: 'https://twitter.com' },
              { name: 'linkedin', link: 'https://linkedin.com' },
            ]
          },
          {
            name: 'Fred Reeves',
            jobtitle: 'Job Title',
            description: 'Ut sea labores argumentum inciderint, oratio menandri ad mel. Explicari definiebas comprehensam mea ea.',
            photo: photo5,
            socials: [
              { name: 'facebook', link: 'https://facebook.com' },
              { name: 'twitter', link: 'https://twitter.com' },
              { name: 'linkedin', link: 'https://linkedin.com' },
            ]
          },
          {
            name: 'Charlie Figueroa',
            jobtitle: 'Job Title',
            description: 'Ut sea labores argumentum inciderint, oratio menandri ad mel. Explicari definiebas comprehensam mea ea.',
            photo: photo6,
            socials: [
              { name: 'facebook', link: 'https://facebook.com' },
              { name: 'twitter', link: 'https://twitter.com' },
              { name: 'linkedin', link: 'https://linkedin.com' },
            ]
          },
        ]
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
