import React, { Component } from 'react';
import Info from './Info';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';

const json = require('../resume.json'); 

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="content">
          <h2>Resume</h2>
          {/* <Info jsonData={json.info} /> */}
          <Experience jsonData={json.experience} />
          <Education jsonData={json.education} />
          <Certifications jsonData={json.certifications} />
          <Skills jsonData={json.skillz} />
        </div>
      </div>
    )
  }
}

export default Resume;