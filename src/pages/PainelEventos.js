import React, { Component } from 'react';
import '../assets/CSS/PainelEventos.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'
import TopoPerfil from '../components/TopoPerfil';
import Moment from 'react-moment';
import { parseJwt } from '../services/auth';
import { thisExpression } from '@babel/types';
import Axios from 'axios';
import Api from '../services/Api';
import { link } from 'fs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

class PainelEventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: '',
      listaEventos: [],
      eventoEspaco: '',
      espacoNome: '',
      eventoNome: '',
      eventoId: '',
      eventoData: '',
      eventoHorarioComeco: '',
      eventoHorarioFim: '',
      eventoStatus: '',
      eventoStatusNome: '',
      quantidadeEventos: '',
      usuario: parseJwt().UserId,
      criadorUsuarioId: ''
    }

    this.mudarDisplay = this.mudarDisplay.bind(this)
    this.buscarEventosUsuario = this.buscarEventosUsuario.bind(this)
    // this.buscarEvento = this.buscarEvento.bind(this)
  }

  mudarDisplay() {
    var element = document.getElementsById("edit");
    element.classList.add("hidden");
  }

  buscarEventosUsuario() {
    console.log("id é:" + this.state.usuario)
    Api.get('eventotbl/perfilusuario/' + this.state.usuario)
      .then(dados => this.setState({
        listaEventos: dados.data
      }))
      .catch((erro) => console.log(erro))
  }

  // buscarEvento() {
  //   fetch('http://localhost:5000/api/eventotbl')
  //     .then(resposta => resposta.json())
  //     .then(data => this.setState({ 
  //                                     listaEventos: data
  //                                 }))
  //     .catch((erro) => console.log(erro))
  // }

  componentDidMount() {
    // this.buscarEvento();
    this.buscarEventosUsuario();
  }

  render() {
    return (
      <div className="PainelEventos">
        <Cabecalho />
        <TopoPerfil />
        <div>
          <main className="main-perfilU">

            {

              <section className="container-perfilU">
                <div className="texto-perfilU">
                  <h2>Painel de Eventos</h2>
                  <p>{this.state.listaEventos.length} Eventos</p>
                </div>
                <div className="display-perfilU">
                  {
                    this.state.listaEventos.map(event => {
                      console.log(this.state.listaEventos.length)
                      return (


                        <div className="painel-perfilU" key={event.eventoId}>

                          <div className="esquerda-perfilU">
                            <h3>{event.eventoNome}</h3>
                            <img src={require("../assets/imagens/wakanda.png")} alt="Imagem do evento" />
                        </div>

                        <div className="direita-perfilU">
                          <Link to={"/EditarEventoUsuario"}>
                            <div className="editar-perfilU">
                              {event.eventoStatus.eventoStatusNome === 'Aguardando Aprovação' ? (<Link onClick={() =>{
                                window.location.href = '/EditarEventoUsuario/' + event.eventoId}
                              } >Editar Evento</Link>) : (this.mudarDisplay)}
                            </div>
                          </Link>

                          <div className="box-perfilU">
                            <h3>Data: <Moment format="DD/MM/YYYY">
                              {event.eventoData}
                            </Moment>
                            </h3>
                          </div>

                          <div className="box-perfilU">
                            <p>Início: {event.eventoHorarioComeco}</p>
                            <p>Fim: {event.eventoHorarioFim}</p>
                          </div>

                          <div className="box-perfilU">
                            <h3>Local:</h3>
                            <p>{event.eventoEspaco.espacoNome}</p>
                          </div>

                          <div className="box-perfilU">
                            <h3>Status:
                                </h3>
                            <div className="status-perfilU">
                              <p>{event.eventoStatus.eventoStatusNome}</p>
                              {/* <div className="circulo-perfilU"></div> */}
                            </div>
                          </div>

                        </div>
                        </div>

                )
              })
            }
                  {/* <!--fim painel--> */}

                </div>
              </section>

          }

          </main>

      </div>
      <Rodape />
      </div >
    );
  }
}

export default PainelEventos;