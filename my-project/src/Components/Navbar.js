import React from 'react';
import NewBlogForm from './NewBlogForm';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Blog post</h2>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                        {/* Link to open the form */}
                        <a href="#">New Blog</a>
                    </li>
                </ul>
            </div>

         
        </nav>
    );
}

export default Navbar;
