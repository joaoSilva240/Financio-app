import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../backend/supabaseClient";

type Usuario={
    nome:string;
    email:string;
    senha:string;
}


export default function Login(){
    const navigate=useNavigate();
    const [formulario,setFormulario]=useState<Usuario>({
        nome:'',
            email:'',
            senha:'123456',
        });

    async function handleLogin(e:React.FormEvent){
        e.preventDefault();
        const data = await supabase.auth.signInWithPassword({
            email:formulario.email,
            password:formulario.senha
        })
        if(data.data)
        navigate("/main");

    }

    return(
        <>
     <form className='m-auto p-15 gap-10 rounded-xl flex flex-col bg-white text-black' onSubmit={handleLogin}>
      <h3 className='text-xl font-bold'>Bem vindo de volta</h3>
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
        <button className='h-10 rounded-3xl text-white font-bold bg-blue-400' type="submit">Login</button>
      </form>
    </>)
}