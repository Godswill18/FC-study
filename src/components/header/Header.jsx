
import Head from "./Head"
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
    const location = useLocation();

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={ "mobile-nav flexSB"}>
          <Link className="custom-link" to="/home">
            <li className={location.pathname === '/home' ? 'active' : ''}>
            Home
          </li>
          </Link>

          <Link className="custom-link" to="/about">
            <li className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </li>
          </Link>

            <li>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Our Services"
                menuVariant="dark" className={location.pathname === '/aboutIT' || location.pathname === '/studyAbroad' ? 'active' : ''}>
                 
                  <NavDropdown.Item className={location.pathname === '/aboutIT' ? 'active' : ''}>
                    <Link to={'/aboutIT'} className="white-link">
                    IT Solutions
                    </Link>
                    
                    </NavDropdown.Item>
                <NavDropdown.Item className={location.pathname === '/studyAbroad' ? 'active' : ''}>
                  <Link to={'/studyAbroad'} className="white-link">
                    Study Abroad
                  </Link>
                  </NavDropdown.Item>
              </NavDropdown>
              
            </li>
            <Link className="custom-link" to={'#'}>
            <li className={location.pathname === '/ourblog' ? 'active' : ''}>
               Our Blog
            </li>
            </Link>
            <Link className="custom-link" to={'/contactUs'}>
            <li className={location.pathname === '/contactUs' ? 'active' : ''}>
              Contact Us
            </li>
            </Link>
            
          </ul>
          <div className='start'>
            <Link className="custom-link" to={'/register'}>
            <div className='button'>Register</div>
            </Link>
            
          </div>
          
        </nav>
      </header>
    </>
  )
}

export default Header
