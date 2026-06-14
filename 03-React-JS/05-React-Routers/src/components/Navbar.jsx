import { Link } from "react-router"
const Navbar = () => {
    return (
        <div>

            <ul>
                <Link to={'/'} >
                    <li>Home</li>
                </Link>

                <Link to={'/about'} >
                    <li>About</li>
                </Link>
                <Link to={'/contact'} >
                    <li>Contact</li>
                </Link>

                <Link to={'/products'}>
                <li>Products</li>
                </Link>
                <Link to={'/Dashboard'}>
                <li>Dashboard</li>
                </Link>
            </ul>

        </div>
    )
}

export default Navbar