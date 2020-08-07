import React, { useEffect, useState, Fragment, useContext } from 'react';
import OfficeContext from '../../_context/office-context';
import styled from 'styled-components';
import { hexToHsl } from '../../_utils';
import { Responsive as ResponsiveButton } from '../../_components/buttons';
import { Container } from 'react-grid-system';
import { Button, Link } from '../../_components/buttons';
import { gsap } from 'gsap';

const navTexts = ["Nosotros", "Propiedades", "Noticias", "Contacto"];

const Header = styled.header`
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 1500;
`
const RateCont = styled.div`
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  display: none;
  @media(min-width: 768px){
    display: block;
  }  
`
const RateContResponsive = styled(RateCont)`
  display: block;
`

const RateBar = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const RateItem = styled.li`
  color: ${props => props.theme.secondaryColor};
  margin-left: .5rem;
  font-weight: bold;
  user-select: none;
  @media(min-width: 768px){
    margin-left: 1rem;
  }    
`
const NavCont = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ResponsiveNav = styled.nav`
  background-color: ${props => props.theme.primaryColor};
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 0;
`
const ResponsiveNavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
`

const NavOption = styled.button`
  color: ${props => props.theme.secondaryColor};
  background-color: transparent;
  border: none;
  transition: 250ms ease;
  font-size: 2rem;
  margin-bottom: 1rem;
  &:active{
    color: ${props => hexToHsl(props.theme.secondaryColor, 50)}
  }
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${props => props.theme.secondaryColor};
  display: flex;
`

const SocialItem = styled.li`
  margin-left: .5rem;
`
const PhoneIcon = styled.svg`
  fill: ${props => props.theme.primaryColor};
  //width: 10rem;
`
//DESKTOP NAV
const DesktopNav = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  @media(min-width: 768px){
    display: flex;
  } 
`
const DesktopNavOption = styled.li`
  margin-left: 2.5rem;
`
const NavLink = styled.a`
  color: #212121;
  transition: 250ms ease;
  text-decoration: none;
  &:hover{
    color: ${props => props.theme.primaryColor} !important;
  }
  &:visited{
    color: #212121;
  }
`

export default ({ props })=> {
  const [menu, setMenu] = useState(false);
  const office = useContext(OfficeContext).webOffice.office;
  useEffect(()=> {
    if(menu){
      gsap.to("#responsive-nav", { duration: .25, x: "-100%" });
    }else {
      gsap.to("#responsive-nav", { duration: .25, x: "100%" });
    }
  },[menu])
  return(
      <Header>
      <RateCont>
        <Container>
        <RateBar>
          <RateItem>
            UF $758759 /
          </RateItem>
          <RateItem>
            UTM $758759 /
          </RateItem>
          <RateItem>
            Dólar $758759
          </RateItem>                    
        </RateBar>
        </Container>
      </RateCont>              
        <Container>
          <NavCont>
            <a href="/home">
              <img src={office.logo} alt={office.title}/>
            </a>
            <DesktopNav>
              <DesktopNavOption>
                <NavLink href="#about">
                  Nosotros
                </NavLink>
              </DesktopNavOption>
              <DesktopNavOption>
                <NavLink href="#properties">
                  Propiedades
                </NavLink>
              </DesktopNavOption>
              <DesktopNavOption>
                <NavLink href="#news">
                  Noticias
                </NavLink>
              </DesktopNavOption>
              <DesktopNavOption>
                <NavLink href="#contact">
                  Contacto
                </NavLink>
              </DesktopNavOption>
              <DesktopNavOption>
                <Link ink primary>
                  <PhoneIcon width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
                  </PhoneIcon>
                  <span>{` ${office.phone.countryCode} ${office.phone.areaCode} ${office.phone.number}`}</span>
                </Link>
              </DesktopNavOption>                                                        
            </DesktopNav>
            <ResponsiveButton onClick={()=> setMenu(!menu)} visible={menu} />
          </NavCont>     
        </Container>
        <ResponsiveNav id="responsive-nav">
          <RateContResponsive>
            <Container>
              <RateBar>
                <RateItem style={{ marginLeft: "0 !important" }}>
                  UF $758759 -
                </RateItem>
                <RateItem>
                  UTM $758759 -
                </RateItem>
                <RateItem>
                  Dólar $758759
                </RateItem>                    
              </RateBar>
            </Container>            
          </RateContResponsive>
          <ResponsiveNavUl>
            {
              navTexts.map((option, index) => (
                <li key={index}>
                  <NavOption id={`nav-option-${index}`}>{option}</NavOption>
                </li>
              ))
            }
          </ResponsiveNavUl>
          <Button outlined >
            <img src="phone.svg" alt="phone" style={{ marginRight: ".5rem" }} />
            <span>{` ${office.phone.countryCode} ${office.phone.areaCode} ${office.phone.number}`}</span>
          </Button>
          <SocialNav>
            <li>Siguenos en</li>
            <SocialItem>
              <a href="https://www.facebook.com">
                <img src="/facebook.svg" alt="facebook" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="https://www.instagram.com">
                <img src="/instagram.svg" alt="instagram" />
              </a>
            </SocialItem>     
          </SocialNav>
        </ResponsiveNav>
      </Header>
  )
}