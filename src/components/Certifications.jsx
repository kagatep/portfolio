import React, { Component } from 'react';

class Certifications extends Component {
	render(props) {
		const certsData = this.props.jsonData;

		const getCerts = certsData.certs.map(function(item, index) {
	          return (<li key={index}>{item}</li>)
	    });
		return(
			<div>
				<h3>{certsData.title}</h3>
				<ul>{getCerts}</ul>
			</div>
		) 
	}

}

export default Certifications;