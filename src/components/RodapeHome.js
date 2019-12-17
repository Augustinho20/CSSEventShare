import React, { Component } from 'react';
import '../assets/CSS/RodapeHome.css'
import LogoTW from '../assets/imagens/LogoTW.png'
import LogoES from '../assets/imagens/LogoEventShare.png'
import facebook from '../assets/imagens/iconeFacebook.png'
import youtube from '../assets/imagens/iconeYoutube.png'
import instagram from '../assets/imagens/iconeInstagram.png'


class RodapeHome extends Component {
    render() {
        return (
            <div className='Rodape'>

                <footer>
                    <section id="rodape-home">
                        <div className="itens-rodape-home">

                            <div className="lado-esquerdo-rodape-home">
                                <div className="logo-tw-rodape-home">
                                    <img src={LogoTW} alt="" />
                                </div>
                                <div className="logo-eventshare-rodape-home">
                                    <img src={LogoES} alt="" />
                                </div>
                                <div className="email-contato-rodape-home">
                                    <p>Contato: info-br@thoughtworks.com</p>
                                </div>
                            </div>

                            <div className="lado-direito-rodape-home">

                                <div className="seguir-rodape-home">
                                    <p>Siga-nos</p>
                                </div>

                                <div className="logos-redes-sociais-rodape-home">

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
export default RodapeHome