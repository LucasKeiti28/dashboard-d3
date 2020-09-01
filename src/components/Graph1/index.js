import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

import {Container} from './styles';

const question = {
    title: "Você fez algum curso on-line no último ano?"
}

const data = [
 {
     quantity: 56,
     value: 'Sim'
 },
 {
    quantity: 34,
    value: 'Nao'
 }
];

const answers = data.map(answer => (
  {
    angle: answer.quantity,
    label: `${answer.value} (${answer.quantity})`
  }
))


class App extends Component {
  render() {
    return (
      <Container>
        <h1>{question.title}</h1>
            <RadialChart 
              data={answers} 
              width={300} 
              height={300}
              radius={100}
              showLabels={true}
              labelsRadiusMultiplier={0.8}
              labelsStyle={{
                fontSize: 18
              }}
            />
      </Container>
    );
  }
}

export default App;