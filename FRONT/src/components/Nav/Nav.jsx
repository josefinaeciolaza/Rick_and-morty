import React from "react";
//import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Barra, ElLink } from "./Nav";

class Nav extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Barra>
                <SearchBar onSearch={this.props.onSearch}/>
                <ElLink to="/home">
                    <h1>HOME</h1>
                </ElLink>
                <ElLink to="/about">
                    <h2>ABOUT</h2>
                </ElLink>
                <ElLink to="/favorites">FAVORITOS</ElLink>
            </Barra>
        )
    }
}
export default Nav;