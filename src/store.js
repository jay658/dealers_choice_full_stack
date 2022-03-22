import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const LOAD_GAMES = 'LOAD_GAMES'
const DELETE_GAME = 'DELETE_GAME'
const LOAD_SINGLE_GAME = 'LOAD_SINGLE_GAME'
const CREATE_GAME = 'CREATE_GAME'

function gamesState(state = [], action){
    if(action.type === LOAD_GAMES){
        state = action.games
    }
    if(action.type === DELETE_GAME){
        state = state.filter(game => game.id !== action.game.id)
    }
    if(action.type === CREATE_GAME){
        state = [...state, action.game]
    }
    return state
}

function gameState(state = {}, action){
    if(action.type === LOAD_SINGLE_GAME){
        state = action.game
    }
    return state
}

const reducer = combineReducers({
    gamesState,
    gameState
})

export const createGame = (game, history)=>{
    return async(dispatch)=>{
        const response = await axios.post('/api/games', game)
        const newGame = response.data
        dispatch({
            type: CREATE_GAME,
            game:newGame
        })
        history.push(`/games/${newGame.id}`)
    }
}

export const loadSingleGame = (id)=>{
    return async(dispatch)=>{
        const response = await axios.get(`/api/games/${id}`)
        const game = response.data
        dispatch({
            type:LOAD_SINGLE_GAME,
            game:game
        })
    }
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