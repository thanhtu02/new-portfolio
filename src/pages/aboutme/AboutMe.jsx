import React from 'react';
import TechnicalSkill from './technical-skill/TechnicalSkill';
import Education from './education/Education';

function AboutMe( {toggle}) {
    return (
        <div className="lg:py-0 py-4">
            <Education toggle={toggle} />
            <TechnicalSkill toggle={toggle}/>
        </div>
    );
}

export default AboutMe;
