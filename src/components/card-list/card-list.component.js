import { Component } from "react";


class CardList extends Component {
    render() {
        const { agents } = this.props

        return (
            <>
                {agents.map(agent => (
                    <h1 key={agent.uuid}>{agent.displayName}</h1>
                ))}
            </>
        )
    }
}

export default CardList
