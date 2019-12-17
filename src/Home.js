import React, { Component } from 'react';
import './Home.css';
import Moment from 'react-moment';
import 'moment-timezone';
import Cabecalho from './components/CabecalhoSemBotao.js'
import RodapeHome from './components/RodapeHome.js'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEventos: [],
      listaFiltradaDeEventos: [],
      ListaDataFiltrada: [],
      listaCategorias: [],
      eventoId: '',
      eventoNome: '',
      eventoData: '',
      eventoDescricao: '',
      eventoImagem: '',
      data: '',
      loading: false,
      categoria: '',
      categoriaId: '',
      categoriaNome: '',
      listaFiltroCategorias: '',
      eventoEspaco: '',
      eventoEspacoId: '',
      espacoNome: '',
      eventoHorarioComeco: '',
      eventosFiltrados: [],
      valorA: '',
      indice: true,
      indiceGeral: 4,
      eventoStatusId: ''

    }
    this.buscarEvento = this.buscarEvento.bind(this)
    this.buscarCategorias = this.buscarCategorias.bind(this)
    this.updateStateData = this.updateStateData.bind(this)
  }

  toggleFiltro(event) {
    let id = event.target.value
    this.filtrarCategorias(id)
  }

  filtrarCategorias(id) {
    console.log('Entramos em filtrar categoria o id é: ' + id)
    var listaEventos = this.state.listaEventos

    var listaFiltrada = listaEventos.filter((value, index, arr) => {
      if (listaEventos[index].eventoCategoriaId == id) {
        return listaEventos[index]
      }
    })

    this.setState({
      listaFiltradaDeEventos: listaFiltrada
    })
  }

  toggleIndice() {
    console.log("Inverteu o valor do indice.")
    this.setState({ indice: !this.state.indice }, () => this.mudarIndice());
  }

  componentDidMount() {
    this.buscarEvento()
    this.buscarCategorias()
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

  buscarCategorias() {
    this.setState({ loading: true })

    fetch('http://localhost:5000/api/categoria')
      .then(resposta => resposta.json())
      .then(data => this.setState({ listaCategorias: data }))
      .catch((erro) => console.log(erro))
  }

  updateStateData(event) {
    this.setState({ data: event.target.value })
    console.log(this.state.data)
  }

  mudarIndice() {
    let tamanhoLista = this.state.listaFiltradaDeEventos
    console.log(tamanhoLista.length)

    if (this.state.indice === false) {
      this.setState({ indiceGeral: tamanhoLista.length })
    } else {
      this.setState({ indiceGeral: 4 })
    }
  }




  render() {

    return (
      <div classNameName="Home">
        <Cabecalho />
        <main className="main-home">

          <section id="banner-home">
            <div className="banner-texto-home">
              <h1>Eventos</h1>
              <p>Agende o seu aqui</p>
              <a className='botaoPublicar' href="/CriarEvento">Publicar Evento</a>
            </div>
          </section>

          <section id="eventos-home">

            <div className="filtro-home">
              <div className="filtro-caixas-home">
                <div className="filtro-categorias-data-home">

                  <select onChange={this.toggleFiltro.bind(this)} value='value-select' id='id-select' className="filtro-categorias-home" >
                    <option id="" selected>Selecione uma categoria</option>
                    {
                      this.state.listaCategorias.map(function (categoria) {
                        return <option value={categoria.categoriaId} key={categoria.categoriaId} name="teste">{categoria.categoriaNome}</option>
                      })
                    }
                  </select>

                  <input onChange={this.updateStateData} value={this.state.data} id='data' className="filtro-data-home" type="date" />
                </div>
              </div>
              <div className="filtro-botão-home">
                <button type='submit' className="filtro-botão-input-home" >Filtrar</button>
              </div>
            </div>

            <div className="eventos-home">
              {
                this.state.listaFiltradaDeEventos ?
                  this.state.listaFiltradaDeEventos.slice(0, this.state.indiceGeral).map(evento => {
                    if (evento.eventoStatusId === 1) {
                      return (
                        // <a href="#">

                        <div onClick={() => {window.location.href = '/DescricaoEvento/' + evento.eventoId}} key={evento.eventoId} className="evento-1-home">
                          {/* <button onClick={
                              () => {
                              window.location.href = '/DescricaoEvento/' + evento.eventoId
                                }
                          }>Teste</button> */}
                          <div className="evento-um-home">
                            <img src={require("./assets/imagens/Evento1.jpeg")} alt="" className="evento-imagem-home" />
                            <div className="evento-nome-data-hora-local-home">
                              <div className="evento-nome-home">
                                <p>{evento.eventoNome}</p>
                              </div>
                              <div className="evento-data-hora-local-home">
                                <div className="data-evento-home">
                                  <p>Data:</p>
                                  <Moment class='data-formato-home' format="DD/MM/YYYY">
                                    {evento.eventoData}
                                  </Moment>
                                </div>
                                <div class="hora-evento-home">
                                  <p class='horario-bold-home'>Horário:</p>
                                  <p>{evento.eventoHorarioComeco}</p>
                                </div>
                                <div className="espaco-evento-home">
                                  <p className='espaco-home'>Local:</p>
                                  <p>{evento.eventoEspaco.espacoNome}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        // </a> 
                      )
                    }
                  }) : null
              }
            </div>

            <section id="secao-botao-ver-mais-home">
              {
                this.state.indice === true &&
                <button onClick={this.toggleIndice.bind(this)} type='submit' className="botao-ver-mais-home">Ver mais</button>
              }
              {
                this.state.indice === false &&
                <button onClick={this.toggleIndice.bind(this)} type='submit' className="botao-ver-mais-home">Ver menos</button>
              }
            </section>

          </section>

          <section id="FAQ-home">
            <div className="FAQ-conteudo-home">
              <div className="FAQ-texto-home">
                <p>Você possui dúvidas?</p>
                <p>Acesse nossa central de ajudas.</p>
              </div>
              <div className="FAQ-botão-home">
                <a href="/FAQ">Saiba Mais</a>
              </div>
            </div>
          </section>

        </main>
        <RodapeHome />
      </div>
    );
  }
}



export default Home;
