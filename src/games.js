import React from 'react'
import {connect} from 'react-redux'
import { deleteGame} from './store'
import {Link} from 'react-router-dom'

const _Games = (props)=>{
    const games = props.gamesState
    const {destroy} = props
    return(
        <div>
            {games.map(game=>{
                return(
                    <div key = {game.id}>
                        <li><Link to = {`/game/${game.id}`} >{game.name}</Link> is a {game.genre} game</li>
                        <button onClick = {()=>destroy(game)}>Delete Game </button>
                    </div>
                )
            })}
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        destroy: (game)=>{
            dispatch(deleteGame(game))
        }
    }
}

const Games = connect(state=>state, mapDispatchToProps)(_Games)

export default Games