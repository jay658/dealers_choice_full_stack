import React from 'react';
import { render } from 'react-dom';
import {Provider, connect} from 'react-redux'
import store, { loadGames } from './store';
import Games from './games'

class _App extends React.Component{
    componentDidMount(){
        this.props.load()
    }
    render(){
        const {state} = this.props
        return(
            <div>
                <h1>Games</h1>
                <Games/>
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

render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'));