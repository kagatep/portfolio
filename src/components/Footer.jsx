import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledFooter = styled.footer`
  ${tw`text-center py-20`};
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.defaulttext};
`;

const Link = styled.a`
  ${tw`text-lg px-2`};
`;

const Footer = () => (
  <StyledFooter>
    <h2 className="text-2xl mb-4">contact me</h2>
    <Link href="mailto:krishaagatep@yahoo.com">kagatep1@gmail.com</Link> |
    <Link href="tel:1-707-290-0090">707.290.0090</Link>
    <br />
    <Link href="https://github.com/kagatep" target="_blank" rel="noopener noreferrer">
      github
    </Link>
    <Link href="www.linkedin.com/in/krishaagatep" target="_blank" rel="noopener noreferrer">
      linkedin
    </Link>
  </StyledFooter>
);

export default Footer;
