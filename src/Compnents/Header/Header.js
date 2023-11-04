import React, { useEffect, useState } from 'react';
import logo from '../../Images/logo.png';
import { links } from '../../assets/Data';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import {FaStream} from 'react-icons/fa';
import './header.css';

const Header = () => {
  const [headerScroll, setHeaderScroll] = useState();
  const [showMenu, setShowMenu] = useState(false);

  const changeHeader = (() => {
   window.scrollY >= 100 ? setHeaderScroll(true) : setHeaderScroll(false);
  });

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);
  }, []);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  }

  return (
    <header className={`${headerScroll ? 'scroll-header' : ''} header`}>
      <nav className="nav container">
        <Link href="/home" onClick={scrollTop} className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img" />
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''}nav__menu`}>
          <ul className="nav__list">
            {links.map(({name, path}, index) => {
              return (
                <li className="nav__item" key={index}>
                  <Link
                   spy={true}
                   smooth={true}
                   offset={50}
                   hashSpy={true}
                   duration={500} 
                   to={path} 
                   className="nav__link" onClick={() => setShowMenu(!showMenu)}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <FaStream/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
