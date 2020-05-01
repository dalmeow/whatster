import React, {Component} from 'react';

import MediaComp from '../Components/Media';
import Flash from '../Components/Flash';

import {deleteMedia} from '../helpers/apiCalls';
import {getCookie} from '../helpers/cookies';

class MediaPage extends Component {
	
	constructor(props) {
		super(props);
		this.state={flash:null};
		this.handleDelete=this.handleDelete.bind(this);
	}

	async handleDelete(media){
		const token = getCookie('token');
		let a = await deleteMedia(this.props.number, token, media);
		const flash=<Flash flash={"We have removed that from your account... Next time when you come, you won't see that media"} header={a.flash} colour='teal'/>;
		this.setState({flash});
		setTimeout(()=>this.setState({flash:null}),
			7000);
	}

	render(){
		return(
			<div>
				{this.state.flash}
				{this.props.media?
						<MediaComp loading={false} media={this.props.media.media} handleDelete={this.handleDelete}/>
					:
						<MediaComp loading={true} fakecount={16}/>
				}
			</div>)
	}
}

export default MediaPage;