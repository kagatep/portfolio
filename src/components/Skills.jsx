import React, { Component } from 'react';

class Skills extends Component {
	render(props) {
		const skillsData = this.props.jsonData;
		const columnLength = Math.floor(skillsData.skills.length / 3);
		
	 	let columns = [];
	 	for(let index = 0; index < skillsData.skills.length + 1; index++) {
	 		if (index % columnLength === 0 && index > 0) {
	 			columns.push(skillsData.skills.slice(index-columnLength,index));
	 		} 
	 	}
		const getColumns = columns.map((item, index) => <SkillsColumn key={index} sectionData={item} />);
		return(
			<div>
			<h3>{skillsData.title}</h3>
			<div className="skills">
				{getColumns}
			</div>
			</div>
		) 
	}

}

class SkillsColumn extends Component {
	render(props) {
		const getSkills = this.props.sectionData.map(function(item, index) {
	          return (<li key={index}>{item}</li>)
	    });
		return(
			<ul>{getSkills}</ul>
		)
	}
}
export default Skills;