import { useState } from 'react'
import './Contato.css'

export function Contato(){
  const [nome,setNome]=useState("")
  const [email,setEmail]=useState("")
  const [mensagem,setMensagem]=useState("")
  
  function Nomezinho(e:React.ChangeEvent<HTMLInputElement>){
    setNome(e.target.value)
}
function Email(e:React.ChangeEvent<HTMLInputElement>){
  setEmail(e.target.value)
}
function Mensagem(e:React.ChangeEvent<HTMLInputElement>){
  setMensagem(e.target.value)
}
return(

    <section className="tudo">
    
    
<h1 className="Nomezinho">Fale comigo amigo!</h1>
<div className="tituloinput">Nome:<input className="inputfooter nome" type="text" placeholder="Seu Nome" onChange={Nomezinho} />{nome && <p className='nome'>{nome}</p>}</div>
<div className="tituloinput">Email:<input className="inputfooter email" type="text" placeholder="Email aqui " onChange={Email} />{email && <p className='nome'>{email}</p>} </div>
<div className="tituloinput">Mensagem:<input className="inputfooter mensagem" type="text" placeholder="mensagem aqui" onChange={Mensagem} />{mensagem && <p className='nome'>{mensagem}</p>}</div>
<button className="buttonfooter botaoenvio">Enviar mensagem</button>
 </section>

)}
export default Contato