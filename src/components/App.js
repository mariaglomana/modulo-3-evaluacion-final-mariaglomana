import React from 'react';
import '../styles/App.css';
import Header from './Header';
import getDataFromApi from '../services/data';


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


  render() {
    console.log(this.state);


    return (
      <div className="App">
        <Header />

        <main className="App-main">
          {/*           
{this.renderSearch()}
{this.renderList()} */}
        </main>
      </div>
    );
  }
}

export default App;
