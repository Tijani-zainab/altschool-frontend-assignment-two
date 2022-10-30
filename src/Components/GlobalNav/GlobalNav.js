import './GlobalNav.scss';
import { HashLink } from 'react-router-hash-link';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Layout = ({ children }) => {

    const [isOpen, setOpen] = useState(false);

    let hashLinks = [
        { to: '/#home', label: 'Home' }, 
        { to: '/#about', label: 'About' },
        { to: '/#contact', label: 'Contact' },
        { to: '/#users', label: 'Users' }
    ];


    return (
        <div className='layout'>

            <header className='header'>
                <h1>Jani.Co</h1>
            </header>

            <nav className='nav'>
                <ul className='nav-links'>
                    {hashLinks.map((link, index) => (
                        <li key={index} className='nav-link'>
                            <HashLink className='hashlink-link' to={link.to} activeClassName='active' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>{link.label}</HashLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='hamburger'>           
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
            {children}
        </div>
    );
}

export default Layout;