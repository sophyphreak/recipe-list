import React from 'react';
import TitleBar from './TitleBar';
import RecipeBox from './RecipeBox';

class App extends React.Component {
  render() {
    return (
      <div className="flex col">
        <TitleBar />
        <RecipeBox />
      </div>
    );
  }
};

export default App;
