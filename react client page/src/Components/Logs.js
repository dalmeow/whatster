import React from 'react'
import { Placeholder, Feed, Icon } from 'semantic-ui-react'
import './Logs.css';

const Message = (props) => {
	let content=[];
  if (props.loading)
  	{
  		for(let i=0;i<props.fakecount;i++){
  			content.push(
         <Placeholder key={i} fluid>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>)
  		}
	  }
    else{
      let logs = props.logs.logs;
      for(let log of logs){
        if (props.fakecount && logs.indexOf(log)===props.fakecount) {
          break;
        }
        content.push(
          <Feed key={logs.indexOf(log)}>
            <Feed.Event>
               <Feed.Label><Icon name='comments'/></Feed.Label>
               <Feed.Content content={log} />
            </Feed.Event>
          </Feed>)
      }
    }
    return(
      <div className='logscontainer'>
        {content.map(c=>c)}
      </div>
      );
}

export default Message



          