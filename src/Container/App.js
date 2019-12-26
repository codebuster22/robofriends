import CardList from "../Components/CardList";
import React,{Component} from 'react';
import Title from '../Components/Title';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';

class App extends Component{
    constructor() {
        super();
        this.state={
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
             .then(response=>response.json())
             .then(users=>{this.setState({robots: users})});
    }

    onSearchChange=(event)=>{
        this.setState({searchField: event.target.value});
        };
    render (){
        const {robots,searchField} = this.state;
        const filteredRobots = robots.filter((robot) => (robot.name.toLowerCase().includes(searchField.toLowerCase())));
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