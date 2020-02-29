import React from 'react';
import styled from '@emotion/styled';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Welcome from '../components/Welcome';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skillset from '../components/Skillset';
import Footer from '../components/Footer';

const Resume = styled.div`
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.defaulttext};
`;

function Main() {
  return (
    <>
      <Welcome />
      <Resume>
        <div className="container px-4 md:px-8 py-16 mx-auto">
          <WorkExperience />
          <Education />
          <Skillset />
        </div>
      </Resume>
      <Footer />
    </>
  );
}

export default Main;
