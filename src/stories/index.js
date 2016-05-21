import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Spinner from '../index';

const boxStyles = {
  width: 50,
  height: 50,
  display: 'flex',
  backgroundColor: '#333',
  justifyContent: 'center',
  alignItems: 'center'
}

storiesOf('Spinner', module)
  .add('Basic', () => {
    return (
      <div style={boxStyles}>
        <Spinner/>
      </div>
    )
  })
  .add('Large', () => (
    <div style={{...boxStyles, width: 80, height: 80}}>
      <Spinner width={40}/>
    </div>
  ))
  .add('gray', () => (
    <div style={{...boxStyles, backgroundColor: '#eee'}}>
      <Spinner width={20} type="gray"/>
    </div>
  ))
