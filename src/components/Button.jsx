import { useState, useEffect} from "react"
import { useSquaresContext, useFunctionsContext } from "../context/SquaresProvider"

export default function MyButton(props){
    const [value, setValue] = useState('')
    const squares = useSquaresContext()
    const functions = useFunctionsContext()

    useEffect(() => {
        if (squares.squares.every((value) => value === null)){
            setValue('')
        }
    }, [squares.squares])

    function handleClick(){
        if (squares.squares[props.index] || functions.calculateWinner(squares.squares)) return
        functions.changeTurn(props.index)
        setValue(squares.turno)
    }

    return <button className="cell" onClick={handleClick}>{value}</button>
}