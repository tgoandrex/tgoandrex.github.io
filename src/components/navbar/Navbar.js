import { useState } from 'react';

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const NavListItems = () => {
        return(
            <div>
                <li className='nav-list-item'><a href='#about'>About</a></li>
                <li className='nav-list-item'><a href='#skills'>Skills</a></li>
                <li className='nav-list-item'><a href='#projects'>Projects</a></li>
                <li className='nav-list-item'><a href='#contact'>Contact</a></li>
            </div>
        )
    }

  const handleToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header>
        <div className='flex'>
            <div className='navbar-name'>Andrew Stapleton</div>
            <nav>
                <ul className='tablet-desktop-nav'>
                    <NavListItems />
                </ul>
            </nav>
            <i className='mobile-toggle fa fa-bars' onClick={handleToggle}></i>
        </div>
        <nav className={showMobileMenu ? 'mobile-nav active': 'mobile-nav'}>
            <ul>
                {showMobileMenu ? <NavListItems /> : null}
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;