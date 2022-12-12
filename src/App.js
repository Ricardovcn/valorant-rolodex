import './App.css';
import { Component } from 'react'

class App extends Component{
  constructor() {
    super();

    this.state = {
      agents: [],
    };
  }

  componentDidMount() {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then((response) => response.json())
      .then((json_response) => this.setState(() => {
        return { agents: json_response['data'] }
      }, () => {
        console.log(this.state)
      }))
  }

  render () {
    return (
      <div className="App">
        {
          this.state.agents.map((agent) => {
            return <h1 key={agent.uuid}>{agent.displayName}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
