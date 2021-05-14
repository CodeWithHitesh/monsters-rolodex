import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component'


// This file has extension of .js but actually the code is in .jsx
// It still works fine because react gives the code to babel and webpack for conversion into suitable formats.
// We changed into a class so that we could use state.

class App extends Component {
    constructor() {
        super();  // super helps to call the component's constructor.

        this.state = {
            monsters: [],
            searchField: ''
        };

        // Else, this keyword won't work unless you bind it.
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }


    // You require to bind this keyword with this definition.
    // handleChange(e) {
    //     this.setState({ searchField: e.target.value });
    // }


    // Arrow functions don't require to bind this keyword. React automatically binds it.
    handleChange = e => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='Search Monsters'
                    handleChange={this.handleChange}
                />
                {/* Everytime you pass something in searchFeild, whole of page gets re-rendered. */}
                {/* Passing prompts to CardList. */}
                <CardList monsters={filteredMonsters} />
            </div >
        );
    }
}


export default App;