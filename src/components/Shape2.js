import React from 'react'

export default function Shape2({item}) {
  return (
    <div className='shape2'>
    <ul className='info'>
        <li>{item.name}</li>
        <li>{item.age}</li>
    </ul>
    </div>
  )
}
