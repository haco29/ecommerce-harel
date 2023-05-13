import React, { useState, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

const buttonVariantStyles = {
  [ButtonVariant.Primary]: css`
    background-color: ${colors.primary};
    color: ${colors.textLight};
  `,
  [ButtonVariant.Secondary]: css`
    background-color: ${colors.secondary};
    color: ${colors.text};
  `,
};

const ButtonWrapper = styled.button<{
  'data-isclicked': boolean;
  variant: ButtonVariant;
}>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  ${({ variant }) => buttonVariantStyles[variant]}

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  ${({ 'data-isclicked': isClicked }) =>
    isClicked &&
    css`
      transform: scale(0.95);
    `}
`;

interface ButtonProps extends PropsWithChildren<any> {
  onClick?: (event: React.MouseEvent) => void;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = ButtonVariant.Primary,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsClicked(true);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonWrapper
      onClick={handleClick}
      data-isclicked={isClicked}
      variant={variant}
    >
      {children}
    </ButtonWrapper>
  );
};
