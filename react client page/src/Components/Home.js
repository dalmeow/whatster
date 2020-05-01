import React, {Component} from 'react';
import {Grid, Icon, Segment, Button} from 'semantic-ui-react';

import './Home.css';

import Message from './Message';
import Media from './Media';
import Logs from './Logs';
import Flash from './Flash';

import history from './history'

class HomePage extends Component {
	is_Mounted=false;

	constructor(props) {
		super(props);
		this.state={loading:true};
	}

	componentDidMount(){
		this.is_Mounted=true;
	}
	componentWillUnmount(){
		this.is_Mounted=false;
	}

	render(){
		return (
			<div className='homecontainer'>
				{this.props.flash?<Flash flash={this.props.flash}/>:null}
			    <Grid columns={2} divided doubling>
			        <Grid.Row stretched>
			          <Grid.Column>
			            <Segment>
			            	<strong>Your Messages</strong>
			            	{this.props.messages?
			            		<div>
			            			<Message loading={false} fakecount={4} messages={this.props.messages.messages}/>
			            			<Button secondary floated='right' onClick={()=>history.push(`/${this.props.number}/messages`)}>SHOW MORE</Button>
			            		</div>
			            		:
			            		<div>
			            			<Message loading={true} fakecount={4} />
			            			<Button secondary circular loading={true} floated='right'><Icon name='circle'/></Button>
			            		</div>
			            	}
			            </Segment>
			            <Segment>
			            	<strong>Your Media</strong>
			            	{this.props.media?
			            		<div>
			            			<Media loading={false} media={this.props.media.media} fakecount={8}/>
			            			<Button secondary floated='right' onClick={()=>history.push(`/${this.props.number}/media`)}>SHOW MORE</Button>
			            		</div>
			            		:
			            		<div>
			            			<Media loading={true} fakecount={8}/>
			            			<Button secondary circular loading={true} floated='right'><Icon name='circle'/></Button>
			            		</div>
			            	}
			            	
			            	
			            </Segment>
			          </Grid.Column>
			          <Grid.Column>
			            <Segment>
				            <strong>Your Activity</strong>
				            {this.props.logs?
				            	<div>
				            	<Logs loading={false} fakecount={10} logs={this.props.logs.logs}/>
				            		<Button secondary floated='right' onClick={()=>history.push(`/${this.props.number}/logs`)}>SHOW MORE</Button>
				            	</div>
				            	:
				            	<div>
					            	<Logs loading={true} fakecount={10}/>
					            	<Button secondary circular loading={true} floated='right'><Icon name='circle'/></Button>
					            </div>
				            }
				            </Segment>
			          </Grid.Column>
			        </Grid.Row>
		        </Grid>
	        </div>);
	}
}

export default HomePage;