import { useState } from 'react';

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const NavListItems = () => {
        return(
            <div>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </div>
        )
    }

  const handleToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header>
        <div className='flex' >
            <div id='navbar-name'>Andrew Stapleton</div>
            <nav>
                <ul id='tablet-desktop-nav'>
                    <NavListItems />
                </ul>
            </nav>
            <i id='mobile-toggle' className='fa fa-bars' onClick={handleToggle}></i>
        </div>
        <nav>
            <ul id='mobile-nav'>
                {showMobileMenu ? <NavListItems /> : null}
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;