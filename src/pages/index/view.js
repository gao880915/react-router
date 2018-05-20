import React from 'react'
import { connect } from 'react-redux'
import {getChangeInputAction,getAddItemAction} from './actionCreator'

const Component =  (props) => {
	return (
		<div>
		 <input value={props.inputValue} onChange={props.handleInputChange}/>
		 <button onClick={props.handleSubmit}>提交</button>
		 <ul>
		   {
		   	  props.list.map((value,index)=>{
		   	  	return <li key={index}>{value}</li>
		   	  })
		   }
		 </ul>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.index.inputValue,
		list: state.index.list
	}
}

const DispatchToProps = (dispatch) => ({
	handleInputChange(e){
		dispatch(getChangeInputAction(e))
	},
	handleSubmit(e){
		dispatch(getAddItemAction())
	}
})

export default connect(mapStateToProps,DispatchToProps)(Component)
