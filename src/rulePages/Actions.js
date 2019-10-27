import React from 'react';
const Actions = () => {
    return (
        <div className="actions container">
            <h1>Player Actions</h1>
            <ul>
                <li>Advance</li>
                <li>Found a City</li>
                <li>Activate a City</li>
                <li>Move Units</li>
                <li>Civic Improvement</li>
                <li>Cultural Influence</li>
            </ul>
            <section id="advance">
                <h2>Advances</h2>
                <p>spend food or idea resources to improve your tech.a</p>
            </section>
            <section id="foundACity">
                <h2>Found a City</h2>
                <p>replace a settler piece with a settlement.  cannot be adjacent to antother cities.</p>

            </section>
            <section id="Activate">
                <h2>Activate a City</h2>
                <ul>
                    <li>Build Units</li>
                    <li>Increase City Size</li>
                    <li>Collect Resources</li>
                    <li>Limits</li>
                </ul>
            </section>

            <section id="move">
                <h2>Move Units</h2>
                <ul>
                    <li><strong>  Land Movement </strong>
                        <ul>
                            <li>you may move 3 units or groups of units, one space per move action. </li>
                            <li>once a unit has participated in combat it cannot move again that turn.</li>
                            <li>if a unit moves into a mountain it cannot move again this turn.</li>
                            <li>a unit that moves into a forest can move againbut cannot battle.</li></ul>
                    </li>

                    <li><strong> Ship Movement</strong>
                        <ul>
                            <li>ships can move between any connected sea space.
                        </li>
                            <li>ships can transport up to two land units.</li>
                        </ul></li>
                </ul>
            </section>

            <section id="civic">
                <h2>Civic Improvement</h2>
                <p>Improve Cities mood by spening mood tokens the size of the city.  If you pay enough mood tokens you may improve your city by two steps.</p>
            </section>

            <section id="cultural">
                <h2>Cultural Influence</h2>
                <p>Try to convert another players building that is within range.</p>
            </section>

        </div>
    )
}
export default Actions;