import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { scrollToOutlet } from '../utils/scrollToOutlet';

const Navbar = () => {
  // Állapot a legördülő menük nyitásához
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // Mobil menü állapot
  const [isClosing, setIsClosing] = useState(false);  // Bezárás animáció állapota
  const dropdownRef = useRef([]);
  const [isMobileSubMenu1Open, setIsMobileSubMenu1Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu1Closing, setIsSubmenu1Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu2Open, setIsMobileSubMenu2Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu2Closing, setIsSubmenu2Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu3Open, setIsMobileSubMenu3Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu3Closing, setIsSubmenu3Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu4Open, setIsMobileSubMenu4Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu4Closing, setIsSubmenu4Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu5Open, setIsMobileSubMenu5Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu5Closing, setIsSubmenu5Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu6Open, setIsMobileSubMenu6Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu6Closing, setIsSubmenu6Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu7Open, setIsMobileSubMenu7Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu7Closing, setIsSubmenu7Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu8Open, setIsMobileSubMenu8Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu8Closing, setIsSubmenu8Closing] = useState(false);  // Bezárás animáció állapota
  const [isMobileSubMenu9Open, setIsMobileSubMenu9Open] = useState(false);  // Mobil menü állapot
  const [isSubmenu9Closing, setIsSubmenu9Closing] = useState(false);  // Bezárás animáció állapota




  // Eseménykezelő a legördülő menü nyitásához
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setActiveDropdown(activeDropdown === index ? null : index);
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

  // Ha a legördülő menü bezáródik, akkor az activeDropdown is null-ra áll
  useEffect(() => {
    if (openDropdown === null) {
      setActiveDropdown(null); // Az activeDropdown null-ra állítása
    }
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

  // Effektus a body overflow kezelésére
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Görgetés letiltása
    } else {
      document.body.style.overflow = 'auto'; // Görgetés engedélyezése
    }
    return () => {
      // Tisztítás, ha a komponens eltűnik
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]); // Függünk az isMobileMenuOpen állapottól

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

  const toggleMobileSubMenu4 = () => {
    if (isMobileSubMenu4Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu4Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu4Open(false);
        setIsSubmenu4Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu4Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu5 = () => {
    if (isMobileSubMenu5Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu5Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu5Open(false);
        setIsSubmenu5Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu5Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu6 = () => {
    if (isMobileSubMenu6Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu6Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu6Open(false);
        setIsSubmenu6Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu6Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu7 = () => {
    if (isMobileSubMenu7Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu7Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu7Open(false);
        setIsSubmenu7Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu7Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu8 = () => {
    if (isMobileSubMenu8Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu8Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu8Open(false);
        setIsSubmenu8Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu8Open(true); // Menüt nyitunk
    }
  };

  const toggleMobileSubMenu9 = () => {
    if (isMobileSubMenu9Open) {
      // Ha a menü nyitva van, akkor élöször indítjuk az animációt
      setIsSubmenu9Closing(true);
      // Várunk, amíg az animáció befejeződik, és csak utána zárjuk be a menüt
      setTimeout(() => {
        setIsMobileSubMenu9Open(false);
        setIsSubmenu9Closing(false);
      }, 500); // Az animáció hossza (0.5s)
    } else {
      setIsMobileSubMenu9Open(true); // Menüt nyitunk
    }
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link className='no-underline' to="/"><div className="dropbtn">Kezdőlap</div></Link>
          <Link onClick={scrollToOutlet} className='no-underline' to="/news"><div className="dropbtn">Hírek</div></Link>

          {/* Városunk legördülő menü */}
          <div className="dropdown" ref={(el) => (dropdownRef.current[1] = el)}>
            <div
              className={`dropbtn ${activeDropdown === 1 ? 'active' : ''}`}
              onClick={() => toggleDropdown(1)}>
              Városunk
            </div>
            <div
              className={`dropdown-content ${openDropdown === 1 ? "show" : ""}`}
            >
              <div className='megamenu-link-block'>
                <div className='megamenu-link-sub-block'>
                  <h1>Információk</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/koszonto"
                  >
                    Köszöntő
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/foldrajz"
                  >
                    Földrajz
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/tortenete"
                  >
                    Története
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/heraldika"
                  >
                    Heraldika
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/allas"
                  >
                    Álláslehetőségek
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Közszolgálati intézmények
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Közszolgáltatások
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Civil szervezetek
                  </Link>
                </div>
                <div className='megamenu-link-sub-block'>
                  <h1></h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Gazdahírek
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Eladó ingatlanok
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Kistérség
                  </Link>

                  <h1>Oktatás</h1>

                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Cigánd Óvoda
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Cigánd Iskola
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Oktatás Révleányvár
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Oktatás Zemplénagárd
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Iskolakonyha
                  </Link>
                </div>
                <div className='megamenu-link-sub-block'>
                  <h1>Egészségügy</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/haziorvosok"
                  >
                    Háziorvosok
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/fogorvos"
                  >
                    Fogorvos
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Központi Orvosi Ügyelet
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Védőnői Szolgálat
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Járóbeteg Szakrendelő
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Önkormányzat legördülő menü */}
          <div className="dropdown" ref={(el) => (dropdownRef.current[2] = el)}>
            <div
              className={`dropbtn ${activeDropdown === 2 ? 'active' : ''}`}
              onClick={() => toggleDropdown(2)}>
              Önkormányzat
            </div>
            <div
              className={`dropdown-content ${openDropdown === 2 ? "show" : ""}`}
            >
              <div className='megamenu-link-block'>
                <div className='megamenu-link-sub-block'>
                  <h1>Közös Önkormányzati Hivatal</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Polgármester
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Alpolgármester
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Jegyző
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Titkárság
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Hatósági és Igazgatási Osztály
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Városfejlesztési Osztály
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Pénzügyi Osztály
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Letölthető Dokumentumok
                  </Link>
                </div>
                <div className='megamenu-link-sub-block'>
                  <h1>Képviselő Testület</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Képviselők
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Határozatok, Rendeletek
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Rendelet-tervezetek
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Testületi Ülések
                  </Link>
                </div>
                <div className='megamenu-link-sub-block'>
                  <h1></h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Helyi Választási Iroda Határozatok
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Telefonszámok
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    RNÖ
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Közérdekű Adatok
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Adatvédelem
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Választás 2019
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Cigánd Járási Hivatal
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Település-üzemeltetés
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    START Programok
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Választási információk
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Kultúra legördülő menü */}
          <div className="dropdown" ref={(el) => (dropdownRef.current[3] = el)}>
            <div
              className={`dropbtn ${activeDropdown === 3 ? 'active' : ''}`}
              onClick={() => toggleDropdown(3)}>
              Kultúra
            </div>
            <div
              className={`dropdown-content ${openDropdown === 3 ? "show" : ""}`}
            >
              <div className='megamenu-link-block'>
                <div className='megamenu-link-sub-block'>
                  <h1>Kultúra</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Művelődési Ház
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Városi Könyvtár
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Múzeumporta
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Tájház
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Óvoda Múzeum
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Művészeti Csoportok
                  </Link>
                </div>
                <div className='megamenu-link-sub-block'>
                  <h1>Sport</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Szabadidő Központ
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Kis Műfüves-pálya
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Nagy Műfüves-pálya
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Labdarúgó-pálya
                  </Link>

                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Cigánd Sport Egyesület
                  </Link>
                </div>
                <div className='megamenu-link-sub-block'>
                  <h1>Szabadidő</h1>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Református Egyház
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Katolikus Egyház
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Vadászat
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Horgászat
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Túrázás
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Szálláslehetőségek
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenDropdown(null);  // Bezárjuk a legördülő menüt
                      scrollToOutlet(); // A scrollToOutlet funkció meghívása
                    }}
                    className='no-underline'
                    to="/projekt1"
                  >
                    Kulturális rendezvények
                  </Link>
                </div>
              </div>
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

            <div className="mobile-menu-item">
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
            </div>
            <div className="mobile-menu-item" onClick={toggleMobileSubMenu1}>
              Városunk <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu2}>
              Egészségügy <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu3}>
              Oktatás <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu4}>
              Közös Önkormányzati Hivatal <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu5}>
              Képviselő Testület <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu6}>
              Információk <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu7}>
              Kultúra <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu8}>
              Sport <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>

            <div className="mobile-menu-item" onClick={toggleMobileSubMenu9}>
              Szabadidő <svg className="right-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
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
                to="/koszonto"
              >
                Köszöntő
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu1Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/foldrajz"
              >
                Földrajz
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu1Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/tortenete"
              >
                Története
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu1Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/heraldika"
              >
                Heraldika
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu1Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/allas"
              >
                Álláslehetőségek
              </Link>
            </div>
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
                Közszolgálati Intézmények
              </Link>
            </div>
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
                Közszolgáltatások
              </Link>
            </div>
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
                Civil Szervezetek
              </Link>
            </div>
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
                Gazdahírek
              </Link>
            </div>
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
                Eladó Ingatlanok
              </Link>
            </div>
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
                Kistérség
              </Link>
            </div>
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
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu2Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/haziorvosok"
              >
                Háziorvosok
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu2Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/fogorvos"
              >
                Fogorvos
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu2Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Központi Orvosi Ügyelet
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu2Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Védőnői Szolgálat
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu2Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Járóbeteg Szakrendelő
              </Link>
            </div>
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
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu3Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Cigánd Óvoda
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu3Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Cigánd Iskola
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu3Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Oktatás Révleányvár
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu3Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Oktatás Zemplénagárd
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu3Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Iskolakonyha
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobileSubMenu4Open && (
        <div className={`sub-menu4 ${isSubmenu4Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu4}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Polgármester
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Alpolgármester
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Jegyző
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Titkárság
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Hatósági és Igazgatási Osztály
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Városfejlesztési Osztály
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Pénzügyi Osztály
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu4Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Letölthető Dokumentumok
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobileSubMenu5Open && (
        <div className={`sub-menu5 ${isSubmenu5Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu5}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu5Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Képviselők
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu5Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Határozatok, Rendeletek
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu5Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Rendelet-tervezetek
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu5Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Testületi Ülések
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobileSubMenu6Open && (
        <div className={`sub-menu6 ${isSubmenu6Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu6}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Helyi Választási Iroda Határozatok
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Telefonszámok
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                RNÖ
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Közérdekű Adatok
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Adatvédelem
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Választás 2019
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Cigánd Járási Hivatal
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Település-Üzemeltetés
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                START-Programok
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu6Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Választási Információk
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobileSubMenu7Open && (
        <div className={`sub-menu7 ${isSubmenu7Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu7}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu7Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Művelődési Ház
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu7Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Városi Könyvtár
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu7Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Múzeumporta
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu7Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Tájház
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu7Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Óvoda Múzeum
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu7Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Művészeti Csoportok
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobileSubMenu8Open && (
        <div className={`sub-menu8 ${isSubmenu8Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu8}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu8Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Szabadidő Központ
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu8Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Kis Műfüves-pálya
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu8Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Nagy Műfüves-pálya
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu8Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Labdarúgó-pálya
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu8Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Cigánd Sport Egyesület
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobileSubMenu9Open && (
        <div className={`sub-menu9 ${isSubmenu9Closing ? "mobile-submenu-closing" : ""}`}>
          <div className="back-btn" onClick={toggleMobileSubMenu9}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="left-arrow">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className="mobile-submenu-items">
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Református Egyház
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Katolikus Egyház
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Vadászat
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Horgászat
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Túrázás
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Szálláslehetőségek
              </Link>
            </div>
            <div>
              <Link
                onClick={() => {
                  setIsMobileSubMenu9Open(false); // A mobil menü bezárása
                  setIsMobileMenuOpen(false); // A mobil menü bezárása
                  scrollToOutlet(); // A scrollToOutlet funkció meghívása
                }}
                className='no-underline'
                to="/szechenyi2020"
              >
                Kulturális Rendezvények
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
