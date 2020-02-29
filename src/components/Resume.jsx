import React from 'react';
import styled from '@emotion/styled';

import WorkExperience from './WorkExperience';
import Education from './Education';
import Skillset from './Skillset';

const StyledResume = styled.div`
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.defaulttext};
`;

const Resume = () => (
  <StyledResume>
    <div className="container px-4 md:px-8 py-16 mx-auto">
      <WorkExperience />
      <Education />
      <Skillset />
    </div>
  </StyledResume>
);

export default Resume;
