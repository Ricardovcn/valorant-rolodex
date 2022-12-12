import './card-item.style.css'
import { Component } from "react";

class CardItem extends Component {
    render() {
        const { key, name, img, role_icon} = this.props
        return (
            <div className='card-item' key={key}>
                <img className='agent-img' alt={`agent ${name}`} src={img}/>
                <h1>{name}<img className='role-img' alt='icon'src={role_icon}/></h1>
            </div>
        )
    }
}

export default CardItem
