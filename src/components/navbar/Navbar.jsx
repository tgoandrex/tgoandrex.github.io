function Navbar() {

    const NavListItems = () => {
        return(
            <>
                <li className='nav-list-item'><a href='/'>Home</a></li>
                <li className='nav-list-item'><a href='/about'>About</a></li>
                <li className='nav-list-item'><a href='/projects'>Projects</a></li>
                <li className='nav-list-item'><a href='/contact'>Contact</a></li>
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