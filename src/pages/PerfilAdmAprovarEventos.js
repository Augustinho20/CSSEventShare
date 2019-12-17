import React, { Component } from "react";
import '../assets/CSS/PerfilAdmAprovarEventos.css';
import Api from '../services/Api';
import Cabecalho from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import TopoPerfil from '../components/TopoPerfil';
import Moment from 'react-moment';
import 'moment-timezone';

class PerfilAdmAprovarEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEventos: [],
      listaCategorias: [],
      listaStatus: [],
      eventoNome: '',
      categoriaId: '',
      categoriaNome: '',
      eventoStatusId: '',
      eventoStatusNome: ''
    }
  }

  buscarEvento() {
    fetch('http://localhost:5000/api/eventotbl')
      .then(resposta => resposta.json())
      .then(data => this.setState({
        listaEventos: data,
        listaFiltradaDeEventos: data,
        ListaDataFiltrada: data
      }))
      .catch((erro) => console.log(erro))
  }

  toggleFiltro(event) {
    let id = event.target.value
    this.filtrarStatus(id)
    // console.log(id)
  }

  filtrarStatus(id) {
    console.log('Entramos em filtrar status o id é: ' + id)
    var listaEventos = this.state.listaEventos

    var listaFiltrada = listaEventos.filter((value, index, arr) => {
      if (listaEventos[index].eventoStatusId == id) {
        return listaEventos[index]
      }
    })

    this.setState({
      listaFiltradaDeEventos: listaFiltrada
    })
  }


  buscarStatus() {
    this.setState({ loading: true })

    fetch('http://localhost:5000/api/status')
      .then(resposta => resposta.json())
      .then(data => this.setState({ listaStatus: data }))
      .catch((erro) => console.log(erro))
  }

  componentDidMount() {
    this.buscarEvento()
    this.buscarStatus()
  }

  render() {
    return (
      <div>
        <Cabecalho />
        <TopoPerfil />

        <main class="main-aprovar-eventos">
          <section class="titulo-aprovar-eventos">
            <h1>Aprovar Eventos</h1>
          </section>
          <div className="filtro-status-data-aprovar">

            <select onChange={this.toggleFiltro.bind(this)} value='value-select' id='id-select' className="filtro-status-aprovar" >
              <option id="" selected>Selecione um status</option>
              {
                this.state.listaStatus.map(function (status) {
                  return <option value={status.eventoStatusId} key={status.eventoStatusId} name="teste">{status.eventoStatusNome}</option>
                })
              }
            </select>
          </div>


          <section id="eventos-aprovar-eventos">
            <div class="eventos-menor-aprovar-eventos">
              {
                this.state.listaFiltradaDeEventos ?
                  this.state.listaFiltradaDeEventos.map(function (evento) {
                    return (
                      <a onClick={() => {window.location.href = '/DescricaoEventoAdm/' + evento.eventoId}}>
                        <div key={evento.eventoId} className="evento-1-aprovar">
                          <div className="evento-um-aprovar">
                            <img src={require("../assets/imagens/Evento1.jpeg")} alt="" className="evento-imagem-aprovar" />
                            <div className="evento-nome-data-hora-local-aprovar">
                              <div className="evento-nome-aprovar">
                                <p>{evento.eventoNome}</p>
                              </div>
                              <div className="evento-data-hora-local-aprovar">
                                <div className="data-evento-aprovar">
                                  <p>Data:</p>
                                  <Moment class='data-formato-aprovar' format="DD/MM/YYYY">
                                    {evento.eventoData}
                                  </Moment>
                                </div>
                                <div class="hora-evento-aprovar">
                                  <p class='horario-bold-aprovar'>Horário:</p>
                                  <p>{evento.eventoHorarioComeco}</p>
                                </div>
                                <div className="espaco-evento-aprovar">
                                  <p className='espaco-aprovar'>Local:</p>
                                  <p>{evento.eventoEspaco.espacoNome}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>

                    )
                  }) : null
              }

            </div>
            <section id="secao-botao-ver-mais-perfil-adm-aprovar-eventos">
              
            </section>
          </section>
        </main>
        <Rodape />
      </div>
    );
  }
}

export default PerfilAdmAprovarEvento;

