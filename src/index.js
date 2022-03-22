import React from 'react';
import { render } from 'react-dom';
import {Provider, connect} from 'react-redux'
import store, { loadGames } from './store';
import Games from './games'
import { HashRouter, Route, Link} from 'react-router-dom';
import SingleGame from './singleGame'
import CreateGame from './createGame'


class _App extends React.Component{
    componentDidMount(){
        this.props.load()
    }
    render(){
        return(
            <div>
                <h1>Games</h1>
                <div>
                    <Link to="/games">Show All Games</Link>
                </div>
                <div>
                    <Link to="/">Hide Games</Link>
                </div>
                <div>
                    <Link to = '/game/create'>Create a game</Link>
                </div>
                <Route component ={Games} exact path = "/games"/>
                <Route component ={CreateGame} exact path = "/game/create"/>
                <Route component ={SingleGame} exact path = "/games/:id"/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {state}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        load: ()=>{
            dispatch(loadGames())
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App)

render(<Provider store = {store}><HashRouter><App /></HashRouter></Provider>, document.querySelector('#root'));