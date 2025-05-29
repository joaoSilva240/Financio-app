import { useState } from "react";
import {Link} from "react-router-dom"
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
            senha:''
        });

    async function handleLogin(e:React.FormEvent){
        e.preventDefault();
        const  { data, error } = await supabase.auth.signInWithPassword({
            email:formulario.email,
            password:formulario.senha
        })
        if(error) return console.log("erro no login") 
        else if(data.session)return navigate("/main");
        else return console.log("Senha incorreta")

    }

    return(
        <>
     <form className='m-auto p-15 gap-10 rounded-xl flex  flex-col bg-white text-black' onSubmit={handleLogin}>
      <h3 className='text-xl font-bold'>Bem vindo de volta</h3>
        <input className='w-full rounded-sm p-3 border'
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
        />
        <input className='w-full rounded-sm p-3 border'
          type="password"
          placeholder="Senha"
          value={formulario.senha}
          onChange={(e) => setFormulario({ ...formulario, senha: e.target.value })}
        />
        <button className='h-10 rounded-3xl text-white font-bold bg-blue-400' type="submit">Login</button>
        <p className="flex flex-col items-center">Ainda nao possui conta? <br />
          <Link to={"/cadastro"}><strong className="text-blue-600">Cadastrar</strong></Link>
        </p>
      </form>
    </>)
}