import React from 'react';
const Bloglist =(props)=>{
    const blogs = props.blogs;
    const title=props.title;
    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>//
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
export default Bloglist