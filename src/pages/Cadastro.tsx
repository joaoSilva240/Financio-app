import supabase from '../../backend/supabaseClient'
import { useState } from 'react';

type Usuario={
    nome:string;
    email:string;
    senha:string;
}

export default function Cadastro(){
    const [formulario,setFormulario]=useState<Usuario>({
        nome:'',
        email:'',
        senha:'123456',
    });


    async function handleAddConta(e:React.FormEvent){
        e.preventDefault();
       
        try{
           await supabase.auth.signUp({
               email:formulario.email,
               password:formulario.senha,
           });
        
           setFormulario({nome:'',email:'',senha:'123456',});
        } catch(err){
            console.error("erro ao buscar usuarios",err);
        }};

return(
    <>
     <form className='m-auto p-15 gap-10 rounded-xl flex flex-col bg-white text-black' onSubmit={handleAddConta}>
      <h3 className='text-xl font-bold'>Cadastre-se</h3>
        <input className='w-full rounded-sm p-3 border'
          type="text"
          placeholder="Nome"
          value={formulario.nome}
          onChange={(e) => setFormulario({ ...formulario, nome: e.target.value })}
        />
        <input className='w-full rounded-sm p-3 border'
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
        />
        <input className='w-full rounded-sm p-3 border'
          type="text"
          placeholder="Senha"
          value={formulario.senha}
          onChange={(e) => setFormulario({ ...formulario, senha: e.target.value })}
        />
        <button className='h-10 rounded-3xl text-white font-bold bg-blue-400' type="submit">Cadastrar</button>
      </form>
    </>
);

};