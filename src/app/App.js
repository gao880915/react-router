import React, { Component } from 'react'
import { Router,Route,browserHistory,IndexRoute,Redirect } from 'react-router'
import CommonWrapper from '../common/CommonWrapper'
import Index from '../pages/index/'
import List from '../pages/list/'

export default class App extends Component {
	render(){
		return (
			<div>
			  <Router history={browserHistory}>
			    <Route path="/" component={CommonWrapper}>
			      <IndexRoute onEnter={this.beforeEnter} component={Index}></IndexRoute>
			      <Route path="list/(:name)" component={List}></Route>
			      <Redirect from="abc(/:name)" to="list/(:name)"></Redirect>
			    </Route>
			  </Router>
			</div>
		)
	} 
	
	beforeEnter(){
		alert(123)
	}
}
