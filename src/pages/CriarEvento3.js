import React, { Component } from 'react';
import '../assets/CSS/CriarEvento3.css'
import lugar1 from '../assets/imagens/reuniao-sub5.png'
import lugar2 from '../assets/imagens/lounge-sub5.png'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento3 extends Component {
  render() {
    return (
      <div classNameName='CriarEvento3'>
        <Cabecalho/>
        <main>

          <div className="banner-criar-evento-3"></div>

          <section className="conteudo-criar-evento-3">
            <div className="dh1-sub5">
              <h1 className="h1-sub5">Selecione uma sala</h1>
            </div>

            <div className="lugar-sub5">

              <div className="lugar1">
                <a href="#">
                  <img src={lugar1} alt="Sala de reuniões, como lotação máxima de 25 pessoas" />
                </a>
              </div>

              <div className="lugar2">
                <a href="#">
                  <img src={lugar2} alt="Louge, como lotação máxima de 60 pessoas" />
                </a>
              </div>

            </div>

          </section>

        </main>
<Rodape/>
      </div>
    )
  }
}

export default CriarEvento3;