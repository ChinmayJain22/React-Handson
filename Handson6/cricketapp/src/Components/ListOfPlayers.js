import React, { Component } from 'react';


export const players = [
    { playername: "Sachin", playerscore: 200 },
    { playername: "Jack", playerscore: 50 },
    { playername: "John", playerscore: 70 },
    { playername: "David", playerscore: 90 },
    { playername: "Imran", playerscore: 30 },
    { playername: "Raina", playerscore: 60 },
    { playername: "Dhoni", playerscore: 84 },
    { playername: "Gambhir", playerscore: 91 },
    { playername: "Rahul", playerscore: 62 },
    { playername: "Sehwag", playerscore: 54 },
    { playername: "Ashwin", playerscore: 74 },
];

export class ListofPlayers extends Component {
    render() {
        return (players.map((players) => {
            return (
                <div>
                    <li>Mr. {players.playername}<span>{players.playerscore}</span></li>
                </div>
            )
        })
        )
    }
};

export class Scorebelow70 extends Component {
    render() {
        let player70 = [];
        {
            this.props.players.map((players) => {
                if (players.playerscore <= 70) {
                    player70.push(players)
                }
            })
        }
        return (
            <div>
                {player70.map((players) => {
                    return (
                        <div>
                            <li>Mr. {players.playername}<span>{players.playerscore}</span></li>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}
