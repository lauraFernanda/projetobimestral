import React from 'react'
import InputEmail from '../../components/InputEmail'
import InputSenha from '../../components/InputSenha'
import BtnAcesso from '../../components/BtnAcesso'
import BtnCadastro from '../../components/BtnCadastro'
import BtnRecuperar from '../../components/BtnRecuperar'

import { Container } from "./styles";
import { Link } from "react-router-dom";


export default function Autentica() {
    return (
        <Container>

           <div>
               <h1>Autenticação</h1><br/>
            <InputEmail /><br/>
            <InputSenha /><br/>
            <BtnAcesso /><br/> 
            <BtnCadastro /><br/>
            <BtnRecuperar />
           
           </div>
        </Container>    
    )
};