import React from 'react';
const SetUp = () => {
    return (
        <div className="container">
            <div>
                <h3>setup</h3>
                <ul>
                    <li><p>each player recieves a cube on the farming and the mining advance.</p></li>
                    <li><p>all resources but food start on the 0 space.</p></li>
                    <li><p>food starts on the 2 space.</p></li>
                    <li><p>each player recieves 1 action card and 1 objective card</p></li>
                    <li><p>each player starts with a settlement and a settler.</p></li>
                </ul>

            </div>


            <h1>components</h1>

            <h2>City Pieces</h2>
            <ul>
                <li>Settlements | 7 per player | 7 barbarian</li>
                <li>Temples | 7 per player</li>
                <li>Fortress | 7 per player</li>
                <li>Academics | 7 per players</li>
                <li>Ports 7 per player</li>
            </ul>

            <h2>Resources</h2>
            <ul>
                <li>Food</li>
                <li>Ore</li>
                <li>Wood</li>
                <li>
                    <strong>Idea</strong> Can substitute food when buying an advance.
                </li>

                <li>
                    <strong>Gold</strong> Can substitute any other resource
                </li>
            </ul>

            <h2>Units</h2>
            <ul>
                <li>Settlers | 4 per player</li>
                <li>Army | 16 per player</li>
                <li>Ships | 4 per player</li>
            </ul>

            <h2>Culture and Mood Tokens</h2>
            <ul>
                <li>Mood is used to track your cities populations well-being.</li>
                <li>Culture is used during cultural influence.</li>
            </ul>

            <h2>Cards</h2>
            <ul>
                <li className="event">Event Cards</li>
                <li className="action">Action Cards</li>
                <li className="objective">Objective Cards</li>
                <li className="wonder">Wonder Cards</li>
            </ul>
        </div >
    )
}
export default SetUp;