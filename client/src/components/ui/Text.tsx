import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface TextProps {
  size?: keyof typeof fontSizeMap;
  weight?: keyof typeof fontWeightMap;
  color?: keyof typeof colors;
}

const fontSizeMap = {
  xs: 'fontSizes.xs',
  sm: 'fontSizes.sm',
  md: 'fontSizes.md',
  lg: 'fontSizes.lg',
  xl: 'fontSizes.xl',
  xxl: 'fontSizes.xxl',
};

const fontWeightMap = {
  regular: 'fontWeights.regular',
  medium: 'fontWeights.medium',
  bold: 'fontWeights.bold',
};

export const Text = styled.p<TextProps>`
  ${({ size, theme }) =>
    size &&
    css`
      font-size: ${theme[fontSizeMap[size]]};
    `};
  ${({ weight, theme }) =>
    weight &&
    css`
      font-weight: ${theme[fontWeightMap[weight]]};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${colors[color]};
    `};
`;
