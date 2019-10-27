import React from 'react';
const CardsBarbs = () => {
    return (
        <div className="container">
            <h2>Card Effects</h2>

            <div className="obj-cards">
                <h3>Objective Cards</h3>
                <p>All objective cards have 2 printed objetives. The top is usually concerned with developemnt. While the bottom is usually converned with military goals.</p>
            </div>

            <div className="act-cards">
                <h3>Action Cards</h3>
                <p>play 'As An Action' no duplicates in one turn.</p>
            </div>

            <div className="trade">
                <h3>Player Trades</h3>
                <p>Players on their turn may trade with any other players.  Deals with an immediate transaction must be fulfilled.  Players may trade:</p>
                <ul>
                    <li>Resources</li>
                    <li>Action Cards</li>
                    <li>Objective Cards</li>
                    <li>Mood Tokens</li>
                    <li>Culture Tokens</li>
                </ul>
            </div>

            <div className="wonders">
                <h3>Wonders</h3>
                <p>Monuments are revealed by "Engineering" and "Monuments" advances.</p>
                <p>Once revealed a wonder can be fulfilled by any player on their turn by paying the full resources.  Once built the wonder is placed in one of your cities.</p>
                <p><strong>If the city the wonder is placed is destroyed the wonder is destroyed as well as the VP</strong></p>
            </div>

            <div className="event">
                <h3>Event Cards</h3>
                <p>Event cards will effect the player that draws them.</p>
                <p>they might get 2 gold or generate/ move barbarians near your cities.</p>
                <p>the worst being an exhaustion token that must be placed next to one of your cities.  Makes that space unusable.</p>
            </div>

            <div className="barbs">
                <h3>Barbarians</h3>
                <p>
                    If exploration reveals a barbarian symbol the person who revealed the tile must space a settlement and a barbarian.
                </p>
                <h5>Barbarians attack</h5>
                <p>
                    If a barbarian attacks your settlement.  you will go through one round of combat normally.  any hits that cannot be applied to your units is applied to your city.  you must remove one of your buildings and your city becomes angry.  any surviving barbs are moved back to their settlement.
                </p>
                <h5>Attack Barbarian settlement</h5>
                <p>you engage normally. On success you gain one gold for each barb piece that is destroyed.</p>
                <p>You may then either make the settlement an angry city or remove the settlement and gain a gold.</p>
            </div>
        </div>
    )
}
export default CardsBarbs;