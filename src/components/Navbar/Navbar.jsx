import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-container'>
        <div className='navbar__logo'>
          <h1>Dealers</h1>
        </div>
        <div className='navbar__links'>
          <ul>
            <li>
              <Link to='/' className='link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Products
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Profile
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
