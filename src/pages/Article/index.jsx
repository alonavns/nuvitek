import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Button, Input, ColorText } from 'components/_Common'
import { BlogItem, ReplyItem } from 'components/Blog'
import blogImage1 from 'assets/images/home/blog-item.png'
import writerImage1 from 'assets/images/home/blog-writer.png'

class Article extends Component {
  render() {
    const blogs = [
      {
        category: 'Technology',
        name: 'Make Myspace Your Best Designed Space',
        description: 'You’ve felt it. Your organic content doesn’t have the same reach on social media anymore…',
        comments: 2,
        photo: blogImage1,
        writer: writerImage1,
      },
      {
        category: 'Technology',
        name: 'Make Myspace Your Best Designed Space',
        description: 'You’ve felt it. Your organic content doesn’t have the same reach on social media anymore…',
        comments: 2,
        photo: blogImage1,
        writer: writerImage1,
      },
      {
        category: 'Technology',
        name: 'Make Myspace Your Best Designed Space',
        description: 'You’ve felt it. Your organic content doesn’t have the same reach on social media anymore…',
        comments: 2,
        photo: blogImage1,
        writer: writerImage1,
      },
    ];
    const replies = [
      { photo: writerImage1, name: 'Maiki Krotes', date: '05/09/2018', text: 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper.'},
      { photo: writerImage1, name: 'Maiki Krotes', date: '05/09/2018', text: 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper.', children: [
        { photo: writerImage1, name: 'Maiki Krotes', date: '05/09/2018', text: 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper.'},
      ]},
      { photo: writerImage1, name: 'Maiki Krotes', date: '05/09/2018', text: 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper.'},
    ];
    return (
      <div className="ArticleWrapper">
        <div className="PageHeader">
          <Container>
            <Row>
              <Col lg={12}>
                <ColorText label="TECHNOLOGY" />
                <div className="PageTitle">A Discount Toner Cartrige Is Better Than Ever And You Will Save 50 Or Morw</div>
              </Col>
            </Row>
            <Row className="WriterInfo">
              <Col lg={12}>
                <img src={writerImage1} alt="" />
                <p className="WriterName">Marvin Figueroa</p>
              </Col>
            </Row>
            <Row className="ArticleInfo">
              <Col lg={12}>
                <div className="CommentsCount"><i className="fa fa-commenting"></i> 3 comments</div>
                <div className="WriteDate"><i className="fa fa-calendar"></i> 2 days ago</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ArticleContainer">
          <Container>
            <Row>
              <Col lg={2}>
                <div className="ArticleSocials">
                  <div className="ArticleLikes">25</div>
                  <div className="ArticleLikeIcon"><i className="fa fa-heart"></i></div>
                  <div className="ArticleSocialLinks">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                  </div>
                </div>
              </Col>
              <Col lg={8} md={12} className="ArticleContent">
                <p>Nei esse natum te. Cu aeterno probatus omittantur mel, consul possit his ex, eu qui putent eripuit meliore. No simul regione pro, ei dictas facilisi mei. Ut sea mundi rationibus, dolorum accommodare et pri.</p>
                <p>Per nobis altera ullamcorper ne. At usu errem numquam principes. Errem prompta expetenda ne mei, vidit mutat et eum. Sit ex eligendi partiendo contentiones, sonet noster maiestatis est cu, maiorum postulant ea ius.</p>
                <img src="https://placeimg.com/640/480/any" />
                <p>Facete nostrud eos et, no vim oporteat dignissim, pri at tale nominavi. Luptatum dignissim dissentiunt ea quo, at per epicuri lucilius referrentur. Ea vix mazim debitis incorrupte, has ne saperet splendide elaboraret. No adhuc qualisque vim, his ludus nostro forensibus an. Primis inermis ius ne, mel senserit accusamus democritum te, ne unum sensibus interpretaris quo. His et diam debitis, ut eam elit natum.</p>
                <p className="highlight">“Civibus nominavi pericula cu pro. Vis atqui propriae at. Has dicant utroque sapientem eu, in error splendide mel”</p>
                <p>Lorem ipsum dolor sit amet, iuvaret perfecto adipisci ne pro, vis ex gubergren referrentur. Et exerci graecis definiebas sit, an diam posse persecuti ius, mei natum sonet salutatus cu. Purto suscipit electram ne eos, tation philosophia ut sed, pro ne malis congue. Eligendi salutandi contentiones usu no, in sit detracto molestiae forensibus. Pro ne accusata accusamus dignissim, ne inimicus constituto vituperatoribus vis.</p>
                <p>Vix incorrupte ullamcorper ut. At pro stet nobis, ei detracto consequuntur vel. Ei putant commodo scaevola eam. An salutandi suscipiantur sed.</p>
                <Row>
                  <Col lg={6}>
                  <img src="https://placeimg.com/480/600/any" />
                  </Col>
                  <Col lg={6}>
                  <ul>
                    <li>The Skinny On Lcd Monitors</li>
                    <li>Video Games Playing With Imagination</li>
                    <li>For Women Only Your Computer Usage Could Cost You Your Job</li>
                    <li>Are You Ready To Buy A Home Theater Audio System</li>
                    <li>WordPress Version 2 0 3 Review</li>
                  </ul>
                  <p>Facete nostrud eos et, no vim oporteat dignissim, pri at tale nominavi. Luptatum dignissim dissentiunt ea quo, at per epicuri lucilius referrentur. Ea vix mazim debitis incorrupte, has ne saperet splendide elaboraret. No adhuc qualisque vim, his ludus nostro forensibus an.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="MightLikes">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="MightLikesTitle">
                You might also like ...
                </div>
              </Col>
            </Row>
            <Row>
              {blogs.map((blog, index) => (
                <Col key={index} lg={4}>
                  <BlogItem data={blog} likebtn />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div className="Replies">
          <Container>
            <Row>
              <Col lg={{size: 8, offset:2}} md={12}>
              <div className="RepliesHeader">
                <div className="RepliesTitle">4 Replies added</div>
                <div className="RepliesSorts">
                  <span className="actived">Newest</span>
                  <span>Oldest</span>
                </div>
              </div>
              {replies.map((reply, index) => (
                <div key={index} className="ReplyItemContainer">
                  <ReplyItem data={reply} />
                  {reply.children && reply.children.map((child, cindex) => (
                    <ReplyItem key={cindex} data={child} />
                  ))}
                </div>
              ))}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="YourComment">
          <Container>
            <Row>
              <Col lg={{size: 8, offset:2}} md={12}>
                <Row>
                  <Col lg={6} md={12}>
                    <Input placeholder="Display Name" white required style={{ height: 50, marginBottom: 15 }} />
                    <Input placeholder="Email Address" white required />
                    <p className="description"><i className="fa fa-info-circle"></i> (will not be shared)</p>
                  </Col>
                  <Col lg={6} md={12}>
                    <textarea placeholder="Comment text ..." value="" />
                  </Col>
                  <Col lg={6} md={12}>
                    <Button label="SEND NOW" style={{ height: 50, lineHeight: '50px' }} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Article
