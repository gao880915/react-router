import { createStore,combineReducers } from 'redux'
import { reducer as indexReducer } from '../pages/index'

const reducer = combineReducers({
	index:indexReducer
})

const store = createStore(reducer)

export default store