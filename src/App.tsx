import { useState } from 'react'
import './App.css'
import Conta from './Components/Conta'

export default function App() {
  const [Contas, setContas]=useState([<Conta conta="Inter" valor={1800}/>,<Conta conta="C6" valor={3700}/> ])
  function HandleClick(){
    const novaConta=<Conta conta="teste" valor={0}/>
    setContas([novaConta,...Contas])
  }

  return (
    <div className="w-screen min-h-screen h-full p-20 flex flex-col justify-evenly items-start text-white bg-black">
      <h1 className="text-6xl font-bold">Valor total dos cartoes</h1>
      <button onClick={()=>HandleClick()} className='mb-5 p-5 rounded-xl bg-white text-black'>Adicionar mais contas</button>
     <div className="p-5 w-full h-fit grid grid-cols-2 rounded-xl gap-5 h-2/4 bg-gray-900">
       
       {Contas.map((Conta)=>Conta)}
     </div>
    </div>
  )
}