import {Link} from "react-router-dom"

export default function navbar(){
    return (
        <nav className="nav">
        <Link to="/" className="site-title"> <img src="./images/logostar.png" alt="bug" height={100} /></Link>
        <Link>
        <ul>
                <CustomLink className="active" to="/about">About</CustomLink>
                <CustomLink to="/product">Product</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>

        </ul>
        </Link>
        
        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const path = window.location.pathname

    return (
        <li className={path == to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}