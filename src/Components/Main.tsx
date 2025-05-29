import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient.ts'

import Conta from './Conta';
import Modal from './Modal';

type EstruturaDaConta={
  conta:string;
  valor:number;
  cor?:string;
}

export default function Main() {
    
    const [Contas, setContas]=useState<EstruturaDaConta[]>([]);
    const [adicionarNomeContaNova,setAdicionarNomeContaNova]=useState<string>();
    const [adicionarValorContaNova,setAdicionarValorContaNova]=useState<number>();
    const [ValorTotal,setValorTotal]=useState<number>(0);
    const [modal,setModal] = useState(false);

    const [fetcheData, setFetcheData] = useState<EstruturaDaConta[]>([])


    useEffect(()=>{


    async function getUser(): Promise<String | null> {
        const {data:{user},error} = await supabase.auth.getUser()
        if(error){
          console.log(error.message)
          return null
        }
        return user ? user.id:null
      
    }
  
    async function getUserAccounts(userId:String){
      try{
        const {data:AccountData,error} = await supabase
        .from('contas')
        .select('*')
        .eq('user_id',userId)
  
        if(error){
          console.error("Erro na busca dos dados da conta")
          setFetcheData([])
          return null
        }
        const mappAccountData:EstruturaDaConta[] = AccountData.map(account =>({
          id: account.id,
          conta:account.nome,
          valor:account.valor,
          cor:"#"+Math.floor(Math.random()*16777215).toString(16)
        }))

        setFetcheData(mappAccountData)

      }catch(err){
        console.error("erro inesperado")
      }
    }
  
    async function loadData(){
      const getCurrentUserId =  await getUser()
      getCurrentUserId ? getUserAccounts(getCurrentUserId) : console.log("Nenhum usuario encontrado")    
    }
    loadData()
  },[])
  
    useEffect(()=>{
      const total:number=fetcheData.reduce((sum,c)=>sum+c.valor,0);
      setValorTotal(total);
    },[fetcheData])
    
    function handleAddConta(){
      if(!adicionarNomeContaNova || !adicionarValorContaNova) return
      const novaConta:EstruturaDaConta={
        conta:adicionarNomeContaNova,
        valor:adicionarValorContaNova,
        cor:"#"+Math.floor(Math.random()*16777215).toString(16)
      };
      setContas([novaConta,...Contas]);
      setModal(false)
    };
  
    return (
      <>
        <div className="m-5 p-10 w-full h-full border rounded-sm border-gray-600 border-1 text-6xl font-thin">
          R${ValorTotal}
        </div>
   
        <Modal isOpen={modal} onClose={() => setModal(false)}>
            <h2 className="text-3xl font-bold mb-4">Adicione os dados da conta</h2>
          <div className="grid grid-cols-3 gap-2">
            <p>Nome da conta</p>
            <input className=' col-span-2 h-10 pl-5 pr-5 border rounded-sm' type="text" name="conta" id="conta" placeholder='Adicione os dados da conta' value={adicionarNomeContaNova} onChange={(e)=>setAdicionarNomeContaNova(e.target.value)}/>
            <p>Valor da conta</p>simplifica
            <input className='h-10 col-span-2 pl-5 pr-5 border rounded-sm' type="number" name="valor" id="valor" placeholder='Adicione o saldo da conta'value={adicionarValorContaNova} onChange={(e)=>setAdicionarValorContaNova(parseFloat(e.target.value))}/>
            <button onClick={()=>handleAddConta()} className=' col-span-3 mb-5 p-3 border rounded-xl bg-white text-black'>Adicionar Conta</button>
          </div>
        </Modal>
       <div className="p-5 w-full h-fit grid gri  d-cols-2 rounded-xl gap-5 h-2/4 bg-gray-900">
       <button onClick={()=>setModal(true)} className='col-span-2 w-1/4 h-20 mb-5 p-5 rounded-xl bg-white text-black'>Adicionar mais contas</button>
         {fetcheData.map((c,index)=><Conta key={index} id={index} cor={c.cor} conta={c.conta} valor={c.valor}/>)}
       </div>
      </>
    )
  }