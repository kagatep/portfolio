import React, { Component } from 'react';

class Info extends Component {
  render(props) {
  	const info = this.props.jsonData;
    return (
      <div>
       <h2>{info.name}</h2>
       <p>{info.email}   |   {info.phone}</p>
      </div>
    );
  }
}

export default Info;