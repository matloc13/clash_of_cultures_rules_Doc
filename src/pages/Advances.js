import React from 'react';
const Advances = () => {
    return (
        <div className="container">

            <h1>Advances</h1>
            <p>standard advance cost is 2 food or 1 idea resource.</p>
            <p>move mood or culture up the scale depending on if advance is yellow or blue.</p>
            <strong>There are 12 Advances categories.  Each Category has 4 advances.</strong>
            <p>When gaining an advance in a new category you must get the top one.  once you have done this you may pick any of the other ones.</p>
            <p>
                Some advances use the abbreviation 'AAA' which means as an action.  Meaning to use this power you must
                use one of your 3 action points.
            </p>

            <p>
                You should also be aware of the pre-requisites labeled in red.  these mean you must already have
                this advance in order get the new one.
            </p>

            <h3>Government Advances</h3>
            <strong>You may only have advances in one of the three categories.</strong>

        </div>
    )
}
export default Advances;