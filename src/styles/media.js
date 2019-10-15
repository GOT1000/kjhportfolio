import { css } from 'styled-components';

export const notMobile = inner => css`
  @media (min-width: ${650 / 16}em) {
    ${inner};
  }
`;

export const notMobile2 = inner => css`
  @media (min-width: ${414 / 16}em) {
    ${inner};
  }
`;

export const mobile = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`;

export const mobile2 = inner => css`
  @media (max-width: ${414 / 16}em) {
    ${inner};
  }
`

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`;

export const mobileWidth = 768

export const getElementREMHeight = (element) => {
  return parseFloat(getComputedStyle(element).height)
}