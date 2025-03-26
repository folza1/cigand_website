import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  // Állapot a legördülő menük nyitásához
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef([]);

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

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="dropbtn">Kezdőlap</div>
          <div className="dropbtn">Hírek</div>

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
      <div className="mobile-navbar-container">
        <div className="mobile-navbar">Menü</div>
      </div>
    </>
  );
};

export default Navbar;


