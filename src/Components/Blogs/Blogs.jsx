import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog'
export default function Blogs({datapase,dataHandle}) {
    const [blogs,setBlogs]= useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div className='col-span-2'>
      {
        blogs.map(data => <Blog
        handlemark={dataHandle}
        key={data.id}
        data = {datapase}
        blog ={data}
        ></Blog>)
      }
    </div>
  )
}
Blogs.propTypes ={
    datapase: PropTypes.func.isRequired,
    dataHandle:PropTypes.func
}