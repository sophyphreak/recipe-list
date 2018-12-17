import React from 'react';
import { Button } from 'reactstrap';
import Ingredient from './Ingredient';

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredientsVisible: false,
      editMode: false
    }
    this.editIngredient = this.editIngredient.bind(this);
  };

  componentDidMount() {
    if (this.props.recipeName === "") {
      this.setState({ ingredientsVisible: true, editMode: true });
    }
  }

  renderIngredientsArea() {
    return (
      <div className="indent">
        <h5><u>Ingredients</u></h5>
        {this.renderIngredients()}
        {this.addIngredientsButton()}
        <br/>
        {this.state.editMode ? <br/> : null}
        <Button color="info" onClick={() => this.toggleEditMode()}>
          {this.state.editMode ? "Finish" : "Edit"}
        </Button>
        <Button id="delete-button" color="danger" onClick={() => this.props.removeRecipe(this.props.index)}>
          Delete
        </Button>
      </div>
    );
  };

  renderIngredients() {
    return this.props.ingredients.map((ingredient, index) => {
      return (
        <Ingredient
          index={index}
          editMode={this.state.editMode}
          editIngredient={this.editIngredient}
          ingredient={ingredient}/>
      );
    });
  };

  toggleIngredients() {
    let ingredientsVisible = this.state.ingredientsVisible;
    ingredientsVisible = !ingredientsVisible;
    this.setState({ ingredientsVisible });
  }

  toggleEditMode() {
    let editMode = this.state.editMode;
    if (editMode) {
      this.eliminateEmptyIngredients();
    };
    editMode = !editMode;
    this.setState({ editMode });
  }

  eliminateEmptyIngredients() {
    let ingredients = this.props.ingredients;
    ingredients = ingredients.filter((ingredient) => {
      return ingredient.length > 0;
      }
    );
    let recipeArr = [this.props.recipeName].concat(ingredients);
    this.props.editRecipe(this.props.index, recipeArr);
  };

  editRecipeName(e) {
    let recipeName = e.target.value;
    let ingredients = this.props.ingredients;
    let recipeArr = [recipeName].concat(ingredients);
    this.props.editRecipe(this.props.index, recipeArr);
  }

  editIngredient(index, ingredient) {
    let ingredients = this.props.ingredients;
    ingredients[index] = ingredient;
    let recipeArr = [this.props.recipeName];
    recipeArr = recipeArr.concat(ingredients);
    this.props.editRecipe(this.props.index, recipeArr);
  }

  recipeNameEdit() {
    return (
      <textarea
        rows="1"
        cols="70"
        value={this.props.recipeName}
        onChange={(e) => this.editRecipeName(e)}>
      </textarea>
    );
  }

  renderRecipeName() {
    return (
      <Button color="link" className="btn-link" onClick={() => {this.toggleIngredients()}}>
        {this.props.recipeName}
      </Button>
    );
  }

  addIngredient() {
    let recipeArr = [this.props.recipeName];
    recipeArr = recipeArr.concat(this.props.ingredients);
    recipeArr.push("");
    this.props.editRecipe(this.props.index, recipeArr);
  }

  addIngredientsButton() {
    if (this.state.editMode === true && this.state.ingredientsVisible === true) {
      return (
        <Button color="default" onClick={() => this.addIngredient()}>
          Add
        </Button>
      );
    }
  };

  render() {
    return (
      <div>
        {this.state.editMode ? this.recipeNameEdit() : this.renderRecipeName()}
        {this.state.ingredientsVisible ? this.renderIngredientsArea() : null}
      </div>
    );
  }
};

export default Recipe;