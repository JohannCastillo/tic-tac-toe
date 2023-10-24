import { useState } from "react"
import { useSquaresContext, useSquaresClearContext, useChangeTurnContext } from "../context/SquaresProvider"

export default function MyButton(props){
    const [value, setValue] = useState('')
    const squares = useSquaresContext()
    const changeTurn = useChangeTurnContext()

    function handleClick(){
        if (squares.squares[props.index] != null) return
        changeTurn(props.index)
        setValue(squares.turno)
    }

    return <button onClick={handleClick}>{value}</button>
}