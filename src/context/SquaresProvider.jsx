import { createContext, useState, useContext } from "react"

const SquaresContext = createContext()
const SquaresClearContext = createContext()
const ChangeTurnContext = createContext()

const SQUARES_INITIAL = Array(9).fill(null)
export function SquaresProvider({children}){
    const [squares, setSquares] = useState(SQUARES_INITIAL)
    const [turno, setTurno] = useState('X')

    function changeTurn(i){
        setTurno(turno == 'X' ? 'O' : 'X')
        const newSquares = [...squares]
        newSquares[i] = turno
        setSquares(newSquares)
      }

      function clearBoard(){
        setSquares(INITIAL_ARRAY)
        setTurno('X')
        console.log("limpiadnos")
      }

    return (
        //return squares and turno in value
        <SquaresContext.Provider value={{squares, turno}}>
            <ChangeTurnContext.Provider value={changeTurn}>
            <SquaresClearContext.Provider value={clearBoard}>
                {children}
            </SquaresClearContext.Provider>
            </ChangeTurnContext.Provider>
        </SquaresContext.Provider>    
    );
}


export function useSquaresContext(){
    return useContext(SquaresContext)
}

export function useSquaresClearContext(){
    return useContext(SquaresClearContext)
}

export function useChangeTurnContext(){
    return useContext(ChangeTurnContext)
}