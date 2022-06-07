import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './style'
import {useForm, FormActions} from '../../context/FormContext'
import {Theme} from '../../components/Theme'
import {SelectOption} from '../../components/SelectOption'

function Step2() {
  const navigate = useNavigate();

  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handleNextStep = () => {
    navigate("/step3")
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
       <C.p>Passo 2/3</C.p>
       <C.h1>Vamos começar com o seu nome</C.h1>
       <C.p>Preencha o campo abaixo com o seu nome completo.</C.p>

       <C.hr />
       <SelectOption 
         title="Sou iniciante"
         description="Comecei a programar a menos de 2 anos"
         icon=""
       />
         <SelectOption 
         title="Sou programador"
         description="Programo há 2 anos ou mais"
         icon=""
       /> 
       <C.button onClick={handleNextStep}> Próximo </C.button>
    </C.Container>
    </Theme>

  )
}

export default Step2