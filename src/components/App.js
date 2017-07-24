import React , { Component } from 'react';
import CharacterList from './CharacterList';

class App extends Component
{
    render(){
        return (
            <div>
                <h2>
                    SuperSquad
                    <CharacterList />
                </h2>
            </div>
        )
    }
}
export default App;