import React from 'react';
import '../styles/App.css';
import Header from './Header';
import getDataFromApi from '../services/data';
import CharacterList from './CharacterList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    getDataFromApi()
      .then(characters => {
        this.setState({ characters: characters });
      });

  }

  //render methods

  renderCharacterList() {
    return (
      <CharacterList characters={this.state.characters} />
    );
  }

  render() {
    console.log(this.state);


    return (
      <div className="App">
        <Header />

        <main className="App-main">
          {/*           
{this.renderSearch()} */}
          {this.renderCharacterList()}
        </main>
      </div>
    );
  }
}

export default App;
