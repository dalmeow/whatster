import React, { Component } from 'react'
import { Message, Transition } from 'semantic-ui-react'
import './Flash.css';

class MessageExampleDismissibleBlock extends Component {
  constructor(props){
    super(props);
    this.state={visible:true};
    this.handleDismiss=this.handleDismiss.bind(this);
  }
  
  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
      return (
        <Transition visible={this.state.visible}
                    animation='swing down'
                    duration ={750}>
          <Message
            icon='info circle'
            color={this.props.colour?this.props.colour:'green'}
            floating
            onDismiss={this.handleDismiss}
            header={this.props.header?this.props.header:'WhatsTer'}
            content={this.props.flash}
            align='center'
            className='messageflash'
          />
        </Transition>
      )
    }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({visible:false})
    },5000)
  }

}

export default MessageExampleDismissibleBlock;