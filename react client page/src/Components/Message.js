import React from 'react'
import { Placeholder, Segment, Label, Button } from 'semantic-ui-react'
import './Message.css';

const Message = (props) => {
  let content = [];
  if (props.loading)
  {
  	for(let i=0;i<props.fakecount;i++)
  	{
  		content.push(
  			<Placeholder key={i} fluid>
		  	  <Placeholder.Header image>
		  	    <Placeholder.Line />
		  	    <Placeholder.Line />
		  	  </Placeholder.Header>
		  	</Placeholder>);
  	}
  }
  else{
    let messages=props.messages.messages;
  	for(let message of messages){
      if (props.fakecount && messages.indexOf(message)===props.fakecount) {
        break;
      }
  		content.push(
  			<Segment raised key={messages.indexOf(message)}>
        {props.handleDelete?
        <Label as={Button} animated color='yellow' ribbon='right' onClick={e=>props.handleDelete(message)}>
            <Button.Content hidden>DELETE</Button.Content>
            <Button.Content visible>Message: {messages.indexOf(message)+1}</Button.Content>
           </Label>:
           null}
          
				  <p>{message}</p>
  			</Segment>)
  	}
  }
  return(
  	<div className='messagecontainer'>
  		{content.map(c=>c)}
  	</div>)
}

export default Message;