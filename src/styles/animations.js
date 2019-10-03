import { keyframes, css } from 'styled-components';
import { Tween } from 'react-gsap';
import rem from 'styles/rem';


export const fadeInRight = keyframes` {
    0% {
      opacity: 0;
      left: 20%;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
`;

export const gradientBG = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

export const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`

export const progressbar = inner => keyframes`
    0% {
      width: ${inner.init || 0}%;
    }

    100% {
      width: ${inner.percent || 0}%;
    }
`;

export const themeRowFadeOut = css`
  transform: scale(1) translateZ(0);
  opacity: 0.4;
  transition: opacity .55s cubic-bezier(0.19, 1, 0.22, 1),transform .55s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const themeRowFadeIn = css`
  transform: scale(1.02) translateZ(0);
  opacity: 1;
  transition: opacity .55s cubic-bezier(0.19, 1, 0.22, 1),transform .55s cubic-bezier(0.19, 1, 0.22, 1);
`;