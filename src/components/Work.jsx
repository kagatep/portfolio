import React, { Component } from 'react';
import WorkItem from './WorkItem';

class Work extends Component {
  render(props) {
  	const sectionData = this.props.sectionData;

    const getWorkItems = () => {
    	const workItems = [];
    	sectionData.jobs.forEach((val, index) => {
	      workItems.push(<WorkItem key={index} workItemData={val}/>);
	    });
	    return workItems;
    }
    
    return (
      <div>
        <h3>{sectionData.title}</h3>
        {getWorkItems()}
      </div>
    );
  }
}

export default Work;