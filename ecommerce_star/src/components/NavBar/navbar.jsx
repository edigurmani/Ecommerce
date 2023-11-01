import { Link } from "react-router-dom"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const navbar = () => {
    return (
        <nav className="nav">
            <div className="wrapper">
                <div className="leftNav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="centerNav">
                    <Link to="/" className="site-title"> <img src="./images/logostar.png" alt="bug" height={100} /></Link>
                </div>
                <div className="rightNav">
                    <SearchIcon />
                    <PersonOutlineIcon />
                    <div>
                        <LocalMallIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>



        </nav>
    )
}

export default navbar