import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --text: #969CB2;
        --title: #363F5F;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33cc95;
        --red: #E52E4D;
        --shape: #ffffff;
        --background-input: #e7e9ee;
        --color-border: #d7d7d7;
    }   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-overlay-modal{
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
    }
    .react-modal{
        background-color: var(--shape);
        width: 100%;
        max-width: 576px;
        border-radius: 0.25rem;
        padding: 3rem;
        position: relative;
    }
`;
