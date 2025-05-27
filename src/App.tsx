import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'

export default function App() {
 

  return (
    <div className="w-screen min-h-screen h-full p-20 flex flex-col justify-between items-start text-white bg-black">
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Login/>} />
    <Route path='/cadastro' element={<Cadastro/>} />
    <Route path='/main' element={<Main/>} />
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}