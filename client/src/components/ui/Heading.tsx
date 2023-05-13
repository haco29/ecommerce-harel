import React from 'react';
import styled from 'styled-components';

interface HeadingProps {
  textAlign?: 'left' | 'center' | 'right';
  mb?: string;
  style?: React.CSSProperties;
}

const StyledHeading = styled.h1<HeadingProps>`
  margin-bottom: ${({ mb }) => mb || '0'};
`;

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  textAlign,
  mb,
  style,
  children,
}) => {
  const headingStyle = { textAlign };

  return (
    <StyledHeading style={{ ...style, ...headingStyle }}>
      {children}
    </StyledHeading>
  );
};
