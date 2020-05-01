import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import MessagesPage from './MessagesPage';
import MediaPage from './MediaPage';
import LogsPage from './LogsPage';

import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import history from '../Components/history';

import {getCookie, removeCookie} from '../helpers/cookies';
import {getMessages, getMedia, getLogs} from '../helpers/apiCalls'

class MainPage extends Component {
	
	constructor(props) {
		super(props);
		console.log('at MainPage', this.props.number);
		this.state={};
		this.handleLogout=this.handleLogout.bind(this);
	}

	handleLogout(){
		removeCookie('token');
		history.push('/login');
	}

	componentWillMount(){
		this.setState({flash:'Welcome to WhatsTer!'});
		history.push('/')
	}

	async componentDidMount(){
		const token = getCookie('token');
		console.log('at mounting', this.props.number)
		var messages = await getMessages(this.props.number,token);
		var media = await getMedia(this.props.number,token);
		var logs = await getLogs(this.props.number,token)

		console.log('at messages',messages);
		console.log('at logs', logs);
		console.log('at media', media)

		this.setState({messages, media, logs}); // mark this this.state.messages are null at the beginning

		setTimeout(()=>this.setState({flash:null}),8000);
	}

	render(){
		return(
			<div>
				<Navbar number={this.props.number} handleLogout={()=>this.handleLogout()}/>
				<Router history={history}>
					<Switch>
						<Route path='/' exact render={()=> <Home number={this.props.number} messages={this.state.messages} media={this.state.media} logs={this.state.logs} flash={this.state.flash}/>}/>
						<Route path={"/"+this.props.number+"/messages"} render={()=><MessagesPage number={this.props.number} messages={this.state.messages}/>} />
						<Route path={"/"+this.props.number+"/media"} render={()=><MediaPage media={this.state.media} number={this.props.number}/>} />
						<Route path={"/"+this.props.number+"/logs"} render={()=><LogsPage logs={this.state.logs}/>} />
					</Switch>
				</Router>
			</div>)
	}
}

export default MainPage;