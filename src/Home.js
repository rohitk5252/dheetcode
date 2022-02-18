import { useState } from "react";

const Home = () => {
 const [blogs, setBlogs] = useState([
     {title : 'Title 1', body : 'lorebkubv vubb....', author: 'A1',id:1},
     {title : 'Title 2', body : 'ls5ed6 ll....', author: 'A2',id:2},
     {title : 'Title 3', body : 'uuugugu vubb....', author: 'A3',id:3}
 ])
    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    
                </div>
                
            ))}
        </div>
    );
}
 
export default Home;