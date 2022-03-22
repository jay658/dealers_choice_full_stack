import React from 'react'
import {connect} from 'react-redux'
import {loadSingleGame} from './store'


class _SingleGame extends React.Component{
    componentDidMount(){
        this.props.loadSingle(this.props.match.params.id)
    } 

    render(){
        if(!this.props.gameState.id) return null
        const game = this.props.gameState
        return(
            <div>
                <h1>{game.name}</h1>
                {game.name} is a {game.genre} game
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadSingle: (id)=>{
            dispatch(loadSingleGame(id))
        }
    }
}

const SingleGame = connect(state=>state, mapDispatchToProps)(_SingleGame)

export default SingleGame