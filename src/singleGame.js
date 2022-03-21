import React from 'react'
import {connect} from 'react-redux'
import {loadSingleGame} from './store'


class _singleGame extends React.Component{
    componentDidMount(){
        this.props.loadSingle(this.props.match.params.id)
    } 

    render(){
        if(!this.props.gameState.id) return null
        const game = this.props.gameState
        return(
            <div>
                {game.name} is a {game.genre} game
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadSingle: (game)=>{
            dispatch(loadSingleGame(game))
        }
    }
}

const singleGame = connect(state=>state, mapDispatchToProps)(_singleGame)

export default singleGame