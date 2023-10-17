import { useState } from 'react'
import './Etiquetas.scss'

export default function Etiquetas(){

    const[cliente, setCliente] = useState(
        { 
            nome:'',
            email: '',
            cpf: ''
        }
    )

    const[listaClientes, setListaClientes] = useState([])

    const cadCliente = (e)=>{
        setCliente({...cliente, [e.target.name]:e.target.value})
    }

    const inserirCliente = (e)=>{
        e.preventDefault()
        setListaClientes([...listaClientes, cliente])
        setCliente( { 
            nome:'',
            email: '',
            cpf: ''
        })
    }

    return(
        <div className="divEtiqueta">
            <form onSubmit={inserirCliente}>
                <fieldset>
                    <legend><strong>Dados Pessoais</strong></legend>
                    <label>Nome:
                        <input type="text" name="nome" onChange={cadCliente} value={cliente.nome}/>
                    </label>
                    <label>Email:
                        <input type="text" name="email" onChange={cadCliente} value={cliente.email}/>
                    </label>
                    <label>CPF:
                        <input type="text" name="cpf" onChange={cadCliente} value={cliente.cpf}/>
                    </label>
                    <button type="submit">Criar</button>
                </fieldset>
            </form>
            <div className="painel">
                {
                    listaClientes.map((cli, i)=>
                        <div className="etiqueta">
                            <p>Nome: {cli.nome}</p>
                            <p>Email: {cli.email}</p>
                            <p>CPF: {cli.cpf}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}