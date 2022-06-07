import { createContext, useReducer, useContext } from "react";

const initialData = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: ""
};

const FormContext = createContext(undefined);

export var FormActions;
(function(FormActions) {
  FormActions[(FormActions["setCurrentStep"] = 0)] = "setCurrentStep"
  FormActions[(FormActions["setName"] = 1)] = "setName"
  FormActions[(FormActions["setLevel"] = 2)] = "setLevel"
  FormActions[(FormActions["setEmail"] = 3)] = "setEmail"
  FormActions[(FormActions["setGithub"] = 4)] = "setGithub"
})(FormActions || (FormActions = {}))

const formReducer = (state, action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setName:
      return { ...state, currentStep: action.payload }
    case FormActions.setLevel:
      return { ...state, currentStep: action.payload }
    case FormActions.setEmail:
      return { ...state, currentStep: action.payload }
    case FormActions.setGithub:
      return { ...state, currentStep: action.payload }
    default:
      return state;
  }
}

export const FormProvider = ({children}) =>{
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = {state, dispatch}
  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}


export const useForm = () => {
  const context = useContext(FormContext);
  if(context === undefined ){
    throw new Error ('useForm precisa ser usado dentro do FormProvider')
  }
  return context;
}