import React from 'react';
import {Segment, Form, Button, Icon, Popup} from 'semantic-ui-react';
import './Login.css';

const login = (props)=> (
  <div className='logincontainer'>
    <Segment inverted className='segment-container'>
        <Form inverted className='form-container' onSubmit={props.handleSubmit}>
          <Form.Group widths='equal'>
            <Icon name='phone'/>
            <Popup trigger={
              <Form.Input fluid label='Whatsapp Number' name='number' placeholder='+1 1234567890' required onChange={props.handleChange}/>
            }>
              <Popup.Content>Type your Whatsapp number with your country code</Popup.Content>
            </Popup>
          </Form.Group>
          <Form.Group widths='equal'>
          <Icon name='envelope open outline'/>
          <Popup trigger={
            <Form.Input fluid label='OTP' name='otp' type='Password' placeholder='4-digit OTP' required onChange={props.handleChange}/>
          }>
            <Popup.Content>Type login in WhatsTer Chat</Popup.Content>
          </Popup>
          </Form.Group>
          <Button animated fluid type='submit' loading={props.loading} >
            <Button.Content visible>Log In</Button.Content>
            <Button.Content hidden>
              <Icon name='sign-in' />
            </Button.Content>
          </Button>
        </Form>
      </Segment>
  </div>
  )

export default login;