import './App.css'
import Main from './Components/Main';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'

export default function App() {
 

  return (
    <div className="w-screen min-h-screen h-full p-20 flex flex-col justify-between items-start text-white bg-black">
      <Login/>
    </div>
  )
}