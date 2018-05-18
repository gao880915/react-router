import { INPUT_CHANGE, ADD_ITEM } from './actionTypes'

const defaultState = {
	inputValue: '',
	list: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case INPUT_CHANGE: {
			return {
				inputValue: action.value,
				list: [...state.list]
			}
		}
		case ADD_ITEM: {
			return {
				inputValue: '',
				list: [...state.list, state.inputValue]
			}
		}
		default: return state
	}
}