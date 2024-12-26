import React from 'react'

export default function Shape1({item}) {
  return (
    <div className='shape1'>
    <ul className='info'>
        <li>{item.name}</li>
        <li>{item.age}</li>
    </ul>
    </div>
  )
}
