import React from 'react';
import { render } from 'react-dom';
import {Provider, connect} from 'react-redux'
import store, { loadGames } from './store';
import Games from './games'
import { HashRouter, Route, Link} from 'react-router-dom';
import singleGame from './singleGame'

class _App extends React.Component{
    componentDidMount(){
        this.props.load()
    }
    render(){
        return(
            <div>
                <h1>Games</h1>
                <Link to="/games">Show Games</Link>
                <Link to="/">Don't Show Games</Link>
                <Link to ="/game/create">Create a game</Link>
                <Route component ={Games} exact path = "/games"/>
                <Route component ={singleGame} exact path = "/game/:id"/>
                <Route component ={singleGame} exact path = "/game/create"/>
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