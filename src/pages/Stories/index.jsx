import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Button, ColorText } from 'components/_Common'
import { StoryItem } from 'components/About'
import photo from 'assets/images/team/member-1.png'

class Stories extends Component {
  state = {
    stories: [
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
    ],
  }
  handleLoadMore = (e) => {
    var {stories} = this.state;
    var newData = [
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
      {
        name: 'stripe',
        description: 'Minimum suscipit an est, vim in aliquip fabulas, ea imperdiet pertinacia qui. Vim etiam inimicus interesset cu. Vis cu cetero blandit adversarium, ei solet fastidii scripserit nam. Fierent signiferumque eam ea.',
        person: { name: 'Romain Briaux', photo: photo, example: '/stories', link: '/stories' },
      },
    ];
    for (var i = 0; i < newData.length; i++) {
      stories.push(newData[i]);
    }
    this.setState({stories});
  }
  render() {
    const { stories } = this.state;
    return (
      <div className="StoriesWrapper">
        <div className="PageHeader">
          <div className="PageName"><ColorText label={'ABOUT US & OUR VALUES'} /></div>
          <div className="PageTitle">Success Stories</div>
          <div className="PageDescription">Quaeque principes dignissim ex nam, an purto saperet mel. In mel ceteros albucius electram, sale hendrerit an has. Has an feugiat iracundia. Cu nominati temporibus mea. Dicat dicant referrentur sit ex, in mutat detraxit explicari mei.</div>
          <div className="PageMore"><i className="fa fa-arrow-down"></i></div>
        </div>
        <div className="Stories">
          <Container>
            <Row className="align-center">
              <Col lg={12}>
                <span className="selector actived">ALL</span>
                <span className="selector">FEDERAL</span>
                <span className="selector">COMMERCIAL</span>
              </Col>
            </Row>
            <Row>
              {stories.map((story, index) => (
                <Col key={index} lg={6} md={12}>
                  <StoryItem data={story} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="align-center" lg={12}>
                <Button label="Load More" onClick={this.handleLoadMore} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Stories
