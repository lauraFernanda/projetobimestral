import React from 'react'
import InputEmail from '../../components/InputEmail'
import InputNome from '../../components/InputNome'
import InputSenha from '../../components/InputSenha'
import BtnCadastro from '../../components/BtnCadastro'
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
            <Container>
                <div>
                <h1>Cadastro</h1><br/>  
                <InputNome /><br/> 
                <InputEmail /> <br/>
                <InputSenha /><br/>
                <BtnCadastro /><br/>
                <button><Link className="bt" to ="/">Voltar</Link></button>
                </div>
                
            </Container>

    )
}