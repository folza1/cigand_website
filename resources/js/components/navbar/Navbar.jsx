import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dropbtn">Kezdőlap</div>
      <div className="dropbtn">Hírek</div>
      <div className="dropdown">
        <div className="dropbtn">Városunk</div>
        <div className="dropdown-content">Megamenu</div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Önkormányzat</div>
        <div className="dropdown-content">Megamenu</div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Kultúra</div>
        <div className="dropdown-content">Megamenu</div>
      </div>
    </div>
  );
};

export default Navbar;
