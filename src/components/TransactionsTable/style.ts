import styled, { css } from "styled-components";

interface Props {
  selectTypeButtonDeposit: "deposit" | "withdraw";
}

export const Container = styled.tr<Props>`
  max-width: 1128px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  border-radius: 0.25rem;
  align-self: center;
  background: var(--background);
  padding: 1rem 2rem;
  td {
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
