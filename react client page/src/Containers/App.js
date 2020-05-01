import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// import history from '../Components/history';
import LoginPage from './LoginPage';
import Main from './Main';

import PageLoader from '../Components/PageLoader';

import {setCookie, getCookie} from '../helpers/cookies';
import {checkLogin} from '../helpers/apiCalls';

async function checkIfLogged(){
	const token=getCookie('token');
	if (!token) {
		return null;
	}
	return await checkLogin(token);

}

class App extends Component {
	
	constructor(props) {
		super(props);
		this.handleLogin=this.handleLogin.bind(this);
		this.state={number:null,loading:true}
	}

	async componentWillMount(){
		const number=await checkIfLogged();
		console.log('having', number)
		this.setState({number, loading:false})
	}

	handleLogin(number,token){
		console.log('setting herre', number, token)
		setCookie('token',token);
		if (number)
			this.setState({number});
		
	}

	render(){
		return(
			<div>
			{this.state.loading?
				<PageLoader/>
				:
				<Router>
					<Switch>
						<Route path='/login' render={()=><LoginPage handleLogin={(number,token)=>this.handleLogin(number,token)}/>}/>
						<Route path='/' render={()=><Main number={this.state.number}/>}/>:
					</Switch>
					{this.state.number?<Redirect to='/' />:<Redirect to='/login'/>}
				</Router>
			}
			</div>)
	}
}

export default App;
