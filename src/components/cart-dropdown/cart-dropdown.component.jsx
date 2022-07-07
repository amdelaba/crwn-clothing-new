import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component'
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {

  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext)

  return(
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ?  
          (cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>))
          : 
          (<EmptyMessage>Your cart is empty</EmptyMessage>)
      }
      </CartItems>
      <Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );

};

export default CartDropdown;