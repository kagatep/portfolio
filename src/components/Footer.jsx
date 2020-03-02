import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledFooter = styled.footer`
  ${tw`text-center py-20`};
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.defaulttext};
`;

const Link = styled.a`
  ${tw`text-lg mx-2`};
`;

const H2 = styled.h2`
  ${tw`relative inline-block text-2xl mb-4 z-0`};
  :before {
    content: '';
    position: absolute;
    left: -0.25rem;
    right: -0.25rem;
    top: 1rem;
    bottom: -0.25rem;
    background: ${(props) => props.theme.colors.bg};
    transform: skew(-8deg) scale(1) rotate(-2deg);
    z-index: -1;
  }
`;

const Footer = () => (
  <StyledFooter>
    <H2>contact me</H2>
    <div>
      <Link href="mailto:krishaagatep@yahoo.com">kagatep1@gmail.com</Link>
      <Link href="tel:1-707-290-0090">707.290.0090</Link>
      <br />
      <Link href="https://github.com/kagatep" target="_blank" rel="noopener noreferrer">
        github
      </Link>
      <Link
        href="https://www.linkedin.com/in/krishaagatep"
        target="_blank"
        rel="noopener noreferrer">
        linkedin
      </Link>
    </div>
  </StyledFooter>
);

export default Footer;
