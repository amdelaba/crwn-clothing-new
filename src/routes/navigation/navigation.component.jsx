import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // <Outlet/> dictates where to render children routes 
  // <Fragment > Used when you don’t want to render anything, 
  //   instead of a wrapping <div>
  return(
    <Fragment >
    
      <div className="navigation">
        <Link className="logo-container" to={'/'}>
          <CrwnLogo className="logo"/>
        </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to={'/shop'}>
            SHOP
          </Link>
          {
            currentUser ? 
              (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
               : (<Link className="nav-link" to={'/auth'}>SIGN IN</Link>)
          }

          <CartIcon />

          
        </div>
        
        { isCartOpen && <CartDropdown/> }

      </div>

      <Outlet/>
    </Fragment>
  )
}

export default Navigation