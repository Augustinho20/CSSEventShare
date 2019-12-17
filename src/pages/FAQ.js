import React, { Component } from "react";
import '../assets/CSS/FAQ.css'
import Cabecalho from '../components/CabecalhoSemBotao'
import Rodape from '../components/Rodape'

class FAQ extends Component {
  render() {
    return (
      <div>
        <Cabecalho/>
        <main>
          <section id="banner-faq">
            <div class="texto-faq">
              <h1>F.A.Q.</h1>
            </div>
          </section>

          <section class="container-faq">
            <div class="indice-faq">
              <a href="#sobre-faq" class="link-faq">
                <p>Sobre a ThoughtWorks</p>
              </a>
              <a href="#organizar-faq" class="link-faq">
                <p>Organizar Eventos</p>
              </a>
              <a href="#participante-faq" class="link-faq">
                <p>Participar de Eventos</p>
              </a>
            </div>

            <div class="perguntas-faq">
              <div id="sobre-faq">
                <h2>Sobre a ThoughtWorks</h2>
                <div class="box-faq">
                  <h3>Onde está localizada?</h3>
                  <p>
                    A ThoughtWorks São Paulo está localizada na Avenida
                    Paulista, 2300 - Edifício São Luis Gonzaga - Conjunto 41,
                    Bela Vista, São Paulo - SP, 01310-300, Brazil.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>Qual é o horário de funcionamento?</h3>
                  <p>
                    A ThoughtWorks São Paulo funciona das 0000 até as 0000 de
                    segunda à sexta, mas os horários específicos para realização
                    de eventos podem ser encontrados na seção Organizar Eventos.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>Como funciona o espaço na ThoughtWorks São Paulo?</h3>
                  <p>
                    O escritório se encontra dentro de um prédio comercial,
                    temos nossos escritórios, salas de reuniões e dois espaços
                    para a realização de eventos.
                  </p>
                </div>
              </div>

              <div id="organizar-faq">
                <h2>Organizar Eventos</h2>
                <div class="box-faq">
                  <h3>
                    Como eu posso organizar eventos na ThoughtWorks São Paulo?
                  </h3>
                  <p>
                    A ThoughtWorks São Paulo cede seus espaços de eventos
                    gratuitamente para pessoas e organizações que queiram
                    utilizar o espaço para apresentação de conteúdos relevantes
                    para a comunidade. Caso tenha interesse em realizar um
                    evento é necessário que você envie uma proposta na aba
                    Publicar Evento do nosso site.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>Em qual horário posso realizar meu evento?</h3>
                  <p>NÃO LEMBROOO</p>
                </div>
                <div class="box-faq">
                  <h3>Quais equipamentos estão disponíveis no Lounge?</h3>
                  <p>
                    O Lounge suporta no máximo 60 pessoas, possui televisão,
                    projetor, webcam, microfone, caixas de som à disposição.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>
                    Quais equipamentos estão disponíveis na Sala de Reunião?
                  </h3>
                  <p>
                    A Sala de Reunião suporta no máximo 25 pessoas, possui mesas
                    e cadeiras, além de uma lousa, projetor, webcam e microfone.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>O coffee break é fornecido pela ThoughtWorks?</h3>
                  <p>
                    Sim, a ThoughtWorks oferece Coffe Break para os eventos
                    realizados em seus espaços de forma gratuita, se houver a
                    necessidade de alimentos diferenciados no caso de alguma
                    restrição alimentar o organizador do evento deverá mencionar
                    isso ao inscrever o evento.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>
                    A ThoughtWorks São Paulo disponibiliza recursos para
                    acessibilidade dos eventos?
                  </h3>
                  <p>
                    Se for necessário alguma adaptação ou um recurso diferente
                    no espaço mencione no campo "Observações Adicionais" ao
                    inscrever o seu evento.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>
                    O que é necessário para liberar a entrada dos participantes
                    no prédio?{" "}
                  </h3>
                  <p>
                    Para liberar a entrada das pessoas no prédio, é importante
                    que tenhamos, até 15:00 do dia anterior ao evento, a lista
                    de participantes com as seguintes três informações dos
                    participantes: Nome (civil ou social), Número do RG, E-mail
                    dos Participantes.
                  </p>
                </div>
              </div>

              <div id="participante-faq">
                <h2>Participar de Eventos</h2>
                <div class="box-faq">
                  <h3>
                    Quais são os próximos eventos que vão acontecer na
                    ThoughtWorks São Paulo?
                  </h3>
                  <p>
                    Os próximos eventos agendados na ThoughtWorks São Paulo
                    ficam disponíveis na página principal do nosso site.
                  </p>
                </div>
                <div class="box-faq">
                  <h3>Quero participar de um evento. O que devo fazer?</h3>
                  <p>
                    No nosso site, escolha o evento de seu interesse e procure
                    pelo botão de inscrição. Você será direcionado para o
                    sistema de inscrição escolhido pelo organizador do evento. É
                    só solicitar a sua vaga e aguardar a confirmação.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Rodape/>
      </div>
    );
  }
}

export default FAQ;
