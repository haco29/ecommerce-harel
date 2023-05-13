import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { CartContext } from '../../contexts/CardContext';

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  color: ${colors.textLight};
`;

const CartItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -15px;
  background-color: ${colors.background};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: ${colors.primary};
`;

export const CartIcon: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartIconContainer>
      <FontAwesomeIcon icon={faShoppingCart} />
      {itemCount > 0 && <CartItemCount>{itemCount}</CartItemCount>}
    </CartIconContainer>
  );
};
