import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const LOAD_GAMES = 'LOAD_GAMES'
const DELETE_GAME = 'DELETE_GAME'

function reducer(state = [], action){
    if(action.type === LOAD_GAMES){
        state = action.games
    }
    if(action.type === DELETE_GAME){
        console.log(action)
        state = state.filter(game => game.id !== action.game.id)
    }
    return state
}

export const loadGames = () =>{
    return async(dispatch)=>{
        const response = await axios.get('/api/games')
        const data = response.data
        dispatch({
            type:LOAD_GAMES,
            games:data
        })
    }
}

export const deleteGame = (game) =>{
    return async(dispatch)=>{
        await axios.delete(`/api/games/${game.id}`)
        dispatch({
            type:DELETE_GAME,
            game
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store