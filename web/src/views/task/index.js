  import React, {useState } from 'react'
  import * as S from './styles'

  //components
  
  import Header from '../../components/header'
  import Footer from '../../components/footer'
  import TypeIcons from '../../utils/typeicons'

  function Task() {

    const [type,setType]= useState()

      return (
      <S.Container>
  
        <Header />


        <S.Form>    
            <S.typeIcons>
                {
                    TypeIcons.map((icon,index) =>(
                        index > 0 && 
                        <button type="button" onClick={()=>setType(index)}>
                            <img src={icon} alt="icon"
                            className={type && type !== index && 'inative'}/>
                        </button>
                    ))
                }
            </S.typeIcons>
            <S.inputs>
              <S.input>
                <span>Nome</span>
                <input type="text" placeholder="COLABORADOR/ACOMPANHANTE"></input>
              </S.input>

              <S.input>
                <span>Registro</span>
                <input type="text" placeholder="CRM/DRT/RG/CPF"></input>
              </S.input>

              <S.input>
                <span>Especialidade</span>
                
                <input type="text" list="especialidade" name="especialidade" placeholder="..."/> 
                <datalist id="especialidade">
                  <option value="cirurgia"/>
                  <option value="G.O"/>
                  <option value="ORTOPEDIA"/>
                  <option value="UROLOGIA"/>
                </datalist>
                
              </S.input>

              <S.input>
                <span>Chave</span>
                <input type="number" placeholder="NUMERO"></input>
              </S.input>

              <S.textarea>
                <textarea placeholder="Observações" rows={3} name="descricao"></textarea>
              </S.textarea>

              <S.privativo>
                <div id="privativo">

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" value="P"/>
                    <div class="rad-design"></div>
                    <div class="rad-text">P</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" value="M"/>
                    <div class="rad-design"></div>
                    <div class="rad-text">M</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" value="G"/>
                    <div class="rad-design"></div>
                    <div class="rad-text">G</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" value="GG"/>
                    <div class="rad-design"></div>
                    <div class="rad-text">GG</div>
                  </label>

                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="privativo" value="XG"/>
                    <div class="rad-design"></div>
                    <div class="rad-text">XG</div>
                  </label>

                </div>

              </S.privativo>
            </S.inputs>
              <S.options>
                <div>
                  <input type="checkbox" name="entregue" />
                  <span>Entregue</span>
                </div>

                
                  <button type="button">Excluir</button>
                

                
                  <button type="submit" name="enviar">enviar</button>
                
              </S.options>



        </S.Form>
  
        <Footer/>
  
      </S.Container>
      )
    }
    
    export default Task;