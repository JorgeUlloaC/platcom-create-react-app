import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Aportes from './components/Aportes';
import NewUrl from './components/NewUrl';

const VideoExplicativo = () => {
  return <div>video</div>;
};

class App extends Component {
  state = {
    semestreOpen:0,
    ramo:''
  };

  handleSemestre = (newSemestre, newRamo) =>{
    this.setState({semestreOpen:newSemestre, ramo:newRamo})
  }
  handleRamo = (newSemestre, newRamo)=>{
    this.setState({semestreOpen:newSemestre, ramo:newRamo})
  }


  render() {

    return(
      <div>
        <Header onSemestre={this.handleSemestre}/>
        {
        (this.state.semestreOpen > 0) ?
          <div>
            <Sidebar semestre={this.state.semestreOpen} onRamo={this.handleRamo}/>
            <Aportes ramo={this.state.ramo}/>
          </div>
        :(<VideoExplicativo></VideoExplicativo>)
      }
        
      </div>
    );
  }
}
export default App;