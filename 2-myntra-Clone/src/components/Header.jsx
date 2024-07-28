import { IoPersonAddSharp } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
import mynteaLogo from '../images/myntra_logo.png'
const Header = () => {

   const BagItems = useSelector(store=>store.Bag)

  return (
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src={mynteaLogo} alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <IoPersonAddSharp/>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <FaGrinHearts />
                <span className="action_name">Wishlist</span>
            </div>

            <NavLink className="action_container" to="/Bag">
            <IoBagHandle />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{BagItems.length}</span>
            </NavLink>
        </div>
    </header>
  )
}

export default Header