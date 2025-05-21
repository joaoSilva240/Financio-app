import { useEffect, useState } from 'react'
import './App.css'
import Conta from './Components/Conta'
import Modal from './Components/Modal'

type EstruturaDaConta={
  conta:string;
  valor:number;
  cor?:string;
}

export default function App() {
  const [Contas, setContas]=useState<EstruturaDaConta[]>([
    {conta:"Banco Inter",valor:1800,cor:"#434343"}
  
  ]);
  const [ValorTotal,setValorTotal]=useState<number>(0);
  const [modal,setModal] = useState(false);

  useEffect(()=>{
    const total:number=Contas.reduce((sum,c)=>sum+c.valor,0);
    setValorTotal(total);
  },[Contas])
  
  function handleAddConta(){
    
    
    
    
    
    // const novaConta:EstruturaDaConta={
    //   conta:"Nova Conta",
    //   valor:1000,
    //   cor:"#"+Math.floor(Math.random()*16777215).toString(16)
    // };
    // setContas([novaConta,...Contas]);
  };

  return (
    <div className="w-screen min-h-screen h-full p-20 flex flex-col justify-evenly items-start text-white bg-black">
      <h1 className="text-6xl font-bold">
        {ValorTotal}
        </h1>
      <button onClick={()=>setModal(true)} className='mb-5 p-5 rounded-xl bg-white text-black'>Adicionar mais contas</button>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
          <h2 className="text-3xl font-bold mb-4">Adicione os dados da conta</h2>
        <div className="grid grid-cols-2 gap-2">
          <p>Nome da conta</p>
          <input className='h-10 pl-5 pr-5 border rounded-sm' type="text" name="conta" id="conta" placeholder='Adicione os dados da conta'/>
          <p>Valor da conta</p>
          <input className='h-10 pl-5 pr-5 border rounded-sm' type="text" name="valor" id="valor" placeholder='Adicione o saldo da conta'/>
        </div>
      </Modal>
     <div className="p-5 w-full h-fit grid grid-cols-2 rounded-xl gap-5 h-2/4 bg-gray-900">
       
       {Contas.map((c,index)=><Conta key={index} cor={c.cor} conta={c.conta} valor={c.valor}/>)}
     </div>
    </div>
  )
}