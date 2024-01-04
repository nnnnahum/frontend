import React from 'react';
import './LandingPageBoldText.css';
import LandingingPageSoftText from './LandingPageSoftText/LandingPageSoftText';
import LandingPageGetStarted from './LandingPageGetStarted/LandingPageGetStarted';
import RequestADemo from './RequestADemo/RequestADemo';

const defaultProps = {
text: "Archive files and extract the hot value from your cold data",
};

const LandingPageText = () => {
return (
    <div>
    <span className="landing-page-bold-text">
    {defaultProps.text}
    <LandingingPageSoftText/>
    <div>
        <span>
            <LandingPageGetStarted/>
            <RequestADemo />
        </span>
    </div>
    </span>

    </div>
);
};

export default LandingPageText;