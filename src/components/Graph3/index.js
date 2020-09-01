import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, WhiskerSeries} from 'react-vis';

import {Container} from './styles';

const question = {
    title: "Qual a variação do consumo de pizza nos últimos três meses?"
}

const myData = [
  {x: 1, y: 10, xVariance: 4, yVariance: 4},
  {x: 1.7, y: 12, xVariance: 7, yVariance: 7},
  {x: 2, y: 5, xVariance: 3, yVariance: 3},
  {x: 3, y: 15, xVariance: 10, yVariance: 10},
  {x: 2.5, y: 7, xVariance: 4, yVariance: 4}
];

class App extends Component {
  render() {
    return (
      <Container>
        <h1>{question.title}</h1>
        <XYPlot
          width={600}
          height={200}>
        <XAxis />
        <YAxis title="Quantidade de Pizza"  />
        <WhiskerSeries
          data={myData}
           color="#b00" 
          />
      </XYPlot>
      </Container>
    );
  }
}

export default App;