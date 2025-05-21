import { Plus } from 'lucide-react'

type contaProps={
    conta:string;
    valor:number;
    cor?:string;
}

export default function Conta({conta,cor,valor}:contaProps){
return(
    <div className="w-full min-h-75">
    <div className='h-4/4 w-full p-5 grid grid-cols-2  rounded-xl  ' style={{backgroundColor: cor}}>
      <p className="font-bold text-3xl">{conta}</p>
      <button className="flex justify-center h-10 items-center gap-2 rounded-3xl bg-black text-white"><Plus/>Ver detalhes</button>
      <p className="text-6xl font-thin">R${valor}</p>
  </div>
  </div>
)
}