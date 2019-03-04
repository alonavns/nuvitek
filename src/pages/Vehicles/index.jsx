import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Button, ColorText } from 'components/_Common'
import { VehicleItem } from 'components/About'

class Vehicles extends Component {
  render() {
    const vehicles = [
      {
        name: 'Summo altera an eam',
        description: "Lorem ipsum dolor sit amet, appetere posidonium eum ne, graece recteque sed in. Id ius inani noster. Cu liber apeirian mea, has dicat iisque luptatum id. Hinc ludus sit in, at sed noster regione. Fabulas appareat facilisi usu. Cu liber apeirian mea, has dicat iisque luptatum id. Hinc ludus sit in, at sed noster regione.",
        contract: 'FA8075-16-D-0004, Jamis ID 3900',
        contact: 'example@example.com',
        link: '/vehicles',
      },
      {
        name: 'Summo altera an eam',
        description: "Lorem ipsum dolor sit amet, appetere posidonium eum ne, graece recteque sed in. Id ius inani noster. Cu liber apeirian mea, has dicat iisque luptatum id. Hinc ludus sit in, at sed noster regione. Fabulas appareat facilisi usu. Cu liber apeirian mea, has dicat iisque luptatum id. Hinc ludus sit in, at sed noster regione.",
        contract: 'FA8075-16-D-0004, Jamis ID 3900',
        contact: 'example@example.com',
        link: '/vehicles',
      },
      {
        name: 'Summo altera an eam',
        description: "Lorem ipsum dolor sit amet, appetere posidonium eum ne, graece recteque sed in. Id ius inani noster. Cu liber apeirian mea, has dicat iisque luptatum id. Hinc ludus sit in, at sed noster regione. Fabulas appareat facilisi usu. Cu liber apeirian mea, has dicat iisque luptatum id. Hinc ludus sit in, at sed noster regione.",
        contract: 'FA8075-16-D-0004, Jamis ID 3900',
        contact: 'example@example.com',
        link: '/vehicles',
      },
    ];
    return (
      <div className="VehiclesWrapper">
        <div className="PageHeader">
          <div className="PageName"><ColorText label={'ABOUT US & OUR VALUES'} /></div>
          <div className="PageTitle">Contract Vehicles</div>
          <div className="PageDescription">Quaeque principes dignissim ex nam, an purto saperet mel. In mel ceteros albucius electram, sale hendrerit an has. Has an feugiat iracundia. Cu nominati temporibus mea. Dicat dicant referrentur sit ex, in mutat detraxit explicari mei.</div>
          <div className="PageMore"><i className="fa fa-arrow-down"></i></div>
        </div>
        <div className="Vehicles">
          <Container>
            <Row>
              {vehicles.map((vehicle, index) => (
                <Col key={index} lg={12}>
                  <VehicleItem data={vehicle} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="align-center" lg={12}>
                <Button label="Load More" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Vehicles
