import React, { Component } from 'react'
import CabecalhoSemBotao from '../components/CabecalhoSemBotao'
import '../assets/CSS/Login.css'
import Rodape from '../components/Rodape'
import { parseJwt } from '../services/auth';
import api from '../services/Api.js';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarioEmail: '',
      usuarioSenha: '',
      erroMensagem: "",
      isLoading: false
    }
    // this.props = {}
  }

    
    atualizaStateCampo = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    realizarLogin = (event) => {
        event.preventDefault();

        this.setState({isLoading: true});

        console.log(this.state.usuarioEmail);
        console.log(this.state.usuarioSenha);

        fetch("http://localhost:5000/api/Login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              UsuarioEmail: this.state.usuarioEmail,
              UsuarioSenha: this.state.usuarioSenha
            })
        }) 
        .then(response => response.json())
        .then(response => {
            console.log("Retorno do login - JSON: ", );

            // console.log("Minhas props: ", this.props);

            console.log("Nha: ", response.status)
            
            // if(response.status === 200){
            console.log("Nha")
            localStorage.setItem("usuario-eventshare", response.token);
            this.setState({ isLoading: false })
            console.log("O token é: ", response.token);

            var base64 = localStorage.getItem("usuario-eventshare").split('.')[1];

            console.log(base64)

            // console.log(parseJwt().Id);
            // }

            console.log()

            if (parseJwt().Role === 'Administrador') {
              this.props.history.push('/PerfilAdmAprovarEventos');
            }else{
              this.props.history.push('/PerfilUsuario');
            }
          
        })
        .catch(erro => {
            console.log("Erro: ", erro);
            // this.setState({ erroMensagem: "Email ou senha inválido" });
            this.setState({ isLoading: false })
        })    
    }
  
  render() {
    return (
      <div>
        <CabecalhoSemBotao />
        <section id="banner-login">
          <div className="texto-login">
            <h1>LOGIN</h1>
          </div>
        </section>
        <form onSubmit={this.realizarLogin.bind(this)}>
          <section className="login-pai botão_sub6">
            
            <input className="login-input" 
            type="email" 
            name="usuarioEmail" 
            id="" 
            placeholder="E-mail"
            value={this.state.usuarioEmail}
            onChange={this.atualizaStateCampo}
            />
            <input className="login-input" 
            type="password" name="usuarioSenha" 
            id="" placeholder="Senha"
            value={this.state.usuarioSenha}
            onChange={this.atualizaStateCampo}
            />
            <p style={{ color: 'red' }}>{this.state.erroMensagem}</p>

            <button 
            type="submit" 
            className="btn btn__login" 
            id="btn__login" 
            disabled={this.state.isLoading}>

              {this.state.isLoading === true ? <SyncLoader
                css={override}
                sizeUnit={"px"}
                size={10}
                color={'#fff'}
                loading={this.state.isLoading}
              /> : 'Entrar'}

            </button>


            {/* {
            this.state.isLoading === true &&
            <div className="item">
              <button type="submit" className="btn btn__login" id="btn__login" disabled>Loading...</button>
            </div>
          } */}
            {/* {
            this.state.isLoading === false &&
            <div className="item">
              <button type="submit" className="btn btn__login" id="btn__login">Login</button>
            </div>
          } */}
          </section>
        </form>
        <Rodape />
      </div>
    )
  }
}
export default Login;
