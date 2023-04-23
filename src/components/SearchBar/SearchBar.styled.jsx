import styled from "styled-components";

export const Form = styled.form`
display: flex;
gap: 24px;
justify-content: center;
`

export const Input = styled.input`
width: 320px;
height: 28px;
border-radius: 12px;
padding-left: 12px;
font-size: 16px;

::placeholder {
  color: #202020;
  font-size: 1.2em;
}

`

export const Button = styled.button`
width: 120px;
background-color: #FA7800;
border: none;
border-radius: 8px;
`

export const ButtonName = styled.span`
font-size: 16px;
color: #f5f5f5;
`