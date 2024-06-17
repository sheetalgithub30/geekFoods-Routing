import { Link } from 'react-router-dom';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div id="navbar">
         <div id="logo">
            <img src="https://flowbite.com/docs/images/logo.svg"></img>
            <h2>GeekFoods</h2>
         </div>
         <div id="links">
              <Link to='/'>Home</Link>
              <Link to='/quotes'>Quotes</Link>
              <Link to ='/resturants'>Resturants</Link>
              <Link to='/foods'>Foods</Link>
              <Link to ='/contact'>Contact</Link>
         </div>
          <button>Get started</button>
          <div id="hamburger">
          <MenuIcon/>
         </div>
    </div>
  )
}

export default Navbar;
