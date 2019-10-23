import React from 'react';
const SetUp = () => {
    return (
        <div>
            <h3>Setup</h3>

            <h1>components</h1>

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
                <li>Settlers</li>
                <li>Army</li>
                <li>Ships</li>
            </ul>

            <h2>Culture and Mood Tokens</h2>
            <ul>
                <li>Mood is used to track your cities populations well-being.</li>
                <li>Culture is used during cultural influence.</li>
            </ul>
        </div>
    )
}
export default SetUp;