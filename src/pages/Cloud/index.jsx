import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Button, Input, ColorText } from 'components/_Common'
import { CloudServices, CloudContent } from 'components/Cloud'
import imageClouds from 'assets/images/imageclouds.png'
import imageClients from 'assets/images/clients.png'
import sreviceAws from 'assets/images/services/aws-logo.png'

class Cloud extends Component {
  render() {
    const datas = [
      { title: 'Advisory & Migration', contents: [
        `At nec omnis discere. Autem idque ne est, wisi dolore maluisset nec te, et mea tritani dolores. No quo amet elaboraret, cu habemus nusquam vis. Ut harum eripuit pertinacia eos.`,
        `Alterum reprehendunt cu eum, hinc convenire vis in, aeque eligendi duo id. Ne usu putant mandamus consulatu, mei an equidem explicari dignissim, veritus mnesarchum ei vel. Eos augue munere tincidunt et. Ad graeci persius sea.`,
        `No qui dolor euripidis intellegat, pri te percipit sapientem laboramus, an veri saperet molestie quo. In vix lucilius detraxit lobortis, per ea quod nostrum. Liber democritum qui an, graecis interesset te mei. Labore albucius mandamus in vim, qui no tamquam principes, qui wisi corpora cu.`]
      },
      { title: 'Managed Service and Continuity Operations', contents: [
        `At nec omnis discere. Autem idque ne est, wisi dolore maluisset nec te, et mea tritani dolores. No quo amet elaboraret, cu habemus nusquam vis. Ut harum eripuit pertinacia eos.`,
        `Alterum reprehendunt cu eum, hinc convenire vis in, aeque eligendi duo id. Ne usu putant mandamus consulatu, mei an equidem explicari dignissim, veritus mnesarchum ei vel. Eos augue munere tincidunt et. Ad graeci persius sea.`,
        `No qui dolor euripidis intellegat, pri te percipit sapientem laboramus, an veri saperet molestie quo. In vix lucilius detraxit lobortis, per ea quod nostrum. Liber democritum qui an, graecis interesset te mei. Labore albucius mandamus in vim, qui no tamquam principes, qui wisi corpora cu.`]
      },
    ];
    const services = [
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 10, top: 20}, radius: 94},
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 20, top: 150}, radius: 112, },
      { image: sreviceAws, label: 'AWS - laaS, PaaS', link: 'https://aws.com', pos: { left: 140, top: 50}, radius: 157, },
    ];
    return (
      <div className="CloudWrapper">
        <div className="PageHeader">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="PageTitle">Cloud</div>
                <div className="PageDescription">Eum tota lorem graecis ne, mel praesent scripserit an, unum ceteros definiebas sit in. Ullum similique quo et. Mel simul voluptua intellegat ne.</div>
                <div className="HeaderOptions">
                  <p>Advisory &amp; Migration</p>
                  <p>Managed Service</p>
                  <p>Continuity Operations</p>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <img src={imageClouds} />
              </Col>
            </Row>
          </Container>
        </div>
        <CloudServices data={services} />
        <Container className="CloudContents">
        {datas.map((data, index) => (
          <Row key={index}>
            <Col lg={12}>
              <CloudContent data={data} />
            </Col>
          </Row>
        ))}
        </Container>
        <img className="ClientsImage" src={imageClients} alt="" />
      </div>
    )
  }
}

export default Cloud
