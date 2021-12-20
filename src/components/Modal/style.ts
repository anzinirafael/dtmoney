import styled from "styled-components";

export const Container = styled.form`
  button.close {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
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
    margin-bottom: 1rem;
    background-color: var(--background-input);
    border: solid 1px var(--color-border);
    font-size: 16px;
    line-height: 1.5rem;
    border-radius: 0.3rem;
    &::placeholder {
      color: var(--text);
    }
  }
  button.submit {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 0;
    width: 100%;
    background-color: var(--green);
    border-radius: 0.3rem;
    border: none;
    color: var(--shape);
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.25rem;
    transition: 0.2s;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
      font-weight: 600;
      border: solid 0.1px var(--color-border);
    }
  }
`;
