import '../App.css'
import {useState} from 'react'

function Imput(){

    function pegaTexto(e){
        return(
            setTexto(e.target.value)
        )
    }

    const [texto,setTexto]= useState('')

    return (
        <input type='text' placeholder="Digite a tarefa" className='inputs' value={texto} onChange={pegaTexto}/>
    )
}

export default Imput;