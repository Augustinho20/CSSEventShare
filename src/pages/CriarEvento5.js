import React, { Component } from 'react';
import '../assets/CSS/CriarEvento5.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento5 extends Component {
  render() {
    return (
      <div>
        <Cabecalho/>
        <main className="container-criarevento5">

        <div className="banner_res1">
        </div>

        <section className="conteudo-res1">

            <div className="titulo-res1">
                <h1>Resumo da Proposta</h1>
            </div>

            <div className="container-res1">

                <section className="esquerdo-res1">
                    <h2>Organizador do Evento</h2>
                    <div className="box-res1">
                        <h3>Nome da comunidade/empresa:</h3>
                        <p>Nome aqui</p>
                    </div>
                    <div className="box-res1">
                        <h3>E-mail para contato:</h3>
                        <p>E-mail aqui</p>
                    </div>
                    <div className="box-res1">
                        <h3>Redes sociais:</h3>
                        <p>Redes sociais aqui</p>
                    </div>
                </section>
                {/* <!--esquerdo--> */}


                <section className="direito-res1">
                    <h2>Sobre o evento</h2>
                    <div className="box-res1">
                        <h3>Nome do evento:</h3>
                        <p>Nome aqui</p>
                    </div>
                    <div className="box-res1">
                        <h3>Data:</h3>
                        <p>00 de setembro de 2019</p>
                    </div>
                    <div className="box-res1">
                        <h3>Horário:</h3>
                        <p>Início</p>
                        <p>Fim</p>
                    </div>
                    <div className="box-res1">
                        <h3>Local:</h3>
                        <p>Sala de reunião ou lounge</p>
                    </div>
                    <div className="box-res1">
                        <h3>Descrição do evento:</h3>
                        <p>Descrição</p>
                    </div>
                    <div className="box-res1">
                        <h3>Quantidade de participantes:</h3>
                        <p>Quantidade selecionada</p>
                    </div>
                    <div className="box-res1">
                        <h3>Categoria do evento:</h3>
                        <p>Categoria selecionada</p>
                    </div>
                    <div className="box-res1">
                        <h3>Foco em diversidade:</h3>
                        <p>Sim ou não</p>
                    </div>
                    <div className="box-res1">
                        <h3>Comentário adicional:</h3>
                        <p>Se houver, comentario aqui</p>
                    </div>
                </section>
                {/* <!--direito--> */}

            </div>
            {/* <!--container--> */}

            <div className="botão_res1">
                <a href="#">Continuar</a>
            </div>

        </section>

    </main>
        <Rodape/>
      </div>
    );
  }
}

export default CriarEvento5;