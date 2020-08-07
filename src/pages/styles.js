import React, { useEffect } from 'react';
import Layout from '../_layout';
import { Container, Row, Col } from 'react-grid-system';
import { Button, Link } from '../_components/buttons';
import { Input, Select } from '../_components/inputs';
import { ImageCard, ImageCardCarousel, TextCard, TextCardCarousel, QuoteCardCarousel } from '../_components/card';
import { data }from '../data-test';
console.log(data);
const propertyList = data.webOffice.home.properties.propertyList;

export default ()=> {
  return(
    <div style={{ backgroundColor: "#333", minHeight: "100vh" }}>
    <Layout>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Buttons</h1>
          </Col>
          <Col xs={12} md={6}>
            <h2>default</h2>
            <Button onClick={()=> console.log('default')}>Button</Button>
          </Col>                 
          <Col xs={12} md={6}>
            <h2>Primary</h2>
            <Button onClick={()=> console.log('primary')} primary>Button</Button>
          </Col>   
          <Col xs={12} md={6}>
            <h2>default outlined</h2>
            <Button onClick={()=> console.log('default')} outlined>Button</Button>
          </Col>                 
          <Col xs={12} md={6}>
            <h2>Primary outlined</h2>
            <Button onClick={()=> console.log('primary')} outlined primary>Button</Button>
          </Col>             
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12}>
            <h1>Buttons Link</h1>
          </Col>
          <Col xs={12} md={6}>
            <h2>default</h2>
            <Link onClick={()=> console.log('default')} outlined>Button</Link>
          </Col>                 
          <Col xs={12} md={6}>
            <h2>Primary</h2>
            <Link onClick={()=> console.log('primary')} outlined primary>Button</Link>
          </Col>   
        </Row>        
        <br />
        <br />
        <br />        
        <Row>
          <Col xs={12}>
            <h1>Inputs</h1>
          </Col>
          <Col xs={12}>
            <h2>Text</h2>
          </Col>         
          <Col xs={12} md={6}>
            <Input
              label="input text"
            />            
          </Col>
          <Col xs={12} md={6}>
            <Select
              options={["input select", "input select", "input select", "input select",]}
            />
          </Col>          
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12}><h1>Card</h1></Col>
          <Col xs={12} md={4}>
            <ImageCard {...propertyList[0]} />
          </Col>      
          <Col xs={12} md={6}>
            <TextCard {...data.webOffice.home.service[0]} />
          </Col>                
        </Row>              
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12} md={12}>
            <h1>Card Carousel images</h1>
            <ImageCardCarousel items={propertyList} />
          </Col>      
          <Col xs={12} md={12}>
            <h1>Card Carousel text</h1>
            <TextCardCarousel items={data.webOffice.home.service} />
          </Col>                
        </Row>              
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12} md={12}>
            <h1>Quote Carousel</h1>
            <QuoteCardCarousel items={data.webOffice.home.reviews} />
          </Col>        
        </Row>              
        <br />
        <br />
        <br />                        
      </Container>      
    </Layout>
    </div>
  )
}