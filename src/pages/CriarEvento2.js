import React, { Component } from 'react';
import '../assets/CSS/CriarEvento2.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento2 extends Component {
  render() {
    return (
      <div className="CriarEvento2">
        <Cabecalho/>
       
              <div class="banner_sub2">
                <img src={require("../assets/imagens/submeter_evento2.png")} alt="" />
              </div>
              {/* <!--Fim banner_sub2--> */}
              <div class="texto1_sub2">
                <h2>Informações básicas sobre o evento:</h2>
              </div>
              <section class="form_sub2">
                <form className='form-sub2' action="#" method="POST">
                  <div class="input_sub2">
                    <input type="text" id="nome" placeholder="Nome" />
                  </div>
                  <div class="input_sub2">
                    <input type="email" id="email" placeholder="E-mail" />
                  </div>
                  <div class="input_sub2">
                    <input type="text" id="organizador" placeholder="Organizador do Evento*" />
                    <p>*Comunidade ou empresa responsável</p>
                  </div>
                  <div class="input_sub2">
                    <input type="text" id="rede social org" placeholder="Rede Social*" />
                    <p>*Da comunidade ou empresa responsável (opcional)</p>
                  </div>
                </form>
                <section class="calendario_sub2">
                  <section class="texto_sub2">
                    <div class="selecione_data">
                      <h2>Selecione uma data:</h2>
                    </div>
                    <div class="mes-sub2">
                      <a href="#">
                        <img src={require("../assets/imagens/left-arrow.png")} alt="" />
                      </a>
                      <h2>Setembro</h2>
                      <a href="#">
                        <img src={require("../assets/imagens/right-arrow.png")} alt="" />
                      </a>
                    </div>
                    {/* <!-- mes --> */}
                    <div class="semana-sub2">
                      <p>d</p>
                      <p>s</p>
                      <p>t</p>
                      <p>q</p>
                      <p>q</p>
                      <p>s</p>
                      <p>s</p>
                    </div>
                    {/* <!--semana--> */}
                    <div class="dias_sub2">
                      <div class="dias1-sub2">
                        <a href="1">
                          {/* <!--1--> */}
                          <div class="dia1-sub2 box-sub2">
                            <p>1</p>
                          </div>
                        </a>
                        {/* <!--1--> */}
                        <a href="2">
                          {/* <!--2--> */}
                          <div class="dia2-sub2 box-sub2">
                            <p>2</p>
                          </div>
                        </a>
                        {/* <!--2--> */}
                        <a href="#">
                          {/* <!--3--> */}
                          <div class="dia3-sub2 box-sub2">
                            <p>3</p>
                          </div>
                        </a>
                        {/* <!--3--> */}
                        {/* <!--4--> */}
                        <a href="#">
                          {/* <!--4--> */}
                                <div class="dia4-sub2 box-sub2">
                            <p>4</p>
                          </div>
                        </a>
                        {/* <!--4--> */}
                        {/* <!--5--> */}
                        <a href="#">
                          <div class="dia5-sub2 box-sub2">
                            <p>5</p>
                          </div>
                        </a>
                        {/* <!--5--> */}
                        {/* <!--6--> */}
                        <a href="#">
                          <div class="dia6-sub2 box-sub2">
                            <p>6</p>
                          </div>
                        </a>
                        {/* <!--6--> */}
                        {/* <!--7--> */}
                        <a href="#">
                          <div class="dia7-sub2 box-sub2">
                            <p>7</p>
                          </div>
                        </a>
                        {/* <!--7--> */}
                      </div>
                      {/* <!--semana1--> */}
                      <div class="dias2-sub2">
                        {/* <!--semana2--> */}
                        <a href="#">
                          {/* <!--8--> */}
                          <div class="dia8-sub2 box-sub2">
                            <p>8</p>
                          </div>
                        </a>
                        {/* <!--8--> */}
                        <a href="#">
                          {/* <!--9--> */}
                          <div class="dia9-sub2 box-sub2">
                            <p>9</p>
                          </div>
                        </a>
                        {/* <!--9--> */}
                        <a href="#">
                          {/* <!--10--> */}
                          <div class="dia10-sub2 box-sub2">
                            <p>10</p>
                          </div>
                        </a>
                        {/* <!--10--> */}
                        {/* <!--11--> */}
                        <a href="#">
                          {/* <!--11--> */}
                          <div class="dia11-sub2 box-sub2">
                            <p>11</p>
                          </div>
                        </a>
                        {/* <!--11--> */}
                        {/* <!--12--> */}
                        <a href="#">
                          <div class="dia12-sub2 box-sub2">
                            <p>12</p>
                          </div>
                        </a>
                        {/* <!--12--> */}
                        {/* <!--13--> */}
                        <a href="#">
                          <div class="dia13-sub2 box-sub2">
                            <p>13</p>
                          </div>
                        </a>
                        {/* <!--13--> */}
                        {/* <!--14--> */}
                        <a href="#">
                          <div class="dia14-sub2 box-sub2">
                            <p>14</p>
                          </div>
                        </a>
                        {/* <!--14--> */}
                      </div>
                      {/* <!--semana2--> */}

                      <div class="dias3-sub2">
                        {/* <!--semana3--> */}
                        <a href="#">
                          {/* <!--15--> */}
                          <div class="dia15-sub2 box-sub2">
                            <p>15</p>
                          </div>
                        </a>
                        {/* <!--15--> */}
                        <a href="#">
                          {/* <!--16--> */}
                          <div class="dia16-sub2 box-sub2">
                            <p>16</p>
                          </div>
                        </a>
                        {/* <!--16--> */}
                        <a href="#">
                          {/* <!--17--> */}
                          <div class="dia17-sub2 box-sub2">
                            <p>17</p>
                          </div>
                        </a>
                        {/* <!--17--> */}
                        {/* <!--18--> */}
                        <a href="#">
                          <div class="dia18-sub2 box-sub2">
                            <p>18</p>
                          </div>
                        </a>
                        {/* <!--18--> */}
                        {/* <!--19--> */}
                        <a href="#">
                          <div class="dia19-sub2 box-sub2">
                            <p>19</p>
                          </div>
                        </a>
                        {/* <!--19--> */}
                        {/* <!--20--> */}
                        <a href="#">
                          <div class="dia20-sub2 box-sub2">
                            <p>20</p>
                          </div>
                        </a>
                        {/* <!--20--> */}
                        {/* <!--21--> */}
                        <a href="#">
                          <div class="dia21-sub2 box-sub2">
                            <p>21</p>
                          </div>
                        </a>
                        {/* <!--21--> */}
                      </div>
                      {/* <!--semana3--> */}

                      {/* <!--semana4--> */}
                      <div class="dias4-sub2">
                        <a href="#">
                          {/* <!--22--> */}
                          <div class="dia22-sub2 box-sub2">
                            <p>22</p>
                          </div>
                        </a>
                        {/* <!--22--> */}
                        <a href="#">
                          {/* <!--23--> */}
                          <div class="dia23-sub2 box-sub2">
                            <p>23</p>
                          </div>
                        </a>
                        {/* <!--23--> */}
                        <a href="#">
                          {/* <!--24--> */}
                          <div class="dia24-sub2 box-sub2">
                            <p>24</p>
                          </div>
                        </a>
                        {/* <!--24-->
                            <!--25--> */}
                        <a href="#">
                          <div class="dia25-sub2 box-sub2">
                            <p>25</p>
                          </div>
                        </a>
                        {/* <!--25-->
                            <!--26--> */}
                        <a href="#">
                          <div class="dia26-sub2 box-sub2">
                            <p>26</p>
                          </div>
                        </a>
                        {/* <!--26-->
                            {<!--27--> */}
                        <a href="#">
                          <div class="dia27-sub2 box-sub2">
                            <p>27</p>
                          </div>
                        </a>
                        {/* <!--27--> */}
                        {/* <!--28--> */}
                        <a href="#">
                          <div class="dia28-sub2 box-sub2">
                            <p>28</p>
                          </div>
                        </a>
                        {/* <!--28--> */}
                      </div>
                      {/* <!--semana4--> */}

                      {/* <!--semana5--> */}
                      <div class="dias5-sub2">
                        <a href="#">
                          {/* <!--29--> */}
                          <div class="dia29-sub2 box-sub2">
                            <p>29</p>
                          </div>
                        </a>
                        {/* <!--29--> */}
                        <a href="#">
                          {/* <!--30--> */}
                          <div class="dia30-sub2 box-sub2">
                            <p>30</p>
                          </div>
                        </a>
                        {/* <!--30--> */}
                      </div>
                      {/* <!--semana4--> */}
                    </div>
                    {/* <!--fim dias--> */}
                  </section>
                  <section class="legenda-sub4">
                  </section>
                </section>

              </section>
              {/* <!--Fim form_sub2--> */}

              {/* <!--fim calendario--> */}
              <div class="botão_sub2">
                <a href="#">Continuar</a>
              </div>
   
            {/* <!--Fim do Main--> */}
        <Rodape/>
    </div>
        )
      }
      
      }
      
      
export default CriarEvento2;

