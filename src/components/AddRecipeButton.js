import React from 'react';
import { Button } from 'reactstrap';

class AddRecipeButton extends React.Component {
  render() {
    return (
      <Button id="add-recipe" color="default" onClick={() => this.props.addRecipe()}>Add Recipe</Button>
    );
  }
};

export default AddRecipeButton;