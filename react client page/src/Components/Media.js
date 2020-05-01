import React from 'react'
import { Placeholder, Icon, Grid, Label, Button } from 'semantic-ui-react';
import './Media.css';

const Media = (props) =>{
	let content=[];
	if (props.loading) {
		for(let i=0;i<props.fakecount;i++){
			content.push(
				<Grid.Column key={i} mobile={8} tablet={6} computer={4}>
				  <Placeholder style={{ height: 100, width: 100 }}>
				    <Placeholder.Image />
				  </Placeholder>
				</Grid.Column>);
		}
	}
	else{
		let files = props.media.media;
		for(let file of files)
		{
			if (props.fakecount && files.indexOf(file)===props.fakecount) {
				break;
			}
			content.push(
				<Grid.Column key={file} mobile={8} tablet={6} computer={4}>
					{props.handleDelete?
					<Label as={Button} animated color='yellow' ribbon='right' onClick={e=>props.handleDelete(file)}>
						<Button.Content hidden>DELETE</Button.Content>
						<Button.Content visible>File : {files.indexOf(file)+1}</Button.Content>
					</Label>
					:
					null}
					<a href={file} target='_blank' rel='noopener noreferrer'><Icon name='folder' size='massive'/></a>
					
				</Grid.Column>);
		}
	}
	return(
		<div className='mediacontainer'>
			<Grid divided>
				{content.map(c=>c)}
			</Grid>
		</div>
	)
}

export default Media