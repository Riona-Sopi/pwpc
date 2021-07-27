import react from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img class="logo" src="./img/powerpacklogo.png" width="30%"></img>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li class="nav-item dropdown">
    <li className="nav-item">
    <Link className="nav-llink" to="/productlist">Products</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-llink" to="/employeelist">Employee</Link>
      </li>
           
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div class="dropdown-items">
                  <Link className="dropdown-item" to="">Extrusion</Link>
                  <Link className="dropdown-item" to="">Converting</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  TECHNOLOGY
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div class="dropdown-items">
                  <Link className="dropdown-item" to="">Eco friendly plastics</Link>
                  </div>
                </div>
              </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CAREERS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
    )
}