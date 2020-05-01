import React, {Component} from 'react';
import LogsComp from '../Components/Logs';

class Logs extends Component {
	
	constructor(props) {
		super(props);
		this.state={}
	}

	render(){
		return(
			<div>
				{this.props.logs?
	            	<LogsComp loading={false} logs={this.props.logs.logs}/>
	            	:
		            <LogsComp loading={true} fakecount={10}/>
	            }
			</div>)
	}
}

export default Logs;