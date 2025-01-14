import { Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
         <Link to="/">Home</Link>
         <Link to="/Login">Login</Link>
         <h2>This is my first site</h2>
        </div>
    );
};

export default Header;