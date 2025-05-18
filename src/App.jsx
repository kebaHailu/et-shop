
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './Routes/AllRoutes'
import {Header, Footer} from "./components"

function App() {

  return (
    <div className='App'>
  <BrowserRouter>
    <Header />
    <AllRoutes /> 
    <Footer />
  </BrowserRouter>

    </div>
  )
}

export default App
