import React from 'react';
const Status = () => {
    return (
        <div className="status container">
            <h1>Status Phase</h1>
            <p>After three turns conduct a status phase</p>

            <ol>
                <li>
                    <strong>completed obectives</strong>
                    <p>
                        players declare and reveal if they have completed any objectives.
                        A player can complete any number of objectives on a turn.
                        however they may only ever complete one of the cards two objectives.
                    </p>
                </li>
                <li>
                    <strong>Recieve a free Advance</strong>
                    <p></p>

                </li>
                <li>
                    <strong>Draw Cards</strong>
                    <p>draw 1 action card and 1 objective card  No hand limit.</p>
                </li>
                <li>
                    <strong>Raze Size 1 City</strong>
                    <p>players may remove any of there own size 1 cities</p>
                </li>
                <li>
                    <strong>Determine First Player</strong>
                    <p>the player with the highest combined culture and happiness chooses who will go.</p>
                </li>
            </ol>


        </div>
    )
}
export default Status;