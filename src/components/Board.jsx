import MyButton from "./Button";
import { useSquaresContext, useFunctionsContext } from "../context/SquaresProvider"
function Board(){

    const game = useSquaresContext()
    const functions = useFunctionsContext()
    return (
        <>
            <article>
                <h4>Siguiente turno: {game.turno}</h4>
                <div className="board">
                    <MyButton key={0} index={0}></MyButton>
                    <MyButton key={1} index={1}></MyButton>
                    <MyButton key={2} index={2}></MyButton>
                    <MyButton key={3} index={3}></MyButton>
                    <MyButton key={4} index={4}></MyButton>
                    <MyButton key={5} index={5}></MyButton>
                    <MyButton key={6} index={6}></MyButton>
                    <MyButton key={7} index={7}></MyButton>
                    <MyButton key={8} index={8}></MyButton>
                </div>
                <button className="button" onClick={functions.clearBoard}>Nuevo juego</button>
            </article>
            <aside className="aside">
                <h3>Movimientos {'('+game.squares.filter((value) => value !== null).length+')'} </h3>
                {game.squares.every((value) => value === null) ? (
                    <>
                        <small>No se han registrado movimientos</small>
                    </>
                ) :  (
                    <>
                        {/* <ul>
                            <li key={0}>uwu</li>
                        </ul> */}
                        {game.winner != null && (<><strong style={{color: 'green', fontSize: '1.5rem'}}>Ganador {game.winner}</strong></>)}
                    </>
                )}
            </aside>
        </>
    )
}

export default Board