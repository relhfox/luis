import { Link } from 'react-router'

const Header = () => {
    return (
        <header>
            <a href='' className='logo'>Unstoppable Living</a>
            <ul>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header
