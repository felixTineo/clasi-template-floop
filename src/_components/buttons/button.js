import styled from 'styled-components';
import { hexToHsl } from '../../_utils';

const handleBackground = (props) => {
  if(props.outlined){
    return 'transparent';
  } else {
    if(props.primary){
      return props.theme.primaryColor;
    } else{
      return "#ffffff";
    }
  }
}

const handleColor = props => {
  if(props.outlined){
    if(props.primary){
      return props.theme.primaryColor;
    } else {
      return "#ffffff";
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
  background-color: ${props => handleBackground(props)};
  //padding: .8rem 1rem;
  width: ${props => props.block && '100%'};
  min-width: 9rem;
  height: 47.59px;
  border-style: solid;
  border-radius: ${props => props.noRound ? '0' : '25px'};
  border-color: ${props => props.primary ? props.theme.primaryColor : "#ffffff"};
  transition: background 250ms ease;
  cursor: pointer;
  outline: none !important;
  color: ${props => handleColor(props)};
  &:hover{
    color: ${props => props.primary ? '#fff' : '#212121'};
    background-color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 58) : "#ffffff"};
    border-color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 58) : hexToHsl("#ffffff", 97)};
  }
  &:active{
    background-color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 48) : hexToHsl("#ffffff", 97)}
  }
  &:disabled{
    cursor: not-allowed;
    color: rgba(255, 255, 255, .7);
  }
  @media(min-width: 768px){
    font-size: 1rem;
    //padding: .8rem 1.5rem;
  }  
`