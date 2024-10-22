import React from 'react'

export default function Bookmark({bookmark}) {
    const {title} = bookmark
  return (
    <div className='border p-3 rounded-md bg-stone-300 m-3'>
      <h2>{title}</h2>
    </div>
  )
}
