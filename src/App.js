import './App.css';
import Imput from './components/input'
import Botao from './components/Botao'
import { useState} from 'react'
import { useEffect } from 'react';

function App() {

  const [lista,setLista]= useState([])

  useEffect(()=>{

    setLista([{tarefa:'Comprar pao'},
              {tarefa:'Limpar a casa'},
              {tarefa:'Lavar o banheiro'}
  ])

  }, [])

  

  return (
    <div className="App">
      <h1>LISTA DE TAREFAS</h1>
      <Imput />
      <Botao />
      <hr/>
      {lista.map((c)=>{
        return (
          <ul>
            <li>{c.tarefa}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
