import React, { Component } from 'react';
import Work from './Work';

class Experience extends Component {
  render(props) {
  	const experienceData = this.props.jsonData;

    return (
      experienceData.map((item, index) => <Work key={index} sectionData={item} />)
    );
  }
}

export default Experience;