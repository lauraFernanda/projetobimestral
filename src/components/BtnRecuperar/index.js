import React from 'react'
import { Container } from "./styles.js";
import { Link } from "react-router-dom";

export default function BtnRecuperar(){
    return(
        <>
        <button><Link className="bt" to ="/Recuperar">Esqueceu a senha?</Link></button>
        </>
    );
}