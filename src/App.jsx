import AppRouter from './routes.jsx'
import {FormProvider} from './context/FormContext'
function App() {
  return (
  <FormProvider>
  <AppRouter />
  </FormProvider>
  );
}

export default App;
