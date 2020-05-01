import React, {Component} from 'react';

import Message from '../Components/Message';
import Flash from '../Components/Flash';

import {deleteMessage}  from '../helpers/apiCalls';
import {getCookie} from '../helpers/cookies';

class Messages extends Component {
	// recieves number as prop
	constructor(props) {
		super(props);
		this.state={flash:null};
		this.handleDelete=this.handleDelete.bind(this);
	}

	async handleDelete(message){
		const token = getCookie('token');
		const a = await deleteMessage(this.props.number,token,message);
		const flash=<Flash flash={"We have removed that from your account... Next time when you come, you won't see that media"} header={a.flash} colour='teal'/>
		this.setState({flash});
		setTimeout(()=>this.setState({flash:null}),
			7000)
	}

	render(){
		return(
			<div>
			{this.state.flash}
			{this.props.messages?
				<Message loading={false} messages={this.props.messages.messages} handleDelete={this.handleDelete}/>
				:
				<Message loading={true} fakecount={4} />
			}
			</div>)
	}
}

export default Messages;