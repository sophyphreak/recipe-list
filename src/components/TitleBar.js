import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
      <div id="title-bar" className="margin-auto">
        <h3 id="title" className="m">Your Recipe List</h3>
        <h6 id="subtitle" className="">Created by Andrew Horn</h6>
      </div>
    );
  }
};

export default TitleBar;