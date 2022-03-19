import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const LOAD_GAMES = 'LOAD_GAMES'

function reducer(state = [], action){
    if(action.type === LOAD_GAMES){
        state = action.games
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

const store = createStore(reducer, applyMiddleware(thunk))

export default store