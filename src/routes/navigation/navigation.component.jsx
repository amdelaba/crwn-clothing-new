import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {LogoContainer, NavicationContainer, NavLink, NavLinks} from './navigation.styles.jsx'

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // <Outlet/> dictates where to render children routes 
  // <Fragment > Used when you don’t want to render anything, 
  //   instead of a wrapping <div>
  return(
    <Fragment >
    <NavicationContainer>
    
        <LogoContainer to={'/'}>
          <CrwnLogo className="logo"/>
        </LogoContainer>
        
        <NavLinks >
          <NavLink to={'/shop'}>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as={'span'} onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to={'/auth'}>
                SIGN IN 
              </NavLink>
            )
          }

          <CartIcon />

          
        </NavLinks>
        
        { isCartOpen && <CartDropdown/> }

      </NavicationContainer>

      <Outlet/>
    </Fragment>
  )
}

export default Navigation