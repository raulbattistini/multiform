import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './style'
import {useForm, FormActions} from '../../context/FormContext'
import {Theme} from '../../components/Theme'


function Step1() {
  const navigate = useNavigate();

  const { state, dispatch } = useForm()
// definicao fora do effect pra interromper o loop de re-render infinito. cada prop é recriada em cada re-render
  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNextStep = () => {
    navigate("/step2")
  }

  const handleNameChange = e => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }
  
  return (
    <Theme>
    <C.Container>
       <C.p>Passo 1/3</C.p>
       <C.h1>Vamos começar com o seu nome</C.h1>
       <C.p>Preencha o campo abaixo com o seu nome completo.</C.p>

       <C.hr />

       <C.label htmlFor="fullName"> Seu nome completo 
       <C.input 
       type="text" 
       autoFocus={true}
       values={state.name}
       onChange={handleNameChange}  
       />
       </C.label>
       <C.button onClick={handleNextStep}> Próximo </C.button>
    </C.Container>
    </Theme>

  )
}

export default Step1