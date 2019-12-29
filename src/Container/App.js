import CardList from "../Components/CardList";
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Title from '../Components/Title';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import {setSearchField, fetchingRobots} from "../actions";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.fetchRobots.isPending,
        robots: state.fetchRobots.robots,
        error: state.fetchRobots.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onFetchRobots: () => dispatch(fetchingRobots())
    }
};

class App extends Component{

    componentDidMount() {
        this.props.onFetchRobots();
    }

    render (){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter((robot) => (robot.name.toLowerCase().includes(searchField.toLowerCase())));
        return (
            <div className={"tc"}>
                <Title/>
                <SearchBar searchChange={onSearchChange}/>
                {isPending?
                    <h1>Loading</h1>
                    :<Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>}
            </div>
    )}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);