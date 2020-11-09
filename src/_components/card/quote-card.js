import React from 'react';
import styled from 'styled-components';

const CardQuote = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`

const ReviewCont = styled.div`
  width: 80%;
  @media(min-width: 768px){
    width: 50%;
  }  
`

const Review = styled.p`
  text-align: center;
  @media(min-width: 768px){
    margin: 0 2rem;
  }
`

const User = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 5rem 0;
`
const MarkQuote = styled.svg`
  fill: ${props => props.theme.primaryColor};
  width: 2rem;
  flex-shrink: 1;
  flex-grow: 0;
  @media(min-width: 768px){
    width: 10rem;
  }  
  
`

export default ({ review, author })=> {

  return(
    <CardQuote>
      <MarkQuote width="64" height="49" fill="none" version="1.1" viewBox="0 0 64 49" xmlns="http://www.w3.org/2000/svg">
        <path d="m29 0c-4.2676 16.562-7.5975 32.895-9.99 49h-17.846l-1.1639-2.1517c1.4225-5.8683 3.718-13.171 6.8863-21.908 3.1683-8.7372 6.563-17.051 10.184-24.94h11.93zm29.267 25.38c-1.8948 9.4219-3.2596 17.295-4.0946 23.62h-17.728l-1.4452-2.1517c3.5969-14.019 9.3134-29.635 17.15-46.848h11.85c-1.9269 7.4983-3.8378 15.958-5.7326 25.38z" clip-rule="evenodd"/>
      </MarkQuote>
      <ReviewCont>
      <Review>
        {review}
      </Review>
      <User>
        {author}
      </User>
      </ReviewCont>
      <MarkQuote width="64" height="49" fill="none" version="1.1" viewBox="0 0 64 49" xmlns="http://www.w3.org/2000/svg">
        <path d="m35 49c4.2676-16.562 7.5975-32.895 9.99-49h17.846l1.1639 2.1517c-1.4225 5.8683-3.7179 13.171-6.8863 21.908-3.1683 8.7372-6.563 17.05-10.184 24.94h-11.93zm-29.267-25.38c1.8948-9.4219 3.2597-17.295 4.0947-23.62h17.728l1.4452 2.1517c-3.5969 14.019-9.3134 29.635-17.15 46.848h-11.85c1.9269-7.4983 3.8378-15.958 5.7326-25.38z" clip-rule="evenodd" />
      </MarkQuote>      
    </CardQuote>
  )
}