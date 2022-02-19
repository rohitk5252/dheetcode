import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlogs] = useState([
     {title : 'Title 1', body : 'lorebkubv vubb....', author: 'A1',id:1},
     {title : 'Title 2', body : 'ls5ed6 ll....', author: 'A2',id:2},
     {title : 'Title 3', body : 'uuugugu vubb....', author: 'A3',id:3}
 ])
    return (  
        <div className="home">
          <BlogList  blogs={blogs} title="New blog"/>
        </div>
    );
}
 
export default Home;