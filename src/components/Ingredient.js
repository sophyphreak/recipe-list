import React from 'react';

class Ingredient extends React.Component {

  editIngredientArea() {
    return (
      <textarea
        rows="1"
        cols="70"
        value={this.props.ingredient}
        onChange={(e) => this.editIngredient(e)}>
      </textarea>
    );
  }

  editIngredient(e) {
    let ingredient = e.target.value;
    this.props.editIngredient(this.props.index, ingredient);
  }

  render() {
    return (
      <div>
        {this.props.editMode? this.editIngredientArea() : this.props.ingredient}
      </div>
    );
  }
};

export default Ingredient;