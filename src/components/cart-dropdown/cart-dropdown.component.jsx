import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component'
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {

  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext)

  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/> )}
      </div>
      <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
    </div>
  );

};

export default CartDropdown;