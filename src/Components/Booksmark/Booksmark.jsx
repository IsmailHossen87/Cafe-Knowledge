import React, { useState } from 'react'
import Bookmark from '../Bookmark/Bookmark'

export default function Booksmark({BOOKmark,mark}) {
  return (
    <div className=' bg-gray-400 text-center rounded-md' >
      <div>
        <h2 className="text-2xl">Reading Time : {mark}</h2>
      </div>
      <h3 className='text-white'>Bookemark Blogs {BOOKmark.length}</h3>
        {
            BOOKmark.map(mark => <Bookmark 
            bookmark = {mark}
            ></Bookmark>)
        }
    </div>
  )
}
