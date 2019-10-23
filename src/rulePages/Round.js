import React from 'react';
const Round = () => {
    return (
        <div>
            <p>The Game consists of 6 rounds unless someone is eliminated before that.
                Each Round will consist of 3 turns per player.
                Each turn will consist of 3 actions per player.
                After 3 turns there is a status phase.
            </p>


            <h4>Example of turn structure</h4>
            <ul>
                <h2>Round</h2>
                <li>
                    <h2>Turn 1</h2>
                    <ul>
                        <li>
                            <h3>action1</h3>
                        </li>
                        <li>
                            <h3>action2</h3>
                        </li>
                        <li>
                            <h3>action3</h3>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Turn 2</h2>
                    <ul>
                        <li>
                            <h3>action1</h3>
                        </li>
                        <li>
                            <h3>action2</h3>
                        </li>
                        <li>
                            <h3>action3</h3>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Turn 3</h2>
                    <ul>
                        <li>
                            <h3>action1</h3>
                        </li>
                        <li>
                            <h3>action2</h3>
                        </li>
                        <li>
                            <h3>action3</h3>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}
export default Round;