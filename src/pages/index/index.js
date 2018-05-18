import React, { Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component{
	render(){
		return (
			<div>
				<div>Index</div>
				<Link to='/' >首页</Link>
				<Link to='/list/hello' >列表页</Link>
			</div>
		)
	}
	
	componentDidMount(){
		this.props.router.setRouteLeaveHook(
			this.props.route,
			this.routerWillLeave
		)
	}
	routerWillLeave(){
		return '您真的要离开吗'
	}
}
