import {robots} from './Robots';
import CardList from "./CardList";
import React,{Component} from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import Scroll from './Scroll';

class App extends Component{
    constructor() {
        super();
        this.state={
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchField: event.target.value});
        };
    render (){
        const filteredRobots = this.state.robots.filter((robot) =>{
            return (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))});
        return (
        <div className={"tc"}>
            <Title/>
            <SearchBar searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    )}
}

export default App;