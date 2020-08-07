import styled from 'styled-components';
import { hexToHsl } from '../../_utils';

const handleBackground = (props) => {
  if(props.outlined){
    return 'transparent';
  } else {
    if(props.primary){
      return props.theme.primaryColor;
    } else{
      return props.theme.secondaryColor;
    }
  }
}

const handleColor = props => {
  if(props.outlined){
    if(props.primary){
      return props.theme.primaryColor;
    } else {
      return props.theme.secondaryColor;
    }
  } else {
    if(props.primary){
      return '#fff';
    } else {
      return 'inherit';
    }
  }  
}

export default styled.button`
  font-size: .8rem;
  background-color: ${props => handleBackground(props)};
  padding: .8rem 1rem;
  width: ${props => props.block && '100%'};
  min-width: 9rem;
  border-style: solid;
  border-radius: 25px;
  border-color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  transition: background 250ms ease;
  cursor: pointer;
  outline: none !important;
  color: ${props => handleColor(props)};
  &:hover{
    color: ${props => props.primary ? '#fff' : '#212121'};
    background-color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 58) : props.theme.secondaryColor};
    border-color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 58) : hexToHsl(props.theme.secondaryColor, 97)};
  }
  &:active{
    background-color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 48) : hexToHsl(props.theme.secondaryColor, 97)}
  }
  &:disabled{
    background-color: #cfcfcf;
    border-color: #cfcfcf;
    color: #979797;
    cursor: not-allowed;
  }
  @media(min-width: 768px){
    font-size: 1rem;
    padding: .8rem 1.5rem;
  }  
`