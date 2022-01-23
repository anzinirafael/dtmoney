import styled, { css } from "styled-components";

interface Props {
  selectTypeButtonDeposit: "deposit" | "withdraw";
}

export const Container = styled.div`  
    max-width: 1280px;
    display: block;
    margin: 0 auto;
    margin-top: 4rem;
  ;
`

export const HeaderTransactionsTable = styled.ul`
  max-width: 1280px;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 3.5fr 1fr 1fr 1fr;
  align-self: flex-start;
  color: var(--text);
  align-self: center;
  padding: 0 2rem;
  list-style: none;
`;


export const Content = styled.ul<Props>`
  max-width: 1280px;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 3.5fr 1fr 1fr 1fr;
  align-self: center;
  justify-self: center;
  border-radius: 0.25rem;
  align-self: center;
  background: var(--background);
  padding: 1rem 2rem;
  list-style: none;
  li {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    &.title {
      color: var(--title);
    }
    &.price {
      ${({ selectTypeButtonDeposit }) =>
        selectTypeButtonDeposit === "deposit"
          ? css`
              color: var(--green);
            `
          : css`
              color: var(--red);
            `};
    }
  }
`;


