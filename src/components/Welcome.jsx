import React, { useContext } from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import ThemeContext from '../context/ThemeContext';
import Me from '../img/Agatep_Krisha_v1.png';

const StyledWelcome = styled.header`
  ${tw`relative md:min-h-screen flex flex-col items-center justify-start lg:justify-center`};
  background: ${(props) => props.theme.colors.accent};
`;

const Picture = styled.picture`
  ${tw`absolute inset-0 invisible md:visible`};

  img {
    ${tw`object-left object-cover h-full`};
  }
`;

const Tint = styled.div`
  ${tw`absolute inset-0`};
  transition: all 300ms 100ms;
  background: linear-gradient(transparent, ${(props) => props.theme.colors.accent}70);
`;

const Content = styled.div`
  ${tw`relative lg:text-center lg:w-4/5 lg:self-end px-4 py-16`};
  color: ${(props) => props.theme.colors.defaulttext};
  transition: all 300ms 100ms;
  transition-timing-function: ease-out;
`;

const Amp = styled.span`
  ${tw`absolute italic opacity-50 md:opacity-100 z-0`};
  color: ${(props) => props.theme.colors.gold};
  font-size: 7rem;
  margin-left: -1.5rem;
`;

const Underline = styled.span`
  ${tw`relative inline-block z-0`};
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

const Welcome = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <StyledWelcome>
      <Picture>
        <img src={Me} alt="Krisha Agatep" />
      </Picture>
      <Tint />
      <Content>
        <h1 className="relative text-5xl mb-8">
          <span className="relative z-10">Hi, my name is Krisha</span> <Amp>&</Amp>
        </h1>
        <h2 className="text-3xl">
          I want to make the web a <Underline>beautiful</Underline> place.
        </h2>
        <p className="text-xl my-3">
          Brunch enthusiast. Fitness addict. <br />
          Brand Manager to @
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whiskey the Cockapoo on Instagram (opens in a new tab)"
            href="https://www.instagram.com/whiskeythecockapoo/?hl=en">
            whiskeythecockapoo
          </a>
          .
        </p>
        <p className="text-xl">
          view in:{' '}
          <span
            aria-label="Changes theme to light mode"
            className="font-medium cursor-pointer"
            onClick={() => {
              setThemeMode('lightTheme');
            }}>
            light mode
          </span>{' '}
          //{' '}
          <span
            aria-label="Changes theme to dark mode"
            className="font-medium cursor-pointer"
            onClick={() => {
              setThemeMode('darkTheme');
            }}>
            dark mode
          </span>
        </p>
      </Content>
    </StyledWelcome>
  );
};

export default Welcome;
