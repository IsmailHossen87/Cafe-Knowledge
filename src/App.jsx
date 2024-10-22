import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Booksmark from "./Components/Booksmark/Booksmark"
import Header from "./Components/Header/Header"

function App() {
  const [bookmark,setBookmark] = useState([])
  const [mark,setmark] = useState(0)
  const handlledata = (data) =>{
    const newArray = [...bookmark,data]
    setBookmark(newArray)
  }
  const handleMark = (readingmark,ID)=>{
    setmark(mark + readingmark)
// REMOVE book mark
    const remaing = bookmark.filter(book => book.id !== ID)
    setBookmark(remaing)
 

  }
  return (
    <>
    <section className="max-w-screen-xl mx-auto">
      <Header></Header>
      <div className="grid grid-cols-3">
       <Blogs
       dataHandle ={handleMark}
       datapase = {handlledata}
       ></Blogs>
       <Booksmark 
       mark ={mark}
      BOOKmark={bookmark}
       ></Booksmark>
     </div>
    </section>
   
    
    </>
  )
}

export default App
