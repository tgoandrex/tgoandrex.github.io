import { Link } from "react-router-dom";

function Navbar() {

    const NavListItems = () => {
        return(
            <>
                <li className='nav-list-item'><Link to='/'>Home</Link></li>
                <li className='nav-list-item'><Link to='/about'>About</Link></li>
                <li className='nav-list-item'><Link to='/projects'>Projects</Link></li>
                <li className='nav-list-item'><Link to='/contact'>Contact</Link></li>
            </>
        )
    }

  return (
    <header>
        <nav>
            <ul className='nav-list'>
                <NavListItems />
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;