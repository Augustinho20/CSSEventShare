import React, { Component } from 'react'; //importando objeto React 
import '../assets/CSS/Cadastro.css';
import Api from '../services/Api';
import Cabecalho from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';


class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioNome: '',
      usuarioEmail: '',
      usuarioComunidade: '',
      usuarioSenha: ''
    }
  }

  CadastroUsuario = async (event) => {
    event.prevenDefault();
    var response = await Api.post("/cadastro", {
      usuarioNome: this.state.usuario_nome,
      usuarioEmail: this.state.usuario_email,
      usuarioComunidade: this.state.usuario_comunidade,
      usuarioSenha: this.state.usuario_senha
    });
    if (response.data.status === "ok") {
      this.setState({ response: "Usuário cadastrado com sucesso com sucesso" })
    } else {
      this.setState({ response: "Erro ao criar usuário" })
    }
  }

  render() {

    return (
      <div>
        <body>
          <main>
            <Cabecalho />
            <section id="banner-cadastro">
              <div className="texto-banner-cadastro">
                <h1>CRIE SUA CONTA</h1>
              </div>
            </section>
            <section className="cadastro - pai-cadastro">
              <form className="form_cadastro" onSubmit={(event) => this.CadastroUsuario(event)}>
                <input className="input-cadastro" type="text" name="nome" id="" placeholder="Nome completo" onChange={event => this.setState({ usuarioNome: event.target.value })} />
                <input className="input-cadastro" type="text" name="email" id="" placeholder="E-mail de comunidade" onChange={event => this.setState({ usuarioEmail: event.target.value })} />
                <input className="input-cadastro" type="text" name="Comunidade" id="" placeholder="Comunidade" onChange={event => this.setState({ usuarioComunidade: event.target.value })} />

                <input className="input-cadastro" type="text" name="Senha" id="" placeholder="Senha*" onChange={event => this.setState({ usuarioSenha: event.target.value })} />
                <span>*Minimo de 8 caracteres</span>

                <input className="input-cadastro" type="text" name="Confirmar senha" id="" placeholder="Confirmar senha" />
              </form>
              <button className="button-cadastro">Enviar</button>
            </section>
            <Rodape/>
          </main>
        </body>
      </div>

    );
  }
}
export default Cadastro;