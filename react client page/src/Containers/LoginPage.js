import React, {Component} from 'react';

import Login from '../Components/Login';
import Flash from '../Components/Flash';

import {login} from '../helpers/apiCalls';

class LoginPage extends Component {
	
	constructor(props) {
		super(props);
		this.state={flash:null, buttonloading:false};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event)
	{
		//target names are number and otp
		// this.setState({[event.target.name]:event.target.value});

		if (event.target.name==='number') {
			this.setState({number:'whatsapp:'+event.target.value})
		}
		else{
			this.setState({otp:event.target.value})
		}
	}

	handleSubmit= async function(event)
	{
		this.setState({buttonloading:true})

		let data=await login(this.state.number,this.state.otp);

		console.log('at login page',data)
		if ('flash' in data) {
			this.setState({flash:data.flash, buttonloading:false});
		}
		if ('token' in data && data.token) {
			console.log(data.token, 'at token')
			this.props.handleLogin(this.state.number,data.token);
		}
	}

	render(){
		let flash=null;
		if (this.state.flash) {
			flash=<Flash flash={this.state.flash} header={'Oops!'} colour={'red'}/>;
			setTimeout(()=>this.setState({flash:null}),7000)
		}
		return(
			<div>
				{flash}
				<Login
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				loading={this.state.buttonloading}
				/>
			</div>
		);
	}
}

export default LoginPage;