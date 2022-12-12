import './App.css';
import { Component } from 'react'

class App extends Component{
  constructor() {
    super();

    this.state = {
      agents: [],
      searchKey: '',
    };
  }

  componentDidMount() {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then((response) => response.json())
      .then((json_response) => this.setState(() => {
        return { agents: json_response['data'], filteredAgents: json_response['data']}
      }, () => {
        console.log(this.state)
      }))
  }

  onSearchChange = (event) => {
    this.setState(() => { return { searchKey: event.target.value.toLocaleLowerCase() }})
  }

  render () {
    const { agents, searchKey } = this.state
    const { onSearchChange } = this


    const filteredAgents = agents.filter((agent) => {
      return agent.displayName.toLocaleLowerCase().includes(searchKey)
    })

    return (
      <div className="App">
        <input placeholder='Search Agent' onChange={onSearchChange}></input>

        {
          filteredAgents.map((agent) => {
            return <h1 key={agent.uuid}>{agent.displayName}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
