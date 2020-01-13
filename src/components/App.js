import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import getDataFromApi from '../services/data';
import CharacterList from './CharacterList';
import Search from './Search';


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

  //render methods

  render() {
    console.log(this.state);


    return (
      <div className="App">
        <Header />

        <main className="App-main">
          <Search
            searchText={this.searchText}
            handleSearchText={this.handleSearchText}
          // handleSearchSubmit={props.handleSearchSubmit} 
          />

          <CharacterList
            characters={this.state.characters}
            searchText={this.state.searchText}
          />
        </main>
      </div>
    );
  }
}

export default App;
