import React, { Component } from 'react'; //importando objeto React 
import '../assets/CSS/AprovarEventosAdm.css';
import Cabecalho from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';


class AprovarEventosAdm extends Component {
    render() {
        return (
            <main>
                <Cabecalho />
                <section class="secao-geral-descricao2">

                    <section class="container_descrição2">

                        <div class="esquerda_topo_descrição2">
                            <h1 class="h1_descrição2">WAKANDA TALKS</h1>
                        </div>

                        <div class="usuario_descrição2">

                            <div class="imagem-usuario2">
                                <img src={require("../assets/imagens/perfil1.png")}
                                    alt="Logo da comunidade Nerdzão, um desenho de um cérebro rosa com um ocúlos de armação preta" />
                            </div>

                            <div class="nome-usuario-descrição2-evento">
                                <p>Thais Siqueira</p>
                            </div>

                        </div>

                        <div class="descrição2_descrição2">

                            <div class="imagem-evento2">
                                <img src={require("../assets/imagens/Evento1.jpeg")}
                                    alt="Banner do evento Nerdgirlz #22 - Panic! at the LINUX, com um fundo roxo." />
                            </div>

                            <div class="descricao2-evento">
                                <p class="titulo-descrição2">Detalhes</p>
                                <p>Data: 07/08/2019</p>
                                <p>Hora: 19h</p>
                                <p>Local do evento: ThoughtWorks São Paulo - Av Paulista, 2300, 4º andar</p>
                                <p>Talk 1: "De Java para Kotlin - primeiros passos de uma jornada possível no backend"</p>
                                <p>Palestrante: Rosi  Ailton</p>
                                <p>Talk 2: Saúde Mental</p>
                                <p>Palestrante: Jefferson Santos</p>
                                <p>Fishbowl: Qual o impacto das pequenas comunidades no movimento social negro?</p>
                                <p>Facilitadoras: Marylly  Ailton.</p>
                            </div>

                        </div>

                    </section>


                    <section class="quadrado_forades2">

                        <div class="direita_topo_descrição2">

                            <div class="botao-aprovar-descricao2-evento">
                                <a href="#">Aprovar Evento</a>
                            </div>

                            <div class="botao-recusar-descricao2-evento">
                                <a href="#">Recusar Evento</a>
                            </div>

                            <div class="botao-editar-descricao2-evento">
                                <a href="#">Editar Evento</a>
                            </div>



                        </div>

                        <div class="info_descrição2">

                            <div class="textoinfo_descrição2">

                                <div class="parte1_descrição2">

                                    <div class="data_descrição2">
                                        <div class="data_img-descrição2">
                                            <img src={require("../assets/imagens/clock.png")} alt="" />
                                            <p>Data e Horário</p>
                                        </div>

                                        <div class="data-horario-descrição2">
                                            <p>Dia 03 de setembro de 2019</p>
                                            <p>Das 10h00 às 13h00 </p>
                                        </div>

                                    </div>
                                </div>

                                <div class="parte2_descrição2">


                                    <div class="local_descrição2">

                                        <div class="nome_local_img-descrição2">
                                            <img src={require("../assets/imagens/pin.png")} alt="Pin de localização" />
                                            <p>Localização</p>
                                        </div>

                                        <div class="endereco_local_img-descrição2">
                                            <p>ThoughtWorks - Lounge</p>
                                            <p>Av. Paulista 2300, Conjunto 41</p>
                                            <p>São Paulo - SP</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <div class="parte3_descrição2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3279061044573!2d-46.66348088502224!3d-23.5566638846853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd6d0340c1%3A0xb82b9c6071314983!2sThoughtWorks!5e0!3m2!1spt-BR!2sbr!4v1574946138238!5m2!1spt-BR!2sbr"
                        width="381.3" height="218" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div> */}

                        </div>

                    </section>

                </section>
                <Rodape />
            </main>
        )
    }
}

export default AprovarEventosAdm;
