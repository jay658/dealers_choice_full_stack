import React from 'react'
import {connect} from 'react-redux'

const _Games = (props)=>{
    const games = props.state
    return(
        <div>
            {games.map(game=>{
                return(
                    <li key = {game.id}>{game.name} is a {game.genre} game</li>
                )
            })}
        </div>
    )
}

const Games = connect(state=> {
    return {state}
})(_Games)

export default Games