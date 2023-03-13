import React from "react";
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
            </div>
        )
    }
}
export default Nav;