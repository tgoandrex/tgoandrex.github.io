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
            <div id='navbar-name'>Andrew Stapleton</div>
            <nav>
                <ul id='tablet-desktop-nav'>
                    <NavListItems />
                </ul>
            </nav>
            <i id='mobile-toggle' className='fa fa-bars' onClick={handleToggle}></i>
        </div>
        <nav id='mobile-nav' className={showMobileMenu ? 'active': ''}>
            <ul>
                {showMobileMenu ? <NavListItems /> : null}
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;