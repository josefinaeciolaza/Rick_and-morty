import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

class Nav extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
                <Link to="/home">
                    <span>Home</span>
                </Link>
            </div>
        )
    }
}
export default Nav;