import React, {Component} from 'react';
import CardList from './component/card-list/card-list.component';
import Search from './component/search/search';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters: [],
      searchFild:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({monsters:users}))
  }

  onSearchChange=(event)=>{
      this.setState({searchFild:event.target.value})
  }

  render(){
    const {monsters,searchFild}=this.state
    const filteredMonsters=monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchFild.toLowerCase())
    });
        
    
    return(
        <div className='App'>
            <h1>Monsters Rolodex</h1>
            <Search onSearchChange={this.onSearchChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}


export default App;
