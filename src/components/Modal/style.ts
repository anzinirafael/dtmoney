import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ModalContainer = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    margin: 7% 30%;
    background-color: var(--shape);
    width: 35%;
    border-radius: 0.40rem;
    div{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .close{
            border: none;
            background-color: transparent;
            position: fixed;
            margin-top: 2.5rem;
            margin-right: 0.8rem;
            transition: filter 0.2s;
            &:hover{
                filter: brightness(0.8);
            }
        }
    }
    section{
        padding: 4rem 3rem;
    }
    h1{
        font-size: 1.5rem;
        font-family: 'Poppins', 'sans-serif';
        font-weight: 600;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 1.25rem 1.50rem;
        margin-bottom: 1rem;
        background-color: var(--background);
        font-size: 16px;
        line-height: 1.5rem;
        border: solid 1px #d7d7d7;
        border-radius: 0.30rem;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        .income, .outcome{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 0.30rem;
            padding: 1.5rem 0;
            width: 49%;
            margin-right: 2%;
            border: solid 0.1px rgba(0,0,0, 0.3);
            background-color: var(--background);
            transition: filter font-weight 0.3s;
            
            img{
                margin-right: 1.5rem;
                font-size: 1.5rem;
            }
            p{
                color: var(--title);
                font-size: 1rem;
                line-height: 1.5rem;
            }
            &.outcome{
                margin-right: 0;
            }
            &:hover{
                filter: brightness(0.8);
                border: none;
                img{
                    font-weight: 600;
                }
                p{
                    font-weight: 600;
                }
            }
        }
    }
    .submit{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.25rem 0;
            width: 100%;
            background-color: var(--green);
            border-radius: 0.30rem;
            border: none;
            color: var(--shape);
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: 0.25rem;
            transition:  0.2s;
            &:hover{
                filter: brightness(0.75);
                font-weight: 600;
                border: solid 0.1px #d7d7d7;
            }
        }

`