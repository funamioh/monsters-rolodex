import { Component } from "react";

import './card.style.css';

class Card extends Component {
    render() {
        const {id, name, email} = this.props.monster;

        return (
            <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${monster.id}?set=set1&size=180x180`} />
            <h2>{name}</h2>
            <h3>{email}</h3>
            </div>
          )
    }
}

export default Card;