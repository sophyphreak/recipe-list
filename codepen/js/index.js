var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "flex col" },
          React.createElement(TitleBar, null),
          React.createElement(RecipeBox, null)));


    } }]);return App;}(React.Component);
;var

TitleBar = function (_React$Component2) {_inherits(TitleBar, _React$Component2);function TitleBar() {_classCallCheck(this, TitleBar);return _possibleConstructorReturn(this, (TitleBar.__proto__ || Object.getPrototypeOf(TitleBar)).apply(this, arguments));}_createClass(TitleBar, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "title-bar", className: "margin-auto" },
          React.createElement("h3", { id: "title", className: "m" }, "Your Recipe List"),
          React.createElement("h6", { id: "subtitle", className: "" }, "Created by Andrew Horn")));


    } }]);return TitleBar;}(React.Component);
;var

RecipeBox = function (_React$Component3) {_inherits(RecipeBox, _React$Component3);

  function RecipeBox(props) {_classCallCheck(this, RecipeBox);var _this3 = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this,
    props));
    _this3.state = {
      recipeList: null };

    _this3.addRecipe = _this3.addRecipe.bind(_this3);
    _this3.editRecipe = _this3.editRecipe.bind(_this3);
    _this3.removeRecipe = _this3.removeRecipe.bind(_this3);return _this3;
  }_createClass(RecipeBox, [{ key: "componentWillMount", value: function componentWillMount()

    {
      var recipeList = this.state.recipeList;
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
        "Pie Crust"],

        [
        "Spaghetti",
        "Noodles",
        "Tomato Sauce",
        "(Optional) Meatballs"],

        [
        "Onion Pie",
        "Onion",
        "Pie Crust",
        "Sounds Yummy right?"]];


      };
      this.setState({ recipeList: recipeList });
    } }, { key: "addRecipe", value: function addRecipe(


    recipe) {
      var recipeList = this.state.recipeList;
      recipeList.push(["", ""]);
      localStorage.setItem("recipeList", JSON.stringify(recipeList));
      this.setState({ recipeList: recipeList });
    } }, { key: "editRecipe", value: function editRecipe(

    index, editedRecipe) {
      var recipeList = this.state.recipeList;
      recipeList[index] = editedRecipe;
      localStorage.setItem("recipeList", JSON.stringify(recipeList));
      this.setState({ recipeList: recipeList });
    } }, { key: "removeRecipe", value: function removeRecipe(

    index) {
      var recipeList = this.state.recipeList;
      recipeList.splice(index, 1);
      localStorage.setItem("recipeList", JSON.stringify(recipeList));
      this.setState({ recipeList: recipeList });
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "recipe-box", className: "margin-auto" },
          React.createElement(RecipeList, {
            recipeList: this.state.recipeList,
            editRecipe: this.editRecipe,
            removeRecipe: this.removeRecipe }),
          React.createElement(AddRecipeButton, { addRecipe: this.addRecipe })));


    } }]);return RecipeBox;}(React.Component);
;var

RecipeList = function (_React$Component4) {_inherits(RecipeList, _React$Component4);function RecipeList() {_classCallCheck(this, RecipeList);return _possibleConstructorReturn(this, (RecipeList.__proto__ || Object.getPrototypeOf(RecipeList)).apply(this, arguments));}_createClass(RecipeList, [{ key: "renderRecipes", value: function renderRecipes()

    {var _this5 = this;
      return this.props.recipeList.map(function (arr, index) {
        return (
          React.createElement(Recipe, { index: index,
            recipeName: arr[0],
            ingredients: arr.slice(1),
            editRecipe: _this5.props.editRecipe,
            removeRecipe: _this5.props.removeRecipe }));

      });
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          this.renderRecipes()));


    } }]);return RecipeList;}(React.Component);
;var

Recipe = function (_React$Component5) {_inherits(Recipe, _React$Component5);

  function Recipe(props) {_classCallCheck(this, Recipe);var _this6 = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this,
    props));
    _this6.state = {
      ingredientsVisible: false,
      editMode: false };

    _this6.editIngredient = _this6.editIngredient.bind(_this6);return _this6;
  }_createClass(Recipe, [{ key: "componentDidMount", value: function componentDidMount()

    {
      if (this.props.recipeName === "") {
        this.setState({ ingredientsVisible: true, editMode: true });
      }
    } }, { key: "renderIngredientsArea", value: function renderIngredientsArea()

    {var _this7 = this;
      return (
        React.createElement("div", { className: "indent" },
          React.createElement("h5", null, React.createElement("u", null, "Ingredients")),
          this.renderIngredients(),
          this.addIngredientsButton(),
          React.createElement("br", null),
          this.state.editMode ? React.createElement("br", null) : null,
          React.createElement("button", { className: "btn btn-info", onClick: function onClick() {return _this7.toggleEditMode();} },
            this.state.editMode ? "Finish" : "Edit"),

          React.createElement("button", { id: "delete-button", className: "btn btn-danger", onClick: function onClick() {return _this7.props.removeRecipe(_this7.props.index);} }, "Delete")));




    } }, { key: "renderIngredients", value: function renderIngredients()

    {var _this8 = this;
      return this.props.ingredients.map(function (ingredient, index) {
        return (
          React.createElement(Ingredient, {
            index: index,
            editMode: _this8.state.editMode,
            editIngredient: _this8.editIngredient,
            ingredient: ingredient }));

      });
    } }, { key: "toggleIngredients", value: function toggleIngredients()

    {
      var ingredientsVisible = this.state.ingredientsVisible;
      ingredientsVisible = !ingredientsVisible;
      this.setState({ ingredientsVisible: ingredientsVisible });
    } }, { key: "toggleEditMode", value: function toggleEditMode()

    {
      var editMode = this.state.editMode;
      if (editMode) {
        this.eliminateEmptyIngredients();
      };
      editMode = !editMode;
      this.setState({ editMode: editMode });
    } }, { key: "eliminateEmptyIngredients", value: function eliminateEmptyIngredients()

    {
      var ingredients = this.props.ingredients;
      ingredients = ingredients.filter(function (ingredient) {
        return ingredient.length > 0;
      });

      var recipeArr = [this.props.recipeName].concat(ingredients);
      this.props.editRecipe(this.props.index, recipeArr);
    } }, { key: "editRecipeName", value: function editRecipeName(

    e) {
      var recipeName = e.target.value;
      var ingredients = this.props.ingredients;
      var recipeArr = [recipeName].concat(ingredients);
      this.props.editRecipe(this.props.index, recipeArr);
    } }, { key: "editIngredient", value: function editIngredient(

    index, ingredient) {
      var ingredients = this.props.ingredients;
      ingredients[index] = ingredient;
      var recipeArr = [this.props.recipeName];
      recipeArr = recipeArr.concat(ingredients);
      this.props.editRecipe(this.props.index, recipeArr);
    } }, { key: "recipeNameEdit", value: function recipeNameEdit()

    {var _this9 = this;
      return (
        React.createElement("textarea", {
          rows: "1",
          cols: "70",
          value: this.props.recipeName,
          onChange: function onChange(e) {return _this9.editRecipeName(e);} }));


    } }, { key: "renderRecipeName", value: function renderRecipeName()

    {var _this10 = this;
      return (
        React.createElement("button", { className: "btn btn-link", onClick: function onClick() {_this10.toggleIngredients();} },
          this.props.recipeName));


    } }, { key: "addIngredient", value: function addIngredient()

    {
      var recipeArr = [this.props.recipeName];
      recipeArr = recipeArr.concat(this.props.ingredients);
      recipeArr.push("");
      this.props.editRecipe(this.props.index, recipeArr);
    } }, { key: "addIngredientsButton", value: function addIngredientsButton()

    {var _this11 = this;
      if (this.state.editMode === true && this.state.ingredientsVisible === true) {
        return (
          React.createElement("button", { className: "btn btn-default", onClick: function onClick() {return _this11.addIngredient();} }, "Add"));



      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          this.state.editMode ? this.recipeNameEdit() : this.renderRecipeName(),
          this.state.ingredientsVisible ? this.renderIngredientsArea() : null));


    } }]);return Recipe;}(React.Component);
;var

Ingredient = function (_React$Component6) {_inherits(Ingredient, _React$Component6);function Ingredient() {_classCallCheck(this, Ingredient);return _possibleConstructorReturn(this, (Ingredient.__proto__ || Object.getPrototypeOf(Ingredient)).apply(this, arguments));}_createClass(Ingredient, [{ key: "editIngredientArea", value: function editIngredientArea()

    {var _this13 = this;
      return (
        React.createElement("textarea", {
          rows: "1",
          cols: "70",
          value: this.props.ingredient,
          onChange: function onChange(e) {return _this13.editIngredient(e);} }));


    } }, { key: "editIngredient", value: function editIngredient(

    e) {
      var ingredient = e.target.value;
      this.props.editIngredient(this.props.index, ingredient);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          this.props.editMode ? this.editIngredientArea() : this.props.ingredient));


    } }]);return Ingredient;}(React.Component);
;var

AddRecipeButton = function (_React$Component7) {_inherits(AddRecipeButton, _React$Component7);function AddRecipeButton() {_classCallCheck(this, AddRecipeButton);return _possibleConstructorReturn(this, (AddRecipeButton.__proto__ || Object.getPrototypeOf(AddRecipeButton)).apply(this, arguments));}_createClass(AddRecipeButton, [{ key: "render", value: function render()
    {var _this15 = this;
      return (
        React.createElement("button", { id: "add-recipe", className: "btn btn-default", onClick: function onClick() {return _this15.props.addRecipe();} }, "Add Recipe"));

    } }]);return AddRecipeButton;}(React.Component);
;

ReactDOM.render(
React.createElement(App, null),
document.getElementById("container"));