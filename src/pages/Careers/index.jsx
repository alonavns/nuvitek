import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Button, Input, ColorText } from 'components/_Common'
import { CareerItem } from 'components/About'

class Careers extends Component {
  render() {
    const careers = [
      {
        name: 'Cloud Solutions Architect',
        description: "Mel ei alia assueverit, duo eu quodsi numquam graecis, at justo ludus labores eos. Ei veri mundi dolor eos, id eam possim dignissim, illum scriptorem et eam. Nulla admodum neglegentur eam an, tale case detracto ex vix. Ius ad vocibus luptatum. Erat temporibus nec an, in facer tractatos necessitatibus quo. Congue nominavi intellegebat at vix. Omnis novum mollis vix et, fabulas periculis ei eam.",
        links: [
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
        ],
      },
      {
        name: 'Virtualization Engineer',
        description: "Mel ei alia assueverit, duo eu quodsi numquam graecis, at justo ludus labores eos. Ei veri mundi dolor eos, id eam possim dignissim, illum scriptorem et eam. Nulla admodum neglegentur eam an, tale case detracto ex vix. Ius ad vocibus luptatum. Erat temporibus nec an, in facer tractatos necessitatibus quo. Congue nominavi intellegebat at vix. Omnis novum mollis vix et, fabulas periculis ei eam.",
        links: [
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
        ],
      },
      {
        name: 'Network Engineer',
        description: "Mel ei alia assueverit, duo eu quodsi numquam graecis, at justo ludus labores eos. Ei veri mundi dolor eos, id eam possim dignissim, illum scriptorem et eam. Nulla admodum neglegentur eam an, tale case detracto ex vix. Ius ad vocibus luptatum. Erat temporibus nec an, in facer tractatos necessitatibus quo. Congue nominavi intellegebat at vix. Omnis novum mollis vix et, fabulas periculis ei eam.",
        links: [
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
        ],
      },
      {
        name: 'Altiris Engineer',
        description: "Mel ei alia assueverit, duo eu quodsi numquam graecis, at justo ludus labores eos. Ei veri mundi dolor eos, id eam possim dignissim, illum scriptorem et eam. Nulla admodum neglegentur eam an, tale case detracto ex vix. Ius ad vocibus luptatum. Erat temporibus nec an, in facer tractatos necessitatibus quo. Congue nominavi intellegebat at vix. Omnis novum mollis vix et, fabulas periculis ei eam.",
        links: [
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
        ],
      },
      {
        name: 'Help Desk Engineer',
        description: "Mel ei alia assueverit, duo eu quodsi numquam graecis, at justo ludus labores eos. Ei veri mundi dolor eos, id eam possim dignissim, illum scriptorem et eam. Nulla admodum neglegentur eam an, tale case detracto ex vix. Ius ad vocibus luptatum. Erat temporibus nec an, in facer tractatos necessitatibus quo. Congue nominavi intellegebat at vix. Omnis novum mollis vix et, fabulas periculis ei eam.",
        links: [
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
          { label: 'Congue nominavi intellegebat', url: '/careers' },
        ],
      },
    ];
    return (
      <div className="CareersWrapper">
        <div className="PageHeader">
          <div className="PageName"><ColorText label={'ABOUT US & OUR VALUES'} /></div>
          <div className="PageTitle">Careers</div>
          <div className="PageDescription">Quaeque principes dignissim ex nam, an purto saperet mel. In mel ceteros albucius electram, sale hendrerit an has. Has an feugiat iracundia. Cu nominati temporibus mea. Dicat dicant referrentur sit ex, in mutat detraxit explicari mei.</div>
          <div className="PageMore"><i className="fa fa-arrow-down"></i></div>
        </div>
        <div className="Careers">
          <Container>
            <Row>
              {careers.map((career, index) => (
                <Col key={index} lg={12}>
                  <CareerItem data={career} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div className="UploadBenefits">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="form-title">
                  <div className="form-title-text">Upload CV:</div>
                  <div className="form-title-or">Or send resume to <a href="mailto:careers@nuvitek.com">careers@nuvitek.com</a> to apply.</div>
                </div>
                <div className="form-inputs">
                  <Input white required placeholder="Your Name" style={{height: '50px'}} />
                  <Input white required placeholder="Position" style={{height: '50px'}} />
                </div>
                <div className="upload-panel">
                  <div className="upload-filename">jonatandoe.pdf</div>
                  <div className="upload-button">ADD FILE</div>
                </div>
                <Button label="Submit" style={{marginBottom: '50px'}} />
              </Col>
              <Col lg={{size:6, offset: 0}} md={{size: 8, offset: 2}} sm={{size: 8, offset: 2}} xs={{size: 10, offset: 1}}>
                <div className="form-title">
                  <div className="form-title-text">Benefits:</div>
                </div>
                <div className="benefits-panel">
                  <div className="benefits-item">Medical Insurance</div>
                  <div className="benefits-item">Paid Time off</div>
                  <div className="benefits-item">Dental Insurance</div>
                  <div className="benefits-item">Paid Holidays</div>
                  <div className="benefits-item">Vision Care</div>
                  <div className="benefits-item">Time off for Tech Events</div>
                  <div className="benefits-item">401(k) Savings Plan</div>
                  <div className="benefits-item">Short-Time</div>
                  <div className="benefits-item">Long-term Disability</div>
                  <div className="benefits-item">Disability Group Life</div>
                  <div className="benefits-item">Performance Bonus</div>
                  <div className="benefits-item">Referral Bonus</div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Careers
