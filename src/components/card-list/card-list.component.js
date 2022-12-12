import './card-list.style.css'
import { Component } from "react";
import CardItem from "../card-item/card-item.component";

class CardList extends Component {
    render() {
        const { agents } = this.props

        return (
            <div className="card-list">
                {agents.map(agent => (
                    <CardItem
                      key={agent.uuid}
                      name={agent.displayName}
                      img={agent.bustPortrait}
                      role_icon={agent.role.displayIcon}
                    />
                ))}
            </div>
        )
    }
}

export default CardList
