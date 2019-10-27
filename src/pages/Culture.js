import React from 'react';
const Culture = () => {
    return (
        <div className="container">
            <h2>Culture and Moods</h2>

            <div className="moods">
                <h4>Happiness | Neutral | Angry</h4>
                <p>Happy Cities count as being one size larger.</p>
                <p>Angry cities are regarded as size one for the purpose of build and collect.  Additonally they cannot grow in size.</p>
            </div>

            <p><strong>If you activate the the same city twice in a single turn your city will go down one level in happiness.</strong></p>

            <div className="culture">
                <p>culture is used to buy wonders, as well as civiv improvement and Cultural Influence. </p>
            </div>
        </div>
    )
}
export default Culture;