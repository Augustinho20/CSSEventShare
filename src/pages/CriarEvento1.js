import React, { Component } from 'react';
import '../assets/CSS/CriarEvento1.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento1 extends Component {
  render(){
    return(
      <div classNameName='CriarEvento1'>
        <Cabecalho/>
        <main>
        <div className="banner-criar-evento">

            <div className="titulo-banner-criar-evento">
                    <h1>Crie seu evento</h1>
            </div>
            
        </div>

        <div className="conteudo-criar-evento-1">
            <div className="textos-banner-criar-evento-1">

                <div className="texto-banner-criar-evento-1">
                    <p>A ThoughtWorks São Paulo oferece dois espaços para você fazer seu evento e compartilhar o seu
                        conhecimento
                        com a gente!</p>
                </div>

                <div className="texto-banner-criar-evento-1">
                    <p>
                        A sua proposta do evento será revisada por nossos funcionários de acordo com a sua
                        relevância
                        para a
                        comunidade, e o organizador do evento será contatado através do e-mail cadastrado.</p>
                </div>

                <div className="texto-banner-criar-evento-1">
                    <p> O organizador do evento é responsável por toda a operação de seu evento, incluindo a
                        promoção do
                        mesmo,
                        todo
                        o processo de recepção, organização e conteúdo.</p>
                </div>

                <div className="texto-banner-criar-evento-1">
                    <p> Para mais informações acesse o nosso FAQ na área de Contato no site.</p>
                </div>

                <div className="botao-banner-criar-evento-1">
                    <a href="#">
                        Enviar Proposta
                    </a>
                </div>

            </div>
        </div>
    </main>


        <Rodape/>
      </div>
    )
  }
}

export default CriarEvento1;