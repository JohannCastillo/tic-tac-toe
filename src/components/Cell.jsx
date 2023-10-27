import { useState, useEffect, useRef} from "react"
import { useSquaresContext, useFunctionsContext } from "../context/GameProvider"

export default function Cell(props){
    const [value, setValue] = useState('')
    const [winnerCell, setWinnerCell] = useState('')
    
    const firstRender = useRef(true)

    const squares = useSquaresContext()
    const functions = useFunctionsContext()
    const currentHistory = squares.history[squares.historyIndex]
    
    useEffect(() => {      
        if (currentHistory.every((value) => value === null)){
            if(firstRender.current) return 

            setValue('')
            setWinnerCell('')
            return 
        }  

        firstRender.current = false
    
        setValue(currentHistory[props.index])
        // si hay ganador pintar celdas en líneas ganadoras
        if (squares.winner && squares.winner.some(value => value === props.index))
            setWinnerCell(squares.COLORS.winner)
        // si cambia el índice de historial para ver una jugada anterior se despintan las celdas 
        if(squares.historyIndex < squares.history.length-1)
            setWinnerCell('')
    }, [squares.historyIndex])

    function handleClick(){
        if (currentHistory[props.index] || squares.winner || squares.historyIndex < squares.history.length-1) return
        functions.changeTurn(props.index)
    }

    return <button className={"cell "+props.className} onClick={handleClick} style={{backgroundColor: winnerCell}}>{value}</button>
}