import {CHANGE_INPUT,ADD_ITEM} from './actionTypes'
export const getChangeInputAction = (value)=>({
	type:CHANGE_INPUT,
	value:value
})

export const getAddItemAction = ()=>({
	type:ADD_ITEM
})
