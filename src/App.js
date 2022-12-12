import './App.css';
import { Component } from 'react'

class App extends Component{
  constructor() {
    super();

    this.state = {
      agents: [
        {
          id: '1',
          name: 'Fade'
        },
        {
          id: '2',
          name: 'Sova'
        },
        {
          id: '3',
          name: 'Sage'
        },
        {
          id: '4',
          name: 'Jett'
        },
      ]
    };
  }

  render () {
    return (
      <div className="App">
        {
          this.state.agents.map((agent) => {
            return <h1 key={agent.id}>{agent.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
