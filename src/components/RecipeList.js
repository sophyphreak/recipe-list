import React from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {

  renderRecipes() {
    return this.props.recipeList.map((arr, index) => {
      return (
        <Recipe index={index}
          recipeName={arr[0]}
          ingredients={arr.slice(1)}
          editRecipe={this.props.editRecipe}
          removeRecipe={this.props.removeRecipe}/>
      );
    });
  };

  render() {
    return (
      <div>
        {this.renderRecipes()}
      </div>
    );
  }
};

export default RecipeList;