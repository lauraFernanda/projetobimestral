import React from 'react'
import { Container } from "./styles.js";
import { Link } from "react-router-dom";

export default function BtnCadastro(){
    return(
        
        <>
        <button><Link className="bt" to ="/Cadastro">Cadastrar</Link></button>
        </>
        
    );
}