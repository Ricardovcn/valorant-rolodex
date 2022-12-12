import { Component } from "react";


class SearchBox extends Component {
    render() {
        const { className, placeholder, onChangeHandler} = this.props

        return (
            <input
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            ></input>
        )
    }
}

export default SearchBox
