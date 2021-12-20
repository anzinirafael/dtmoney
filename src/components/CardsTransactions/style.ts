import styled, { css } from "styled-components";

interface Props {
  type: "total" | "others";
}

export const Container = styled.div<Props>`
  padding: 1.5rem 2rem;
  ${({ type }) =>
    type === "total"
      ? css`
          background: var(--green);
        `
      : css`
          background: var(--shape);
        `};
  border-radius: 0.25rem;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1rem;
      font-weight: 400;
      ${({ type }) =>
        type === "total"
          ? css`
              color: var(--shape);
            `
          : css`
              color: var(--title);
            `};
      margin-bottom: 0.625rem;
    }
    img {
      font-size: 2rem;
    }
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2.25rem;
    ${({ type }) =>
      type === "total"
        ? css`
            color: var(--shape);
          `
        : css`
            color: var(--title);
          `};
    ${({ type }) =>
      type === "total"
        ? css`
            font-weight: 500;
          `
        : css`
            font-weight: 400;
          `};
    line-height: 3rem;
  }
`;
