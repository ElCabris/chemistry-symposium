function Navbar() {
    return (
      <>
        <nav className="navbar">
          {/* Logo on the left */}
          <div className="navbar-logo">
            <img src="src/assets/logo.png" alt="logo" />
          </div>
  
          {/* Title in the center */}
          <div className="navbar-title">
            SIQUI 2025
          </div>
  
          {/* Navigation links on the right */}
          <div className="navbar-links">
            <div className="nav-item"><a href="#">Home</a></div>
            <div className="nav-item"><a href="#">Register</a></div>
            <div className="nav-item"><a href="#">About</a></div>
            <div className="nav-item"><a href="#">Services</a></div>
            <div className="nav-item"><a href="#">Contact</a></div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
