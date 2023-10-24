import { useState, useEffect} from "react"
import { useSquaresContext, useFunctionsContext } from "../context/GameProvider"

export default function Cell(props){
    const [value, setValue] = useState('')
    const squares = useSquaresContext()
    const functions = useFunctionsContext()
    
    useEffect(() => {
        if (squares.squares.every((value) => value === null)){
            setValue('')
        }
        
        setValue(squares.history[squares.historyIndex][props.index])
        
    }, [squares.squares, squares.historyIndex])

    function handleClick(){
        if (squares.squares[props.index] || functions.calculateWinner(squares.squares)) return
        functions.changeTurn(props.index)
    }

    return <button className="cell" onClick={handleClick}>{value}</button>
}