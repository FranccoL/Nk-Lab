import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container-header">
                <div className="headAll">
                    <Link to="/">
                        <img src="/LOGOnk.svg" alt="logo" className="imgHeader" />
                    </Link>

                    <nav className="navDesktop">
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/exames">Exames</Link></li>
                            <li><Link to="/sobrenos">Sobre Nós</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>

                    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <nav className={`navMobile ${isOpen ? 'open' : ''}`}>
                        <button className="close-btn" onClick={toggleMenu}>✖</button>
                        <ul>
                            <li><Link to="/" onClick={toggleMenu}>Início</Link></li>
                            <li><Link to="/exames" onClick={toggleMenu}>Exames</Link></li>
                            <li><Link to="/sobrenos" onClick={toggleMenu}>Sobre Nós</Link></li>
                            <li><Link to="/contato" onClick={toggleMenu}>Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
