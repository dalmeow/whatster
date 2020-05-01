import React from 'react'

import { Menu, Icon, Button, Transition, Popup, Responsive } from 'semantic-ui-react';
import './Navbar.css';

import {BrowserRouter as Router} from 'react-router-dom';
import history from './history';


function Navbar(props) {
    let numberonly=props.number?props.number.split(':')[1]:'user';
    let sidebar=(
      <Router>
      <Transition.Group animation='fade right' duration={1000}>
        <Menu inverted vertical>
          <Menu.Item
            name='Home'
            onClick={()=>history.push(`/`)}
          />
          <Menu.Item
            name='Messages'
            onClick={()=>history.push(`/${props.number}/messages`)}
          />
          <Menu.Item
            name='Media'
            onClick={()=>history.push(`/${props.number}/media`)}
          />
          <Menu.Item
            name='Logs'
            onClick={()=>history.push(`/${props.number}/logs`)}
          />
        </Menu>
      </Transition.Group>
      </Router>)
    return (
      <div>
        
        <Menu inverted>
          <Menu.Item>
            <Popup
              trigger={<Icon name='sidebar'/>}
              content={sidebar}
              on='click'
              position='bottom left'
              size='huge'
              pinned
            />
          </Menu.Item>
          <Menu.Item onClick={()=>history.push('/')}>
            <Icon name='wechat' size='big'/>
            WhatsTer
          </Menu.Item>

          <Menu.Menu position='right'>
            <Responsive minWidth={768}>
            <Menu.Item>
              <em>Welcome, {numberonly}</em>
            </Menu.Item>
            </Responsive>
            <Menu.Item>
              <Button animated='fade' color='orange' onClick={props.handleLogout}>
                <Button.Content visible>Logout</Button.Content>
                <Button.Content hidden>You sure?</Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
}


export default Navbar;