import Cell from "./Cell";
import Sidebar from "./Sidebar";
import { useSquaresContext, useFunctionsContext } from "../context/GameProvider"

function Board() {

    const game = useSquaresContext()
    const functions = useFunctionsContext()

    return (
        <>
            <article>
                {game.winner != null ?
                    (
                        <h4 className="stateMessage winner">Ganador: {game.winner}</h4>
                    ) : (
                        <>
                            {game.squares.every((value) => value !== null) ? (
                                <h4 className="stateMessage draw"> Empate </h4>
                            ) : (
                                <h4 className="stateMessage">Siguiente turno: {game.turno}</h4>
                            )}
                        </>
                    )
                }
                <div className="board">
                    <Cell key={0} index={0} className="border-top border-left"/>
                    <Cell key={1} index={1} className="border-top"/>
                    <Cell key={2} index={2} className="border-top border-right"/>
                    <Cell key={3} index={3} className="border-left"/>
                    <Cell key={4} index={4} />
                    <Cell key={5} index={5} className="border-right"/>
                    <Cell key={6} index={6} className="border-bottom border-left"/>
                    <Cell key={7} index={7} className="border-bottom"/>
                    <Cell key={8} index={8} className="border-bottom border-right"/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button className="button" onClick={functions.clearBoard}>Nuevo juego</button>
                    <button className="button" onClick={functions.toggleMovsVisibility} style={{ visibility: game.movementsVisibility == '' ? 'hidden' : ''  }}> Ver moviminetos </button>
                </div>
            </article>

            <Sidebar
                visibility={game.movementsVisibility}
                toggleMovsVisibility={functions.toggleMovsVisibility}
                title={'Movimientos (' + game.squares.filter((value) => value !== null).length + ')'}
                content={game.squares.every((value) => value === null) ? (
                    <>
                        <small>No se han realizado movimientos</small>
                    </>
                ) : (
                    <>
                        <ul style={{ width: '80%' }}>
                            {
                                game.history.slice(1).map((value, index) => (
                                    <li key={crypto.randomUUID()}>
                                        <button className="historyButton" onClick={() => functions.getHistory(index + 1)}>
                                            Movimiento {index + 1}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                )}
            />
        </>
    )
}

export default Board