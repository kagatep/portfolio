import React, { Component } from 'react';

class WorkItem extends Component { 
	render(props) {
		const workItemData = this.props.workItemData;
		
		const getBullets = workItemData.bullets.map(function(item, index) {
	        return (<li key={index} dangerouslySetInnerHTML={{__html: item}}></li>)
	    });
		return (
			<div>
				<h4>{workItemData.company}{workItemData.city ? '   |   ' + (workItemData.city ) + '   |   ' + (workItemData.date)  : ''}</h4>
				<p>{workItemData.positions}</p>
				<ul>{getBullets}</ul>
			</div>
		)
	}

};

export default WorkItem;