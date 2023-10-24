import { useState, useEffect} from "react"
import { useSquaresContext, useFunctionsContext } from "../context/GameProvider"

export default function Cell(props){
    const [value, setValue] = useState('')
    const [winnerCell, setWinnerCell] = useState('')

    const squares = useSquaresContext()
    const functions = useFunctionsContext()
    
    useEffect(() => {
        if (squares.squares.every((value) => value === null)){
            setValue('')
            setWinnerCell('')
        }
    
        if(squares.winner) 
            if(squares.winner.some(value => value === props.index))
                setWinnerCell('#0096c0')

        setValue(squares.history[squares.historyIndex][props.index])
        
    }, [squares.squares, squares.historyIndex, squares.winner])

    function handleClick(){
        if (squares.squares[props.index] || squares.winner) return
        functions.changeTurn(props.index)
    }

    return <button className={"cell "+props.className} onClick={handleClick} style={{backgroundColor: winnerCell}}>{value}</button>
}