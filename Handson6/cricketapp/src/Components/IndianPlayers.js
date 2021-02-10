import React, { Component } from "react";

export function OddPlayers([first, , third, , fifth]) {
    return (
        <div>
            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
        </div>
    )
}
export function EvenPlayers([, second, , fourth, , sixth]) {
    return (
        <div>
            <li>Second: {second}</li>
            <li>Fourth: {fourth}</li>
            <li>Sixth: {sixth}</li>
        </div>
    )
}

const T20Players = ['First player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth player', 'Fifth player', 'Sixth Player'];
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers]


export const IndianTeam = ["sachin", "sehwag", "Dhoni", "Virat", "Yuvraj", "Raina"]

export class ListofIndianPlayers extends Component {
    render() {
        return (
            IndianPlayers.map((player) => {
                return (
                    <div>
                        <li>Mr. {player}</li>
                    </div>
                )
            })
        )
    }
}
