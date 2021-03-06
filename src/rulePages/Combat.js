import React from 'react';
const Combat = () => {
    return (
        <div className="container">
            <h3>Cultural Influence</h3>
            <ol>
                <li>Target a city (atleast size 2) within range of one of your cities.  Range = the size of your city.</li>
                <li>Roll a die.  success on a 5 or 6.</li>
                <li>If successful Excahnge a city piece in the target city with a matching city piece in your color.</li>
            </ol>
            <h6>Boosting your Cultural Influence.</h6>
            <ul>
                <li>Add +1 range for every Culture token you spend.</li>
                <li>Add +1 to the rolled result for each culture token you spend after rolling.</li>
            </ul>

            <h3>Combat</h3>
            <p>in land combat each player rolls a number of dice as they have soldiers.  each player divides thier total by 5.  So if you were to roll a 19 you would do 3 hits.</p>

        </div>
    )
}
export default Combat;