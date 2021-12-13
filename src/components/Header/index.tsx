import React, {useState} from 'react';
import logo from "./../../assets/logo.svg";
import {
    Container,
    Content,
    ModalContainer
} from './style';
import { Modal } from './../Modal';

export function Header(){   
    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal(){
        setOpenModal(true);
    }

    function handleCloseModal(){
        setOpenModal(false);
    }

    return(
        <>
            <Container>
                <Content> 
                    <img src={logo}/>
                    <button onClick={handleOpenModal}>
                        Nova Transação
                    </button>
                </Content>
            </Container>
            <ModalContainer isOpen={openModal}>
                <Modal onClick={handleCloseModal}/>
            </ModalContainer>z
        </>
    )
}