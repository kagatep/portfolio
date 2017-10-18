import React, { Component } from 'react';
import Work from './Work';

class Experience extends Component {
  render(props) {
  	const experienceData = this.props.jsonData;

    const getExperienceSections = experienceData.map(function(item, index) {
          return (<Work key={index} sectionData={item} />)
    });
    
    return (
      <div>{getExperienceSections}</div>
    );
  }
}

export default Experience;