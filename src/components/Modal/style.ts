import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalContainer = styled(ReactModal)`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Container = styled.form`
  background-color: var(--shape);
  width: 100%;
  max-width: 576px;
  border-radius: 0.4rem;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .close {
      border: none;
      background-color: transparent;
      position: fixed;
      margin-top: 2.5rem;
      margin-right: 0.8rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  section {
    padding: 4rem 3rem;
  }
  h1 {
    font-size: 1.5rem;
    font-family: "Poppins", "sans-serif";
    font-weight: 600;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    background-color: #e7e9ee;
    font-size: 16px;
    line-height: 1.5rem;
    border: solid 1px #d7d7d7;
    border-radius: 0.3rem;
    &::placeholder {
      color: var(--text);
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    .income,
    .outcome {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 0.3rem;
      padding: 1.5rem 0;
      width: 49%;
      margin-right: 2%;
      border: solid 0.1px rgba(0, 0, 0, 0.3);
      background-color: var(--background);
      transition: filter font-weight 0.3s;
      img {
        margin-right: 1.5rem;
        font-size: 1.5rem;
      }
      p {
        color: var(--title);
        font-size: 1rem;
        line-height: 1.5rem;
      }
      &.outcome {
        margin-right: 0;
      }
      &:hover {
        filter: brightness(0.8);
        border: none;
        img {
          font-weight: 600;
        }
        p {
          font-weight: 600;
        }
      }
    }
  }
  .submit {
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
      filter: brightness(0.75);
      font-weight: 600;
      border: solid 0.1px #d7d7d7;
    }
  }
`;
