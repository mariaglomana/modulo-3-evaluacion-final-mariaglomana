import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import getDataFromApi from '../services/data';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Search from './Search';
//import logo from '../images/logo.png';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchText: '',
      characters: []
    }
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);

  }

  // event methods

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(value) {
    this.setState({ searchText: value });
  }

  componentDidMount() {
    getDataFromApi()
      .then(characters => {
        this.setState({ characters: characters });
      });

  }

  // //cargo la receta seleccionada
  // fetchSingleRecipe(id){
  //   if (id !== this.state.singleRecipe.idMeal) {
  //     fetchSingleRecipe(id)
  //     .then(data => {
  //       this.setState({
  //         singleRecipe: data.meals[0]
  //       })
  //     })
  //   }
  // }


  //render methods
  renderCharacterDetail(props) {
    console.log(props);
    const idSelected = props.match.params.id;
    console.log(idSelected);
    console.log(this.state.characters);
    const arrSelected = this.state.characters.filter(character => character.id === Number(idSelected));
    console.log(arrSelected);
    const charSelected = arrSelected[0]
    return <CharacterDetail character={charSelected} />
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <Switch>
            <Route path="/" exact>
              <Search
                searchText={this.searchText}
                handleSearchText={this.handleSearchText}
              />
              <CharacterList
                characters={this.state.characters}
                searchText={this.state.searchText}
              />
            </Route>
            <Route
              path="/character/:id"
              render={this.renderCharacterDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
