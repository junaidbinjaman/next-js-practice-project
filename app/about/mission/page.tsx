'use client';
import React from 'react'

function Mission() {
  return (
    <div>
      <div>Mission Page</div>

      <div className='mt-5'>
        <button onClick={():void => console.log('Hello, World')}>Click here</button>
      </div>
    </div>
  )
}

export default Mission