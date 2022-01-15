import { prependOnceListener } from "process";
import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`

  h2 {
    font-size: 1.5rem;
    font-family: "Poppins", "sans-serif";
    font-weight: 600;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--background-input);
    border: solid 1px var(--color-border);
    font-size: 16px;
    line-height: 1.5rem;
    border-radius: 0.25rem;
    &::placeholder {
      color: var(--text);
    }
    & + input{
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    background-color: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
      border: solid 0.1px var(--color-border);
    }
  }
`;

export const ContainerForms = styled.form`
  
`

export const CheckBoxButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
 
`

interface PropsRadioBox{
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: "#12A454",
  red: "#E52E4D"
}

export const RadioBox = styled.button<PropsRadioBox>`
    height: 4rem;
    width: 49%;
    border-radius: 0.25rem;
    border: solid 1px var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: border-color 0.2s;
    background: ${({isActive, activeColor}) => isActive ? transparentize(0.7, colors[activeColor]) : 'transparent'};
    & + button{
      margin-left: 2%;
    }
    img{
      margin-right: 1rem;
      width: 1.75rem;
      height: 1.75rem;
    }
    span{
      font-size: 1rem;
      color: var(--title);  
    }
    &:hover{
      border-color: var(--border-hover);
    }
`