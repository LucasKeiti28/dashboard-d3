import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint } from 'react-vis';

import {Container} from './styles';

const question = {
    title: "Qual nota você daria para o presidente do Brasil atual?"
}

const myData = [
  {x: '0', y: 10},
  {x: '1', y: 5},
  {x: '2', y: 15},
  {x: '3', y: 10},
  {x: '4', y: 5},
  {x: '5', y: 15},
  {x: '6', y: 12},
  {x: '7', y: 3},
  {x: '8', y: 5},
  {x: '9', y: 5},
  {x: '10', y: 5},
]

class App extends Component {
  render() {
    return (
      <Container>
        <h1>{question.title}</h1>
           <XYPlot  xType="ordinal" width={600} height={300} xDistance={100}>
           <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
              <VerticalBarSeries 
                data={myData} 
                fill={"#300"} 
                barWidth={0.9}
                onSeriesMouseOver={x => {
                  return (alert(console.log(x)))
                }}
              />
           </XYPlot>
      </Container>
    );
  }
}

export default App;