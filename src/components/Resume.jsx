import React, { Component } from 'react';
import Info from './Info';
import Experience from './Experience';
import Education from './Education'

const json = require('../resume.json'); 

class Resume extends Component {
  render() {
    return (
    <div className="resume">
      <Info jsonData={json.info} />
      <Experience jsonData={json.experience} />
      <Education jsonData={json.education} />
    </div>
    )
  }
}

export default Resume;