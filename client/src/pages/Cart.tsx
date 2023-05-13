import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CardContext';
import { Button, ButtonVariant } from '../components/ui/Button';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { PageContainer } from '../components/ui/PageContainer';

const CartItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  list-style: none;

  img {
    width: 50px;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;

    img {
      display: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  button:first-child {
    margin-right: 1rem;
  }
`;

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const handleBuy = () => {
    clearCart();
    alert('Thank you for your purchase!');
  };

  return (
    <PageContainer>
      <Heading>Shopping Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt={item.name} />
                <Text>{item.name}</Text>
                <Text>
                  {item.quantity} x ${item.price}
                </Text>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </Button>
              </CartItem>
            ))}
          </ul>
          <Text>Total: ${totalPrice.toFixed(2)}</Text>
          <ButtonContainer>
            <Button onClick={clearCart} variant={ButtonVariant.Secondary}>
              Clear
            </Button>
            <Button onClick={handleBuy}>Buy</Button>
          </ButtonContainer>
        </>
      )}
    </PageContainer>
  );
};

export default Cart;
