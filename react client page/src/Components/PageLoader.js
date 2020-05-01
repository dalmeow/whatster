import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';

import './PageLoader.css';

function PageLoader(){
	return(
		<div className='loadercontainer'>
			<Dimmer active>
				<Loader size='massive'>Loading ...</Loader>
			</Dimmer>
		</div>)
}

export default PageLoader;