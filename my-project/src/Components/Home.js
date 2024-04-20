 import {useState,useEffect} from 'react';
 import Bloglist from './bloglist';
 import  axios  from 'axios';
const Form=()=>{ 
    const[blogs,setBlogs]=useState(null);
    useEffect(()=>{
        axios.get('http://localhost:4000/blogs')//axios help consume Api endpoint
        .then(res =>{setBlogs(res.data)})

        .catch(err =>console.log(err))
    },[]);
    return(
        <div className='home'>
           { blogs&& <Bloglist blogs={blogs}/> }
        </div>
    )
    
}
export default Form;
