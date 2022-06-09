import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as C from './style'
import {useForm, FormActions} from '../../context/FormContext'
import {Theme} from '../../components/Theme'
import {SelectOption} from '../../components/SelectOption'

function Step2() {
  const navigate = useNavigate();

  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === ""){
      navigate("/")
    } else {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }
  }, [dispatch, navigate, state])

  const handleNextStep = () => {
    if (state.name !== ""){
    navigate("/step3")
  } else {
    alert("Preencha os campos.")
  }
  }

  const setLevel = level => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
    <C.Container>
       <C.p>Passo 2/3</C.p>
       <C.h1>{state.name}, o que melhor descreve você hoje?</C.h1>
       <C.p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</C.p>

       <C.hr />
       <SelectOption 
         title="Sou iniciante"
         description="Comecei a programar a menos de 2 anos"
         icon=""
         selected={state.level === 0}
         onClick={()=>{setLevel(0)}}
       />
         <SelectOption 
         title="Sou programador"
         description="Programo há 2 anos ou mais"
         icon=""
         selected={state.level === 1}
         onClick={()=>{setLevel(1)}}
       />
       <Link to="/" className="backButton">
       Voltar 
       </Link>
       <C.button onClick={handleNextStep}> Próximo 
       </C.button>
    </C.Container>
    </Theme>

  )
}

export default Step2