import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog ,data,handlemark}) => {
    const {author,title,cover,reading_time,img,date,hashtag,id} = blog
    return (
        <div className='border mb-10 space-y-2 '>
            <img className='p-3' src={cover} alt="" />
            <div className='flex justify-between  mx-2'>
                <div className='flex gap-2'> 
                    <img className='w-11' src={img} alt="" />
                   <div>
                   <h2 className="text-2xl">Author Name: {author}</h2>
                   <span>{date}</span>
                   </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=> data(blog)} className='text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h3 className='font-bold text-4xl'>{title}</h3>
            <p>
                {
                  hashtag.map((hash,idx) => <span key={idx} ><a href=""> {hash}</a></span>)  
                }
            </p>
            <button onClick={()=> handlemark(reading_time,id)} className='text-blue-500 underline font-bold'>Mark as read</button>
        </div>
    );
};


Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    data:PropTypes.func,
    handlemark:PropTypes.func
}
export default Blog;