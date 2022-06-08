import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as C from './style'
import {useForm, FormActions} from '../../context/FormContext'
import {Theme} from '../../components/Theme'


function Step3() {
  const navigate = useNavigate();

  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === ""){
      navigate("/")
    } else {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }
  }, [])

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "" ){
      console.log(state)
    } else{ 
      alert('Preencha os campos.')
    }
  }

  const handleEmailChange = e => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = e => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }
  return (
    <Theme>
    <C.Container>
       <C.p>Passo 3/3</C.p>
       <C.h1>Legal {state.name}, onde te encontramos?</C.h1>
       <C.p>Preencha os campos abaixo com suas informações para entrarmos em contato.</C.p>

       <C.hr />

       <C.label htmlFor="email"> Qual seu email? 
       <C.input 
       type="email" 
       values={state.email}
       onChange={handleEmailChange}  
       />
       </C.label>
       <C.label htmlFor="github"> Qual seu GitHub? 
       <C.input 
       type="url" 
       values={state.github}
       onChange={handleGithubChange}  
       />
       </C.label>
       <Link to="/step2" className="backButton">
       Voltar 
       </Link>
       <C.button onClick={handleNextStep}> Finalizar cadastro </C.button>
    </C.Container>
    </Theme>

  )
}

export default Step3