import { createContext, useState, useContext } from "react"

const SquaresContext = createContext()
const FunctionsContext = createContext()
const SQUARES_INITIAL = Array(9).fill(null)

export function SquaresProvider({children}){
    const [squares, setSquares] = useState(SQUARES_INITIAL)
    const [turno, setTurno] = useState('X')
    const [winner, setWinner] = useState(null)

    function changeTurn(i){
        setTurno(turno == 'X' ? 'O' : 'X')
        const newSquares = [...squares]
        newSquares[i] = turno
        setSquares(newSquares)
        var isWinner = calculateWinner(newSquares)
        if (isWinner) setWinner(isWinner)
      }

    function clearBoard(){
        setSquares(SQUARES_INITIAL)
        setTurno('X')
        setWinner(null)
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
            return squares[a]
          }
        }
        return null;
      }

    return (
        //return squares and turno in value
        <SquaresContext.Provider value={{squares, turno, winner}}>
            <FunctionsContext.Provider value={{clearBoard, changeTurn, calculateWinner}}>
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