import React, { Component } from 'react';

class Welcome extends Component {
	render(props) {
		return(
			<div className="welcome">
				<div className="tint"></div>
				<div className="content">
					<h1>Hi, my name is Krisha &</h1>
					<h2>I want to make the web a beautiful place.</h2>
					<p>Co-Founder of <a href="http://www.twigghowto.com">TWIGG How-To</a>. Brunch enthusiast / fitness addict. Brand Manager to <a href="https://www.instagram.com/whiskeythecockapoo/?hl=en">@whiskeythecockapoo</a>.</p>
				</div>
			</div>
		) 
	}

}

export default Welcome;