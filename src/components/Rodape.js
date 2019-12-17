import React, { Component } from 'react';
import '../assets/CSS/Rodape.css'
import LogoTW from '../assets/imagens/LogoTW.png'
import LogoES from '../assets/imagens/LogoEventShare.png'
import facebook from '../assets/imagens/iconeFacebook.png'
import youtube from '../assets/imagens/iconeYoutube.png'
import instagram from '../assets/imagens/iconeInstagram.png'


class Rodape extends Component {
    render() {
        return (
            <div className='Rodape'>

                <footer>
                    <section id="rodape-padrao">
                        <div className="itens-rodape-padrao">

                            <div className="lado-esquerdo-rodape-padrao">
                                <div className="logo-tw-rodape-padrao">
                                    <img src={LogoTW} alt="" />
                                </div>
                                <div className="logo-eventshare-rodape-padrao">
                                    <img src={LogoES} alt="" />
                                </div>
                                <div className="email-contato-rodape-padrao">
                                    <p>Contato: info-br@thoughtworks.com</p>
                                </div>
                            </div>

                            <div className="lado-direito-rodape-padrao">

                                <div className="seguir-rodape-padrao">
                                    <p>Siga-nos</p>
                                </div>

                                <div className="logos-redes-sociais-rodape-padrao">

                                    <div className="logo-facebook">
                                        <a href="#">
                                            <img src={facebook} alt="Logo da rede social Facebook" />
                                        </a>
                                    </div>

                                    <div className="logo-youtube">
                                        <a href="#">
                                            <img src={youtube} alt="Logo da plataforma de vídeos Youtube" />
                                        </a>
                                    </div>

                                    <div className="logo-instagram">
                                        <a href="#">
                                            <img src={instagram} alt="Logo da rede social Instagram " />
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </section>
                </footer>


            </div>
        )
    }
}
export default Rodape