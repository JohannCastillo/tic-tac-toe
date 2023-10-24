import Board from './components/board.jsx'
import reactLogo from './assets/react.svg'
import './App.css'
import { SquaresProvider, useSquaresContext, useFunctionsContext } from './context/SquaresProvider.jsx'

function App() {
  return (
    <>
     <SquaresProvider>
      <main className='main-section'>
        <h1>TicTacToe</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '0.5rem' }}>
          <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <p>React</p>
        </div>
          <section className="card">
            <Board></Board>
          </section>
      </main>
     </SquaresProvider>
    </>
  )
}

export default App