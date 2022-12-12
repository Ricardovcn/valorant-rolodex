import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import NavBar from './components/nav-bar/nav-bar.component';

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
        <NavBar onChangeHandler={onSearchChange}/>
        <CardList agents={filteredAgents}/>
      </div>
    );
  }
}

export default App;
