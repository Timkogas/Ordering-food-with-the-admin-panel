import './Navigation.css';
import { NavLink, Link } from 'react-router-dom'

function Navigation() {
  return (
    <header className='header'>
      <div className='header_logo'>
        <Link to='/' className='header_logo_link'>Turtle Pizza Admin</Link>
      </div>

      <div  className='header_menu'>
        <NavLink to='/' className='header_link'>Dishes</NavLink>
        <NavLink to='/orders' className='header_link'>Orders</NavLink>
      </div>
      
    </header>
  );
}

export default Navigation;
