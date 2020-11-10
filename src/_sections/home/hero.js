import React, { useContext, useState, useReducer, useCallback } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import OfficeContext from '../../_context/office-context';
import { Button } from '../../_components/buttons';
import { Input, Select } from '../../_components/inputs';
import { useWindowSize } from '../../_hooks';
import noData from '../../_context/state';
import PROPERTY_TYPES from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { LoadingOutlined } from '@ant-design/icons';
import { navigate } from 'gatsby';

const HeroCont = styled.div`
  position: relative;
  height: calc(100vh - 67px);
  overflow: hidden;
  color: #fff;
  @media(min-width: 768px){
    height: calc(100vh - 89px);
  }  
`
const HeroImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.theme.home.hero.background ? props.theme.home.hero.background : '/hero.jpg'});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  &::after{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)), linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5));
  }
  z-index: -1;
`
const HeroContent = styled.div`
  height: calc(100vh - 89px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroTitle = styled.h1`
  font-weight: lighter;
  font-family: "open sans";
  text-align: center;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 2.5rem;
  }
`
const ButtonsCont = styled.div`
  @media(min-width: 768px){
   width: 50%;
  }  
`
const SearchForm = styled.form`
  width: 100%;
  margin: 2rem;
  @media(min-width: 768px){
   margin-top: 5rem;
  } 
`
const CodeForm = styled.form`
  width: 70%;
  margin: 2rem;
  @media(min-width: 768px){
   margin-top: 5rem;
  } 
`
const StyledButton = styled(Button)`
  color: ${props => props.active ? "#4E4B46" : "#fff"};
  background-color: ${props => props.active ? "#fff" : "transparent"};
`

export default ()=> {
  const hero = useContext(OfficeContext).home.hero;
  const state = useContext(OfficeContext);
  const size = useWindowSize();
  const [byCode, setByCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useReducer((current, next) => ({ ...current, ...next }),{
    operation: '',
    propertyType: '',
    commune: '',
  });

  const handleSearch = useCallback(e => {
    setSearch({ [e.target.id]: e.target.value });    
  },[]);

  const onSubmit = useCallback(async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const { operation, propertyType, commune } = search;
      const data = await fetch(`https://api.clasihome.com/rest/properties?typeId=office&id=${state.office}&operation=${operation}&propertyType=${propertyType}&commune=${commune}&status=PUBLICADA`);
      const result = await data.json();
      setLoading(false);
      console.log(result);
      navigate(`/properties?id=${state._id}`, { state: { ...result, search } });
    }
    catch(e){
      console.log(e);
      setLoading(false);
    }
  });

  return(
    <HeroCont>
      <HeroImg />
      {console.log(search)}
      <Container>
        <HeroContent>
          <HeroTitle>
            {hero.title ?  hero.title : noData.home.hero.title}
          </HeroTitle>
          <ButtonsCont>
            <Row>
              <Col xs={6}>
                <StyledButton
                  outlined
                  block
                  active={!byCode}
                  onClick={()=> setByCode(false)}
                >
                    Buscar propiedad
                </StyledButton>
              </Col>
              <Col xs={6}>
                <StyledButton
                  outlined
                  block
                  active={byCode}
                  onClick={()=> setByCode(true)}
                >
                  Buscar por código
                </StyledButton>
              </Col>              
            </Row>
          </ButtonsCont>
          {
            byCode 
            ?(
              <CodeForm onSubmit={e => e.preventDefault()} className="animate__animated animate__fadeInUp">
                  <Row align="center">
                    <Col xs={12} md={9}>
                      <Input
                        label="Ingrese el código de la propiedad"
                        id="operation"
                      />
                    </Col>              
                    <Col xs={12} md={3}>
                      <Button primary block>
                        Buscar
                        <img src="/search.svg" style={{ marginLeft: 8 }} />
                      </Button>                
                  </Col> 
                </Row>                           
              </CodeForm>
            )
             :(
          <SearchForm onSubmit={onSubmit} className="animate__animated animate__fadeInUp">
            <Row align="center">
              <Col xs={12} md={3}>
                <Select
                  id="operation"
                  onChange={handleSearch}
                  default="Operación"
                  options={["venta", "arriendo"]}
                  values={["VENTA", "ARRIENDO"]}
                />
              </Col>
              <Col xs={12} md={3}>
                <Select
                  default="Propiedad"
                  id="propertyType"
                  onChange={handleSearch}
                  options={PROPERTY_TYPES.map(type => type.toLocaleLowerCase())}
                  values={PROPERTY_TYPES}
                />
              </Col>
              <Col xs={12} md={3}>
                <Select
                  default="Comuna"
                  id="commune"
                  onChange={handleSearch}
                  options={COMMUNES.map(commune => commune.name)}
                  values={COMMUNES.map(commune => commune.name)}
                />
              </Col>
              <Col xs={12} md={3}>
                  <Button primary block disabled={loading}>
                    Buscar
                    {
                      !loading
                      ?(
                        <img src="/search.svg" style={{ marginLeft: 8 }} />
                      )
                      :(
                        <LoadingOutlined spin style={{ marginLeft: 8 }}/>
                      )
                    }
                  </Button>                
              </Col>                                          
            </Row>
          </SearchForm>              
            )
          }
        </HeroContent>
      </Container>
    </HeroCont>
  )
}