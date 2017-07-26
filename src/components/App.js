import React , { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css'; 
import HeroList from './HeroList';
import SquadStats from './SquadStats';

class App extends Component
{
    render(){
        return (
            <h3>
            <div className="App">
                <h2>
                    SuperSquad
                </h2>
                    <div className="col-md-4">
                    <CharacterList />
                    </div>
                    <div className="col-md-4">
                    <HeroList />
                    </div>
                    <div className="col-md-4">
                        <SquadStats />
                    </div>
            </div>
            </h3>
        )
    }
}
export default App;