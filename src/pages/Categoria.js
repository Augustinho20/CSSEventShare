import React from "react";
import "../assets/CSS/Categoria.css";
// import Api from "../services/Api";
import Cabecalho from "../components/CabecalhoBotao";
import Rodape from "../components/Rodape";
import { Component } from "react";
// import ModalEditarCategoria from '../components/ModalEditarCategoria'

class Categoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaCategoria: [],
      categoriaNome: "",
      categoriaId: "",
      loading: false,
      erroMsg: "",
      modal: false,
      editarModal: {
        categoriaId: "",
        categoriaNome: ""
      }
    };
    this.cadastrarCategoria = this.cadastrarCategoria.bind(this);
    this.buscarCategorias = this.buscarCategorias.bind(this);
  }

  // //ADD TOGGLE
  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  buscarCategorias() {
    //setar state loading
    this.setState({ loading: true });

    fetch("http://localhost:5000/api/categoria")
      .then(resposta => resposta.json())
      .then(data => {
        this.setState({ listaCategoria: data });
        //setar state do loading
        this.setState({ loading: false });
      })
      .catch(error => {
        //setar state do loading
        this.setState({ loading: false });
        console.log(error);
      });
  }

  cadastrarCategoria(event) {
    event.preventDefault();
    console.log("Cadastrando");

    fetch("http://localhost:5000/api/categoria/", {
      method: "POST",
      body: JSON.stringify({ categoriaNome: this.state.categoriaNome }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resposta => {
        if (resposta.status === 200) {
          console.log("Categoria cadastrada");
        }
      })
      .catch(error => console.log(error))
      .then(this.buscarCategorias);
  }



    deletarCategoria = (id) => {
    console.log("Excluindo categoria");

    fetch("http://localhost:5000/api/categoria/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })

      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.buscarCategorias();//atualizar categorias
        this.setState(() => ({ listaCategorias: this.state.listaCategorias }))
      })
      .catch(error => {
        console.log(error)
        this.setState({ erroMsg: "Não foi possivel excluir, verifique se não há evento já cadastrado nessa categoria" })
      })
    }



  atualizaEstadoTitulo(event) {
    this.setState({ categoriaNome: event.target.value });
  }



  componentDidMount() {
    this.buscarCategorias();
  }

  render() {
    return (
      <div>
        <Cabecalho />
        <main className="pai-de-tudo">
          <section class="secao-add-categoria">
            <form
              className="formulario-input-categoria"
              onSubmit={this.cadastrarCategoria}
            >
              <div>
                <input
                  type="text"
                  name="nome-categoria"
                  id="add-categoria"
                  value={this.state.categoriaNome}
                  onChange={this.atualizaEstadoTitulo.bind(this)}
                />
              </div>

              <div class="botao-add-categoria">
                <button>Adicionar</button>
              </div>
            </form>
          </section>

          <section className="section-main-categoria">
            <section className="section-container-categoria">
              <section className="section-lista-categorias">
                {this.state.listaCategoria.map(
                  function(categoria) {
                    return (
                      <section className="section-minicard-categoria">
                        <div
                          key={categoria.categoriaId}
                          className="div-minicard-nome-categoria"
                        >
                          <p>{categoria.categoriaNome}</p>
                        </div>
                        <div class="div-editar-deletar-categoria">               
                          <div key={categoria.categoriaId}>
                            <button
                              onClick={e => this.deletarCategoria(categoria.categoriaId)}
                              className="botao-editar-excluir-categoria"
                            >
                              <img
                                src={require("../assets/imagens/cross.png")}
                                alt="excluir categoria"
                                class="deletes"/>
                                
                             
                            </button>
                          </div>
                        </div>
                      </section>
                    );
                  }.bind(this)
                )}

                {/* <ModalEditarCategoria/> */}
              </section>
            </section>
          </section>
        </main>

        <Rodape />
      </div>
    );
  }
}

export default Categoria;