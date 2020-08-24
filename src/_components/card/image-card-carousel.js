import React from 'react';
import Card from './image-card';
import Slider from "react-slick";
import styled from 'styled-components';
import { hexToHsl } from '../../_utils';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarCont = styled.div`
  margin-right: 0px;
  position: relative;
  @media(min-width: 768px){
    margin: .5rem;
  }
`

const PrevArrow = styled.div`
  background-color: #DDDDDD;
  left: -32px;
  height: 2.5rem;
  padding-right: .5rem;
  width: 2.5rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);                            
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  transition: 250ms ease;
  
  &:hover{
    background-color: ${props => hexToHsl(props.theme.main.primaryColor, 58)};
  }
  &::before{
    
  }
`

const NextArrow = styled.div`
  background-color: #DDDDDD;;
  right: -32px;
  height: 2.5rem;
  padding-right: .5rem;
  width: 2.5rem;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);                            
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  transition: 250ms ease;
  
  &:hover{
    background-color: ${props => hexToHsl(props.theme.main.primaryColor, 58)};
  }
  &::before{
    
  }
`
const DotsCont = styled.ul`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.main.primaryColor};
`
const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  //appendDots: dots => <DotsCont>{dots}</DotsCont>,
  //customPaging: () =>  <li>&#9679;</li>,
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