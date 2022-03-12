import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            Sorry!!! Cannot find what you are looking for <br />
            <Link to='/'>Back To Home Page</Link>
        </div>
     );
}
 
export default NotFound;