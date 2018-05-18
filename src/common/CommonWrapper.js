import React, { Component } from 'react'

export default class CommonWrapper extends Component{
	render(){
		return (
			<div>
			  <div>header</div>
			  <div>{this.props.children}</div>
			</div>
		)
	}
}
