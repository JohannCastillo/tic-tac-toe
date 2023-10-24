import { useState } from 'react'
import Board from './components/board.jsx'
import './App.css'
import { SquaresProvider, useSquaresClearContext, useSquaresContext } from './context/SquaresProvider.jsx'

function App() {

  const clear = useSquaresClearContext()

  return (
    <>
     <SquaresProvider>
      <h1>Tres en raya con React</h1>
        <h5>Turno de  </h5>
        <div className="card">
          <Board></Board>
        </div>
        <button onClick={clear}>Nuevo juego</button>
     </SquaresProvider>
    </>
  )
}

export default App