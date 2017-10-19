import React, { Component } from 'react';

class WorkItem extends Component { 
	render(props) {
		const workItemData = this.props.workItemData;
		
		const getBullets = workItemData.bullets.map((item, index) => {
	        return (<li key={index} dangerouslySetInnerHTML={{__html: item}}></li>)
	    });

		const getPositions = () => {
		    if (Array.isArray(workItemData.positions)) {
		    	let positions = [];
		    	workItemData.positions.forEach((val, index) => {
		    		positions.push(<p className="position" key={index}>{val}</p>);
			    });
			    return positions;
		    } else {
		    	return (<p className="position">{workItemData.positions}</p>);
		    }
	    }
	  
		return (
			<div className="job">
				<h4>{workItemData.company}
					{workItemData.city ? <span>{workItemData.city}</span> : ''}
					{workItemData.date ? <span>{workItemData.date}</span> : ''}</h4>
					{getPositions()}
				<ul>{getBullets}</ul>
			</div>
		)
	}
};

export default WorkItem;