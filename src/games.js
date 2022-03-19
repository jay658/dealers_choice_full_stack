import React from 'react'
import {connect} from 'react-redux'
import { deleteGame } from './store'

const _Games = (props)=>{
    const games = props.state
    const {destroy} = props
    console.log(props)
    return(
        <div>
            {games.map(game=>{
                return(
                    <div key = {game.id}>
                        <li>{game.name} is a {game.genre} game</li>
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

const Games = connect(state=> {
    return {state}
}, mapDispatchToProps)(_Games)

export default Games