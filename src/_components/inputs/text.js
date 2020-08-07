import React, { useState } from 'react';
import styled from 'styled-components';
//import Label from './label';
import { gsap } from 'gsap';

const Label = styled.label`
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1rem;
  margin-left: .3rem;
  margin-bottom: 1rem;
`

const FloatingLabel = styled.span`
  position: absolute;
  bottom: .3rem;
  left: 0;
`

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 0 .6rem .3rem;
  color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
`

export default (props)=> {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
    if(props.onChange){
      props.onChange(e.target.value);
    }
  }

  const onFocus = ()=> {
    gsap.to("#floating-label", { duration: .5, y: "-1.5rem", ease: "back.out(3)" });
  }

  const onBlur = ()=> {
    if(!value){
      gsap.to("#floating-label", { duration: .5, y: 0, fontSize: '1rem' });
    }
  }

  return(
    <Label primary={props.primary} htmlFor={props.id}>
      <FloatingLabel id="floating-label">
        {props.label}
      </FloatingLabel>
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        onChange={onChange}
        {...props}
      />
    </Label>
  )
}