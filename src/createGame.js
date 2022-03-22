import React from 'react'
import {connect} from 'react-redux'
import {createGame} from './store'

class _CreateGame extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            genre:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev){
        ev.preventDefault()
        this.props.create({...this.state})
    }

    handleChange(ev){
        const change = {}
        change[ev.target.name] = ev.target.value
        this.setState(change)
    }
    
    render(){
        const {name, genre} = this.state
        const {handleSubmit, handleChange} = this
        return(
            <div>
                <form onSubmit ={handleSubmit}>
                    <input placeholder = "Game name"  name = 'name' value = {name} onChange = {handleChange}/>
                    <select name = 'genre' onChange = {handleChange}>
                        <option value = ''>Select Genre</option>
                        <option value = 'fps'>fps</option>
                        <option value = 'moba'>moba</option>
                        <option value = 'rpg'>rpg</option>
                        <option value = 'rts'>rts</option>
                    </select>
                    <button disabled = {!name || !genre}>Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, {history})=>{
    return{
        create: (game)=>{
            dispatch(createGame(game, history))
        }
    }
}

const CreateGame = connect(null, mapDispatchToProps)(_CreateGame)

export default CreateGame