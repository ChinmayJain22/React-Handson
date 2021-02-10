import logo from './logo.svg';
import './App.css';
import { ListofPlayers, players, Scorebelow70 } from './Components/ListOfPlayers';
import { render } from "@testing-library/react";
import { OddPlayers,IndianTeam,EvenPlayers,ListofIndianPlayers,IndianPlayers } from './Components/IndianPlayers';


function App() {
  render()
  {
    var flag = true;
    if (flag == true) {
      return (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List for player scored below 70</h1>
          <Scorebelow70 players={players} />
        </div>
      )
    }
    else{
      return(
        <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1> Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr/>
        <div>
          <h1>List Of Indian Player Merged:</h1>
          <ListofIndianPlayers IndianPlayers = {IndianPlayers} />

        </div>
        </div>
        
      )
    }
  }

}

export default App;
