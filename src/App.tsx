import React, {Component} from 'react';
import MenyBar from './components/MenyBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MenyBar />
        </div>
      </div>
    );
  }
}

export default App;
