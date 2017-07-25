import React , { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css'; 

class App extends Component
{
    render(){
        return (
            <div className="App">
                <h2>
                    SuperSquad
                    <CharacterList />
                </h2>
            </div>
        )
    }
}
export default App;