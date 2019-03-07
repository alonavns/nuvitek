import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Button, Input } from 'components/_Common'
import { BlogItem } from 'components/Blog'
import headerImage from 'assets/images/home/blog-header.png'
import blogImage1 from 'assets/images/home/blog-item.png'
import writerImage1 from 'assets/images/home/blog-writer.png'

class Blog extends Component {
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
    return (
      <div className="BlogWrapper">
        <div className="PageHeader">
          <Container>
            <Row>
              <Col lg={6} md={12}>
                <div className="PageTitle">Ideas, opinions and stories</div>
                <div className="PageDescription">Eu quo nemore prompta elaboraret. Vix inani doming definitiones ei, ne fuisset ullamcorper vel. Diam debitis ne vis, quot fabulas per te. Sonet accusamus eam te.</div>
              </Col>
              <Col lg={6} md={12}>
                <img src={headerImage} />
              </Col>
            </Row>
            <div className="Options">
              <div className="Search">
                <Input placeholder="Search" style={{height: '40px'}} />
                <div className="SearchBtn"><i className="fa fa-search"></i></div>
              </div>
              <div className="Subscribes">
                <span className="SubscribeTitle">Subscribe</span>
                <span>
                <span className="Subscribe">All</span>
                <span className="Subscribe actived">Most Recent</span>
                <span className="Subscribe">Recommended</span>
                <span className="Subscribe">Trendy</span>
                </span>
              </div>
            </div>
          </Container>
        </div>
        <div className="BlogList">
          <Container>
            <Row>
              {blogs.map((blog, index) => (
                <Col key={index} lg={4}>
                  <BlogItem data={blog} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col lg={12} className="align-center">
                <Button label="Load More" green />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Blog
