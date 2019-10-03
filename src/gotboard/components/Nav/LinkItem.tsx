import styled from 'styled-components';
import UnstyledLink from 'next/link';
import { Link as AnimateScroll } from 'react-scroll'

const Link = ({ ['aria-label']: ariaLabel, children, className, inline, unstyled, white, scrollTo, ...rest }) => {
  let Child;
  if (scrollTo) {
    Child = AnimateScroll
  } else {
    Child = 'a'
  }

  let dataAttrs;
  if (white) {
    dataAttrs = { 'data-white': white };
  }

  return (
    <UnstyledLink {...rest}>
      <Child aria-label={ariaLabel} href={rest.href} className={className} {...dataAttrs}>
        {children}
      </Child>
    </UnstyledLink>
  );
};

export default Link;