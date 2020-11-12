import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../_context/office-context';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import noData from '../../../_context/state';

import Property from './property';
import User from './user';

const MainCont = styled.div`

`

export default ({ state })=> {
  
  return(
    <MainCont>
      <Container>
        <Row gutterWidth={0}>
          <Col xs={12} md={6}>
            <Property description={state} />
          </Col>
          <Hidden xs>
            <Col xs={6}>
              <User description={state} />
            </Col>
          </Hidden>
        </Row>
      </Container>
    </MainCont>
  )
}