import React from 'react'
import InputEmail from '../../components/InputEmail'
import InputSenha from '../../components/InputSenha'
import BtnRecuperar from '../../components/BtnRecuperar'
import {  Container } from "./styles";

import { Link } from "react-router-dom";

export default function Recuperar() {
    return(
        <Container>
        <div>
        <h1>Recuperando</h1>
        <h1 className="senha">sua Senha</h1>
        <InputEmail /><br/>
       <button type="button">Enviar</button><br/>
       <button><Link className="bt" to ="/">Voltar</Link></button>
        </div>
        </Container>        
    )
}