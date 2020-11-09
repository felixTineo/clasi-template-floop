import styled from 'styled-components';
import { hexToHsl } from '../../_utils';

export default styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  cursor: pointer;
  transition: 250ms ease;
  &:hover{
    color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 58) : hexToHsl(props.theme.secondaryColor, 58)};
    text-decoration: underline;
  };
  &:active{
    color: ${props => props.primary ? hexToHsl(props.theme.primaryColor, 48) : hexToHsl(props.theme.secondaryColor, 48)};
  }
`