import { IoPersonAddSharp } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
import mynteaLogo from '../images/myLogo.jpg'
import { useState } from "react";
const Header = () => {

   const BagItems = useSelector(store=>store.Bag)

   const [myActiveClass,setActiveClass] = useState("Home")
    function applyActiveClass(e){
        if(e==="Bag"){
            setActiveClass("");
            return;
        }
            setActiveClass(e.target.text);
    }

  return (
 
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src={mynteaLogo} alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link onClick={(e)=>{applyActiveClass(e)}} className={(myActiveClass==="Home"?'activeMyHeaderElement':"nonActiveBar")} to="/">Home</Link>
            <Link onClick={(e)=>{applyActiveClass(e)}} className={(myActiveClass==="offers"?'activeMyHeaderElement':"nonActiveBar")} to="/offer">offers</Link>
            <Link onClick={(e)=>{applyActiveClass(e)}} className={(myActiveClass==="about"?'activeMyHeaderElement':"nonActiveBar")} to="/aboutUs">about</Link>
            <Link onClick={(e)=>{applyActiveClass(e)}} className={(myActiveClass==="Contact us"?'activeMyHeaderElement':"nonActiveBar")} to="/contact">Contact us</Link>
        </nav>
        {/* <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div> */}
        <div className="action_bar">
            <div className="action_container">
            <IoPersonAddSharp/>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <FaGrinHearts />
                <span className="action_name">Wishlist</span>
            </div>

            <NavLink onClick={()=>{applyActiveClass("Bag")}} className="action_container" to="/Bag">
            <IoBagHandle />
                <span  className="action_name">Bag</span>
                <span className="bag-item-count">{BagItems.length}</span>
            </NavLink>
        </div>
    </header>
  )
}

export default Header
