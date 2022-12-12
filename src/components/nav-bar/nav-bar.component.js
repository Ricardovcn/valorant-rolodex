import SearchBox from '../search-box/search-box.component';
import './nav-bar.style.css'
import valorant from '../../img/valorant.png';

const { Component } = require("react");

class NavBar extends Component {
    render() {
        const { onChangeHandler } = this.props
        return (
            <div className='nav-bar'>
                <img className='title-img' alt='valorant' src={valorant}/>
                <SearchBox className='search-box' placeholder='Search agent' onChangeHandler={onChangeHandler}></SearchBox>
            </div>
        )
    }
}

export default NavBar
