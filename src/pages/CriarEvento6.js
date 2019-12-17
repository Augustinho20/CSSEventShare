import React, { Component } from 'react';
import '../assets/CSS/CriarEvento6.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento6 extends Component {
  render() {
    return (
      <div classNameName='CriarEvento6'>
        <Cabecalho/>
        <main>

          <div className="banner-criar-evento-6"></div>

          <section className="conteudo-criar-evento-6">

            <section className="criar-evento-6">

              <div className="container-criar-evento-6">
                <div className="texto-criar-evento-6">
                  <p>Sua proposta será enviada ao administrador, você receberá a resposta pelo e-mail cadastrado.
                </p>
                </div>
              </div>

              <div className="botao-pai-criar-evento-6">
                <a href="#" className="botao-criar-evento-6">Continuar</a>
              </div>

            </section>

          </section>

        </main>
        <Rodape/>
      </div>
    )
  }
}

export default CriarEvento6;