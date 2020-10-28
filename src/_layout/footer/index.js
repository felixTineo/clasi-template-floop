import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import OfficeContext from '../../_context/office-context';
import { Container, Row, Col, Visible } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Footer = styled.footer`
  
`
const MainFooter = styled.div`
  padding: 4rem 0;
`
const FooterRightsCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.secondaryColor};
  padding: 2rem 0;
  @media(min-width: 768px){
    padding: .5rem 0;
  }  
`
const OfficeInfoCont = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  list-style: none;
`
const OfficeInfo = styled.li`
  color: #8E8787;
  margin-bottom: .5rem;
`
const FooterRights = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media(min-width: 768px){
    flex-direction: row;
    align-items: center;
  }    
`
const NavCont = styled.div`
  margin: 2rem 0;
  @media(min-width: 768px){
    margin: 0;
  }      
`
const NavLink = styled(Link)`
  color: #212121;
  transition: 250ms ease;
  text-decoration: none;
  font-weight: bold;
  @media(min-width: 768px){
    display: block;
    text-align: center;
  }
  &:hover{
    color: ${props => props.theme.main.primaryColor} !important;
  }
  &:visited{
    color: #212121;
  }
`
const SvgIcon = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
  ${Button}:hover & {
    fill: ${props => props.theme.main.secondaryColor};
  }
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  //color: ${props => props.theme.main.primaryColor};
  display: flex;
  align-content: center;
  margin-bottom: 1rem;
`

const SocialItem = styled.li`
  margin-left: .5rem;
`

const Logo = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 180px;
`

const HeaderTitle = styled.h1`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1rem;
  font-weight: bold;
`
 

export default ()=> {
  const office = useContext(OfficeContext).office;
  const state = useContext(OfficeContext);
  return(
    <Footer>
      <MainFooter>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
                <a href="/">
                    {
                      state.main.logo.isImage
                        ?<Logo src={state.main.logo.value} alt="logo" />
                        :<HeaderTitle>{state.main.logo.value}</HeaderTitle>
                    }
                </a>
              </GatsbyLink>
              <OfficeInfoCont>
                <OfficeInfo>
                  {office.address}
                </OfficeInfo>
                <OfficeInfo>
                  {`${office.phone.countryCode} ${office.phone.areaCode} ${office.phone.phoneNumber} / ${office.mobile.countryCode} ${office.mobile.areaCode} ${office.mobile.phoneNumber}`}
                </OfficeInfo>
                <OfficeInfo>
                  {office.email}
                </OfficeInfo>
              </OfficeInfoCont>
            </Col>
            <Col xs={12} md={4}>
              <NavCont>
                <Row>
                  <Col xs={6} md={4}>
                    <NavLink to="/about">
                      Nosotros
                    </NavLink>
                  </Col>
                  <Col xs={6} md={4}>
                    <NavLink to="/properties">
                      Propiedades
                    </NavLink>                  
                  </Col>
{/*                  <Visible xs={true} md={false}>
                    <Col xs={6} md={3}>
                      <NavLink to="/news">  
                        Noticias
                      </NavLink>                  
                    </Col>
                  </Visible>*/}
                  <Col xs={6} md={4}>
                    <NavLink to="/contact">
                      Contacto
                    </NavLink>                  
                  </Col>                                          
                </Row>
              </NavCont>
            </Col>
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12}>
                  <SocialNav>
                    <li>Siguenos en</li>
                    <SocialItem style={{ marginLeft: "1rem" }}>
                      <a href="https://www.facebook.com">
                        <SvgIcon width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                          <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm0.91016 6h2.6328v2.9805h-1.9355c-0.3833 0-0.76953 0.39326-0.76953 0.68555v1.957h2.7012c-0.1087 1.5007-0.33203 2.873-0.33203 2.873h-2.3828v8.5039h-3.5527v-8.5059h-1.7285v-2.8613h1.7285v-2.3398c0-0.42786-0.087828-3.293 3.6387-3.293z" />
                        </SvgIcon>
                      </a>
                    </SocialItem>
                    <SocialItem>
                      <a href="https://www.instagram.com">
                        <SvgIcon width="29" height="29" fill="none" version="1.1" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                          <path d="m14.457 0a14.5 14.5 0 0 0-14.457 14.5 14.5 14.5 0 0 0 14.5 14.5 14.5 14.5 0 0 0 14.5-14.5 14.5 14.5 0 0 0-14.5-14.5 14.5 14.5 0 0 0-0.042969 0zm-2.916 6h6.6504c3.0602 0 5.543 2.4808 5.543 5.541v6.6504c0 3.0602-2.4828 5.543-5.543 5.543h-6.6504c-3.0603 0-5.541-2.4828-5.541-5.543v-6.6504c0-3.0603 2.4808-5.541 5.541-5.541zm0 1.6621c-2.1392 0-3.8789 1.7397-3.8789 3.8789v6.6504c0 2.1392 1.7397 3.8809 3.8789 3.8809h6.6504c2.1392 0 3.8809-1.7417 3.8809-3.8809v-6.6504c0-2.1392-1.7417-3.8789-3.8809-3.8789h-6.6504zm3.3262 2.7715c2.4484 0 4.4336 1.9852 4.4336 4.4336 0 2.4484-1.9852 4.4336-4.4336 4.4336-2.4484 0-4.4336-1.9852-4.4336-4.4336 0-2.4484 1.9852-4.4336 4.4336-4.4336zm0 1.6621c-1.5273 0-2.7715 1.243-2.7715 2.7715 0 1.5273 1.2442 2.7715 2.7715 2.7715 1.5273 0 2.7715-1.2442 2.7715-2.7715 0-1.5285-1.2442-2.7715-2.7715-2.7715z"/>
                        </SvgIcon>
                      </a>
                    </SocialItem>     
                  </SocialNav>
                </Col>
                <Col xs={12}>
                  <Button outlined primary block>
                    <SvgIcon width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
                    </SvgIcon>
                      <span>{`${office.phone.countryCode} ${office.phone.areaCode} ${office.phone.phoneNumber}`}</span>
                  </Button>                 
                </Col>              
              </Row>
            </Col>                    
          </Row>
        </Container>      
      </MainFooter>
      <FooterRightsCont>
        <Container>
          <FooterRights>
            <li>2020 © Todos los derechos reservados</li>
            <li>Desarrollado por <a href="https://clasihome.com/" target="_blank">Clasihome</a></li>
          </FooterRights>
        </Container>
      </FooterRightsCont>
      
    </Footer>
  )
}