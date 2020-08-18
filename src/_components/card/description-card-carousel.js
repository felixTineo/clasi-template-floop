import React from 'react';
import Card from './description-card';
import Slider from "react-slick";
import styled from 'styled-components';
import { hexToHsl } from '../../_utils';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarCont = styled.div`
  margin-right: 0px;
  position: relative;
  @media(min-width: 768px){

  }
`

const PrevArrow = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  left: -32px;
  height: 2.5rem;
  padding-right: .5rem;
  width: 2.5rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  transition: 250ms ease;
  
  &:hover{
    background-color: ${props => props.theme.main.primaryColor};
  }
  &::before{
    
  }
`

const NextArrow = styled.div`
  background-color: ${props => props.theme.primaryColor};
  right: -32px;
  height: 2.5rem;
  padding-right: .5rem;
  width: 2.5rem;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;                 
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  transition: 250ms ease;  
  &:hover{
    background-color: ${props => props.theme.main.primaryColor};
  }
`
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive:[
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default ({ items })=> {
    
  return (
    <div>
      <Slider {...settings}>
        {
          items.map((item, index) => (
            <div>
              <CarCont index={index}>
                <Card key={index} {...item} />
              </CarCont>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}