import React, { Component } from 'react'
import store from './store'
import { getInputChangeAction,getAddItemAction } from './actionCreator'
import TodoListUI from './TodoListUI'

export default class Todolist extends Component{
	constructor(props){
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleSubmitClick = this.handleSubmitClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		store.subscribe(this.handleStoreChange)
	}
	render(){
		const { list,inputValue } = this.state
		return (
			<TodoListUI
			list={list}
			inputValue={inputValue}
			handleDelete={this.handleDelete}
			handleInputChange={this.handleInputChange}
			handleSubmitClick={this.handleSubmitClick}/>
		)
	}
	
	handleInputChange(e){
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}
	handleStoreChange(){
		this.setState(store.getState())
	}
	
	handleSubmitClick(){
		const action = getAddItemAction()
		store.dispatch(action)
	}
	handleDelete(e){
//		const index = e.target.getAttribute('data-index')
//		const action = getDeleteItemAction(index)
//		store.dispatch(action)
	}
}
