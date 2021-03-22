import React, {Fragment} from 'react';
import ig from '../ig.png'
import wpp from '../wpp.png'

const Footer = () => {
    return(
        <Fragment>
            <div className="container-fluid mt-5" style={{backgroundColor: "#e6d2d2"}}>
                <footer className="pie-pag">
                    <label htmlFor="">Instagram:</label>
                    <a href="https://www.instagram.com/fikauy/">
                        <img src={ig} className="recursosIMG" alt="@fikauy - fika alfajores - fika uruguay - alfajores gourmet - fika uy - instagram - fika instagram"/>
                    </a>
                    <label className="ml-4" htmlFor="">WathsApp:</label>
                    <a href="#-WHATSAPP">
                        <img src={wpp} className="recursosIMG" alt="@fikauy - fika alfajores - fika uruguay - alfajores gourmet - fika uy - whatsapp - fika whatsapp"/>
                    </a>
                </footer>
            </div>
        </Fragment>
    )
}

export default Footer;