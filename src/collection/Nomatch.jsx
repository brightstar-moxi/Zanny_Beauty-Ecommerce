import React from 'react'

export default function Nomatch() {
  return (
    <div className='text-white text-center mt-5'>
        <h2 style={{fontWeight:"bolder", fontSize:"350%"}}>404 Error</h2>
        <h1 style={{fontWeight:"bolder", fontSize:"350%"}}>Page not found</h1>
        <p style={{fontSize:"120%"}}>Click <a href='/' style={{color:"darkblue"}}> here </a> to go back home</p>
        </div>
  )
}
