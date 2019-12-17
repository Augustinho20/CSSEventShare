import React, { Component } from 'react';
import '../assets/CSS/DescricaoEvento.css'
import CabecalhoSemBotao from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

class DescricaoEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventoIdProps: this.props.match.params.id,
      evento: {
        eventoId: '',
        eventoNome: '',
        eventoData: '',
        eventoHorarioComeco: '',
        eventoHorarioFim: '',
        eventoDescricao: '',
        eventoCategoriaId: '',
        eventoEspacoId: '',
        // criadorUsuario: '',
        // criadorUsuarioId: '',
        usuarioId: '',
        usuarioNome: '' ,
        eventoImagem: '',
        eventoLinkInscricao: '',
        listaUsuarios: [],
        criadorUsuario: {
          usuarioId: '',
          usuarioNome: '',
        }
      }
    }

    this.buscarEvento = this.buscarEvento.bind(this)
    // this.teste = this.teste.bind(this)
  }

  // teste(){
  //   console.log(this.state.eventoId)
  // }

  buscarEvento() {
    fetch('http://localhost:5000/api/eventotbl/evento/' + this.state.eventoIdProps)
      .then(resposta => resposta.json())
      .then(data => {
        console.log("Resposta do fetch: ", data)
        this.setState({ evento: data }, () => console.log("Evento do state: ", this.state.evento));
      })
      .catch((erro) => console.log(erro))
  }

  

  componentDidMount() {
    // this.teste()
    this.buscarEvento()
  }

  render() {

    return (
      <div>
        <CabecalhoSemBotao />
        <main className="main-descricao">
          <section className="secao-geral-descricao">
            <section className="container_descrição">
              <div className="esquerda_topo_descrição">
                <h1 className="h1_descrição">{this.state.evento.eventoNome}</h1>
              </div>
              <div className="usuario_descrição">
                <div className="imagem-usuario">
                  <img src={require("../assets/imagens/ÍconeUsuário.png")} alt="" />
                </div>
                <div className="nome-usuario-descrição-evento">
                  <p></p>
                </div>
              </div>
              <div className="descrição_descrição">
                <div className="imagem-evento">
                  <img src={require("../assets/imagens/Evento1.jpeg")} alt="" />
                </div>
                <div className="descricao-evento">
                  <p className="titulo-descrição">Detalhes</p>
                  <p>{this.state.evento.eventoDescricao}</p>
                </div>
              </div>
            </section>
            <section className="quadrado_forades">
              <div className="direita_topo_descrição">
                <div className="botao-inscrever-descricao-evento">
                  {/* <button onClick={() => window.location.replace></button> */}
                  
                <Link to={this.state.evento.eventoLinkInscricao} target="_blank">Me inscrever</Link>
                 {/* <Link to={'${{this.state.evento.eventoLinkInscricao}}'}>Me inscever</Link>
                 */}
                 {/* <a href={this.state.evento.eventoLinkInscricao}></a> */}
                </div>
                
              </div>
              <div className="info_descrição">
                <div className="textoinfo_descrição">
                  <div className="parte1_descrição">
                    <div className="data_descrição">
                      <div className="data_img-descrição">
                        <img src={require("../assets/imagens/clock.png")} alt="" />
                        <p>Data e Horário</p>
                      </div>
                      <div className="data-horario-descrição">
                        <Moment className='data-formato-home' format="DD/MM/YYYY">
                        {this.state.evento.eventoData}
                        </Moment>
                        <p>Das {this.state.evento.eventoHorarioComeco} as {this.state.evento.eventoHorarioFim}</p>
                      </div>
                    </div>
                  </div>
                  <div className="parte2_descrição">
                    <div className="local_descrição">
                      <div className="nome_local_img-descrição">
                        <img src={require("../assets/imagens/pin.png")} alt="" />
                        <p>Localização</p>
                      </div>
                      <div className="endereco_local_img-descrição">
                        <p>ThoughtWorks - Lounge</p>
                        <p>Av. Paulista 2300, Conjunto 41</p>
                        <p>São Paulo - SP</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="parte3_descrição">
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3279061044573!2d-46.66348088502224!3d-23.5566638846853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd6d0340c1%3A0xb82b9c6071314983!2sThoughtWorks!5e0!3m2!1spt-BR!2sbr!4v1574946138238!5m2!1spt-BR!2sbr"
                width="381.3" height="218" frameborder="0" style="border:0;" allowfullscreen=""/> */}
                </div>
              </div>
            </section>
          </section>
        </main>
        <Rodape />
      </div>
    );
  }
}

export default DescricaoEvento;