import React, { Component } from 'react';

class Contact extends Component {
	render(props) {
		return(
			<div className="contact">
			<div className="content">
				<h2>contact me</h2>
				<a href="mailto:krishaagatep@yahoo.com">email</a>
				<a href="tel:1-707-290-0090">phone</a>
				<a href="https://github.com/kagatep" target="_blank">github</a>
				<a href="www.linkedin.com/in/krishaagatep" target="_blank">linkedin</a>
			</div>
			</div>
		) 
	}

}

export default Contact;