import React from 'react';
import RecipeList from './RecipeList';
import AddRecipeButton from './AddRecipeButton';

class RecipeBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeList: null
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  };

  componentWillMount() {
    let recipeList = this.state.recipeList;
    if (!recipeList) {
      recipeList = JSON.parse(localStorage.getItem("recipeList"));
    }
    if (!recipeList) {
      recipeList = [
        [
          "Pumpkin Pie",
          "Pumpkin Puree",
          "Sweetened Condensed Milk",
          "Eggs",
          "Pumpkin Pie Spice",
          "Pie Crust"
        ],
        [
          "Spaghetti",
          "Noodles",
          "Tomato Sauce",
          "(Optional) Meatballs"
        ],
          [
            "Onion Pie",
            "Onion",
            "Pie Crust",
            "Sounds Yummy right?"
          ]
        ];
    };
    this.setState({ recipeList });
  }


  addRecipe(recipe) {
    let recipeList = this.state.recipeList;
    recipeList.push(["", ""]);
    localStorage.setItem("recipeList", JSON.stringify(recipeList));
    this.setState({ recipeList });
  };

  editRecipe(index, editedRecipe) {
    let recipeList = this.state.recipeList;
    recipeList[index] = editedRecipe;
    localStorage.setItem("recipeList", JSON.stringify(recipeList));
    this.setState({ recipeList });
  };

  removeRecipe(index) {
    let recipeList = this.state.recipeList;
    recipeList.splice(index, 1);
    localStorage.setItem("recipeList", JSON.stringify(recipeList));
    this.setState({ recipeList });
  }

  render() {
    return (
      <div id="recipe-box" className="margin-auto">
        <RecipeList
          recipeList={this.state.recipeList}
          editRecipe={this.editRecipe}
          removeRecipe={this.removeRecipe}/>
        <AddRecipeButton addRecipe={this.addRecipe}/>
      </div>
    );
  }
};

export default RecipeBox;