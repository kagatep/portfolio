import React, { useContext } from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import ThemeContext from '../context/ThemeContext';

import Me from '../img/Agatep_Krisha_v1_light.jpg';
import MeDark from '../img/Agatep_Krisha_v1_navy.jpg';

const StyledWelcome = styled.div`
  ${tw`min-h-screen flex flex-col items-center justify-start lg:justify-center text-xl relative`};
  //${({ isPurple }) => isPurple && tw`bg-violet`}
  background: ${(props) => props.theme.colors.accent};
`;

const Image = styled.picture`
  ${tw`absolute inset-0`};

  img {
    ${tw`object-left object-cover h-full`};
  }
`;

const Tint = styled.div`
  ${tw`absolute inset-0`};
  background: linear-gradient(transparent, ${(props) => props.theme.colors.accent}50);
`;

const Content = styled.div`
  ${tw`relative lg:w-3/5 lg:self-end p-4`};
  color: ${(props) => props.theme.colors.defaulttext};
`;

const H1 = styled.h1`
  ${tw`relative font-display text-5xl`};
  line-height: 1.25;
`;

const Amp = styled.span`
  ${tw`italic`};
  color: ${(props) => props.theme.colors.gold};
  font-size: 8rem;
  bottom: -2rem;
  margin-left: -2rem;
  z-index: 0;
  position: absolute;
`;

const Span = styled.span``;
const Welcome = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <StyledWelcome isPurple={false}>
      <Image>
        <img src={themeMode === 'lightTheme' ? Me : MeDark} alt="Krisha Agatep" />
      </Image>
      <Tint />
      <Content>
        <H1>
          <span className="relative z-10">Hi, my name is Krisha</span> <Amp>&</Amp>
        </H1>
        <h2 className="font-display text-3xl">
          I want to make the web a <Span className="italic">beautiful</Span> place.
        </h2>
        <p>
          Brunch enthusiast / fitness addict. Brand Manager to{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/whiskeythecockapoo/?hl=en">
            @whiskeythecockapoo
          </a>
          .
        </p>
        <h3
          onClick={() => {
            setThemeMode(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme');
          }}>
          Update theme
        </h3>
      </Content>
    </StyledWelcome>
  );
};

export default Welcome;
