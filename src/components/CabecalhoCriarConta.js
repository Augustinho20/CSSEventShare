import React, { Component } from 'react'
import '../assets/CSS/CabecalhoSemBotao.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoCriarConta extends Component {
    render() {
        return (
            <div className="">
                <header>
                    <section id="cabecalho-CriarConta">
                        <div class="itens-cabecalho-CriarConta">

                            <div class="logo-eventshare-cabecalho-CriarConta">
                                <a href="/">
                                    <img src={Logo} alt="Logo do projeto Eventshare1" />
                                </a>
                            </div>

                            <div class="menu-cabecalho-CriarConta">
                                <nav class="menu1">
                                    <ul>
                                        <li>
                                            <a href="/Cadastro">Criar Conta</a>
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

export default CabecalhoCriarConta