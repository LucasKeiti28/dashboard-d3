import React, { Component } from 'react';

import Graph1 from '../../components/Graph1';
import Graph2 from '../../components/Graph2';
import Graph3 from '../../components/Graph3';

import {Container} from './styles';

class App extends Component {
  render() {
    return (
    <div style={{backgroundColor: '#ddd', margin: 0, padding:0, outline: 0, boxSizing:'border-box', height: '100%'}}>
        <h1>Categoria Dados: Comportamento</h1>
     <Container>
          <Graph2 />
          <Graph1 />
          <Graph3 />
     </Container>
     </div>
    );
  }
}

export default App;