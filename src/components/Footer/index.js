/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { BarFooter } from "./styled";

export default function Footer(){
    return (
        <BarFooter>
            <p><a href='https://github.com/renanleitev'>Renan Leite Vieira</a></p>
            <p>@</p>
            <p>Projeto desenvolvido em <a href='https://pt-br.reactjs.org/'>React</a> com uso do <a href='https://github.com/typicode/json-server'>JSON Server</a></p>
        </BarFooter>
    )
}