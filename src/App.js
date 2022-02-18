import React, { Component } from 'react';
import Navbar from "./components/Navigation/navbar";
import Counters from './components/counters';

class App extends Component {
  state = {
    totalCounters: 0
  }
  // data1 = {
  //   totalVal: 10
  // }
  render() { 
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.totalCounters}/>
        <main className='container'>
          <Counters onUpdateCounters={this.handleUpdate}/>
        </main>
     </React.Fragment>
    );
  };

  handleUpdate = (count) => {
    this.setState({
      totalCounters: count
    })
  }
}
 
export default App;
