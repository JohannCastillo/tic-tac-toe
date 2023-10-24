import { createContext, useState, useContext } from "react"

const SquaresContext = createContext()
const FunctionsContext = createContext()

export function GameProvider({children}){
    const INITIAL_STATES={
        squares: Array(9).fill(null),
        turno: 'X',
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
                turno: prevState.turno == 'X' ? 'O' : 'X',
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
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i]
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
        <SquaresContext.Provider value={{...state, movementsVisibility}}>
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