import { INPUT_CHANGE, ADD_ITEM } from './actionTypes'

export const getInputChangeAction = (value) => ({
	type: INPUT_CHANGE,
	value: value
})

export const getAddItemAction = () => ({
	type: ADD_ITEM
})