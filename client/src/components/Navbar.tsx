import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../styles/colors';
import { CartIcon } from '../components/ui/CartIcon';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Brand = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.text};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1.1rem;
  color: ${colors.text};

  &:hover {
    color: ${colors.secondary};
  }

  &:focus {
    outline: 2px solid ${colors.secondary};
    outline-offset: 2px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Brand to="/">MyEcommerce</Brand>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
