import { createContext, useState, useContext } from "react"
import {TURNS, LINES, COLORS} from "../constants/constants"
import confetti from "canvas-confetti"

const SquaresContext = createContext()
const FunctionsContext = createContext()

export function GameProvider({children}){
    const INITIAL_STATES={
        squares: Array(9).fill(null),
        turno: TURNS.X,
        winner: null,
        history: [Array(9).fill(null)],
        historyIndex: 0,
    }

    const [state, setState] = useState(INITIAL_STATES)
    const [ movementsVisibility, setMovementsVisibility] = useState('hidden')

    function changeTurn(i){
        setState(prevState => {
            const newSquares = [...prevState.squares]
            newSquares[i] = prevState.turno
            const newHistory = [...prevState.history]
            newHistory.push(newSquares)
            
            return {
                ...prevState,
                squares: newSquares,
                turno: prevState.turno == TURNS.X ? TURNS.O : TURNS.X,
                winner: calculateWinner(newSquares),
                history: newHistory,
                historyIndex: prevState.historyIndex+1
          }
        })
      }

    function clearBoard(){
        setState(INITIAL_STATES)
    }

    function getHistory(index){
       setState({...state, historyIndex: index})
    }

    function toggleMovsVisibility(){
      setMovementsVisibility(movementsVisibility === '' ? 'hidden' : '') 
    }


    function calculateWinner(squares) {
        for (let i = 0; i < LINES.length; i++) {
          const [a, b, c] = LINES[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            confetti()
            return LINES[i]
          }
        }
        return null;
      }

      const functions = {
        changeTurn,
        clearBoard,
        getHistory,
        calculateWinner,
        toggleMovsVisibility
      }

    return (
        <SquaresContext.Provider value={{...state, movementsVisibility, COLORS}}>
            <FunctionsContext.Provider value={{...functions}}>
                {children}
            </FunctionsContext.Provider>
        </SquaresContext.Provider>    
    );
}


export function useSquaresContext(){
    return useContext(SquaresContext)
}

export function useFunctionsContext(){
    return useContext(FunctionsContext)
}