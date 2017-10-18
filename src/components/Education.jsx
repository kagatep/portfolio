import React, { Component } from 'react';

class Education extends Component {
	render(props) {
		const schoolData = this.props.jsonData;
		return(
			<div>
			<h3>{schoolData.title}</h3>
			<h4>{schoolData.school}</h4>
			<p dangerouslySetInnerHTML={{__html: schoolData.degree}}></p>
			</div>
		) 
	}

}

export default Education;