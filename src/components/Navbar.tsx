import { FC } from 'react';
import { NavLink } from 'react-router';

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-left">
        <span>shuraj-shampang</span>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              _hello
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              onClick={(e) => e.preventDefault()}
              className="cursor-not-allowed"
            >
              _about-me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects"
              onClick={(e) => e.preventDefault()}
              className="cursor-not-allowed"
            >
              _projects
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <NavLink 
          to="/contact" 
          onClick={(e) => e.preventDefault()}
          className="cursor-not-allowed"
        >
          _contact-me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
