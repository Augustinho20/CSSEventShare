import React, { Component } from 'react'
import '../assets/CSS/CabecalhoBotao.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoBotao extends Component {
    render(){
        return(
            <div className="">
                <header>
        <section id="cabecalho-padrao">
            <div className="itens-cabecalho-padrao">

                <div className="logo-eventshare-cabecalho-padrao">
                    <a href="/">
                        <img src={Logo} alt="Logo do projeto Eventshare"/>
                    </a>
                </div>


                <div className="menu-cabecalho-padrao">
                    <nav className="menu">

                        <ul>
                            <li>
                                <a href="/CriarEvento1" id="btns-menu-cabecalho-padrao">Publicar evento</a>
                            </li>
                        </ul>

                        <ul>

                            <li>
                                <a href="/">Sair</a>
                            </li>
                        </ul>

                    </nav>
                </div>

            </div>
        </section>
    </header>

            </div>
        )
    }
}

export default CabecalhoBotao

