import './App.css';
import { Component } from 'react'

class App extends Component{
  constructor() {
    super();

    this.state = {
      agents: [],
      search_key: '',
    };
  }

  componentDidMount() {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then((response) => response.json())
      .then((json_response) => this.setState(() => {
        return { agents: json_response['data'], filtered_agents: json_response['data']}
      }, () => {
        console.log(this.state)
      }))
  }

  render () {
    const filtered_agents = this.state.agents.filter((agent) => {
      return agent.displayName.toLocaleLowerCase().includes(this.state.search_key)
    })

    return (
      <div className="App">
        <input placeholder='Search Agent' onChange={ (event) => {
          this.setState(() => { return { search_key: event.target.value.toLocaleLowerCase() }})
        }}></input>

        {
          filtered_agents.map((agent) => {
            return <h1 key={agent.uuid}>{agent.displayName}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
