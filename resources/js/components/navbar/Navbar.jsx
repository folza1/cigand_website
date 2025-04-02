import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { scrollToOutlet } from '../utils/scrollToOutlet';

const Navbar = () => {
  // Állapot a legördülő menük nyitásához
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // Mobil menü állapot
  const [isClosing, setIsClosing] = useState(false);  // Bezárás animáció állapota
  const dropdownRef = useRef([]);
  const [isMobileSubMenu1Open, setIsMobileSubMenu1Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu1Closing, setIsSubmenu1Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu2Open, setIsMobileSubMenu2Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu2Closing, setIsSubmenu2Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu3Open, setIsMobileSubMenu3Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu3Closing, setIsSubmenu3Closing] = useState(false);  // Bezárás animáció állapota




  // Eseménykezelő a legördülő menü nyitásához
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Az eseménykezelő, ami figyeli a kattintásokat kívül
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ellenőrizzük, hogy a kattintás nem a dropdown menüben történt
      if (dropdownRef.current[openDropdown] && !dropdownRef.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);  // Bezárjuk a legördülő menüt
      }
    };

    // Hozzáadjuk az eseménykezelőt
    document.addEventListener("mousedown", handleClickOutside);

    // Tisztítjuk az eseménykezelőt, amikor a komponens eltűnik
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Mobil menü kezelése
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Ha a menü nyitva van, akkor először indítjuk az animációt
      setIsClosing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileMenuOpen(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu1 = () => {
    if (isMobileSubMenu1Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu1Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu1Open(false);
        setIsSubmenu1Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu1Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu2 = () => {
    if (isMobileSubMenu2Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu2Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu2Open(false);
        setIsSubmenu2Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu2Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu3 = () => {
    if (isMobileSubMenu3Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu3Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu3Open(false);
        setIsSubmenu3Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu3Open(true); // Menüt nyitunk
    }
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="dropbtn"><Link className='no-underline' to="/">Kezdőlap</Link></div>
          <div className="dropbtn"><Link onClick={scrollToOutlet} className='no-underline' to="/news">Hírek</Link></div>

          {/* Városunk legördülő menü */}
          <div className="dropdown" ref={(el) => (dropdownRef.current[1] = el)}>
            <div className="dropbtn" onClick={() => toggleDropdown(1)}>
              Városunk
            </div>
            <div
              className={`dropdown-content ${openDropdown === 1 ? "show" : ""}`}
            >
              Megamenu 11111111
            </div>
          </div>

          {/* Önkormányzat legördülő menü */}
          <div className="dropdown" ref={(el) => (dropdownRef.current[2] = el)}>
            <div className="dropbtn" onClick={() => toggleDropdown(2)}>
              Önkormányzat
            </div>
            <div
              className={`dropdown-content ${openDropdown === 2 ? "show" : ""}`}
            >
              Megamenu 22222222
            </div>
          </div>

          {/* Kultúra legördülő menü */}
          <div className="dropdown" ref={(el) => (dropdownRef.current[3] = el)}>
            <div className="dropbtn" onClick={() => toggleDropdown(3)}>
              Kultúra
            </div>
            <div
              className={`dropdown-content ${openDropdown === 3 ? "show" : ""}`}
            >
              Megamenu 33333333
            </div>
          </div>
        </div>
      </div>

      {/* Mobil navigáció */}
      <div className="mobile-navbar-container">
        <div className="mobile-navbar" onClick={toggleMobileMenu}>
          Menü
        </div>
      </div>

      {/* Mobil menü, ha nyitva van */}
      {isMobileMenuOpen && (
        <div className={`mobile-menu ${isClosing ? "mobile-menu-closing" : ""}`}>
          {/* X gomb a menü bezárásához */}
          <div className="close-btn" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
          </div>
          <div className="mobile-menu-items">
            <div className="mobile-menu-item">
            <Link
              onClick={() => {
                setIsMobileMenuOpen(false); // A mobil menü bezárása
                scrollToOutlet(); // A scrollToOutlet funkció meghívása
              }}
              className='no-underline'
              to="/"
            >
              Kezdőlap
            </Link>
            </div>

            <Link
              onClick={() => {
                setIsMobileMenuOpen(false); // A mobil menü bezárása
                scrollToOutlet(); // A scrollToOutlet funkció meghívása
              }}
              className='no-underline'
              to="/news"
            >
              Hírek
            </Link>
            <div className="mobile-menu-item" onClick={toggleMobileSubMenu1}>
              Városunk <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu2}>
              Önkormányzat <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu3}>
              Kultúra <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>
          </div>
        </div>
      )}

      {/* Sub-menük */}
      {isMobileSubMenu1Open && (
        <div className={`sub-menu1 ${isSubmenu1Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu1}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
            <Link
              onClick={() => {
                setIsMobileSubMenu1Open(false); // A mobil menü bezárása
                setIsMobileMenuOpen(false); // A mobil menü bezárása
                scrollToOutlet(); // A scrollToOutlet funkció meghívása
              }}
              className='no-underline'
              to="/szechenyi2020"
            >
              Városunk 1
            </Link>
            </div>
            <div>Városunk 2</div>
            <div>Városunk 3</div>
            <div>Városunk 4</div>
            <div>Városunk 5</div>
            <div>Városunk 6</div>
            <div>Városunk 7</div>
            <div>Városunk 8</div>
            <div>Városunk 9</div>
            <div>Városunk 10</div>
            <div>Városunk 11</div>
            <div>Városunk 12</div>
            <div>Városunk 13</div>
            <div>Városunk 14</div>
            <div>Városunk 15</div>
            <div>Városunk 16</div>
            <div>Városunk 17</div>
            <div>Városunk 18</div>
            <div>Városunk 19</div>
            <div>Városunk 20</div>
            <div>Városunk 21</div>
          </div>
        </div>
      )}


      {isMobileSubMenu2Open && (
        <div className={`sub-menu2 ${isSubmenu2Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu2}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>Önkormányzat 1</div>
            <div>Önkormányzat 2</div>
            <div>Önkormányzat 3</div>
          </div>
        </div>
      )}

      {isMobileSubMenu3Open && (
        <div className={`sub-menu3 ${isSubmenu3Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu3}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>Kultúra 1</div>
            <div>Kultúra 2</div>
            <div>Kultúra 3</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
