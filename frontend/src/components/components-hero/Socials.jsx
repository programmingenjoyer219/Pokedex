import React from 'react';
import SocialLink from "./components-social/SocialLink";
import getImageURL from '../../utils/imageUtil';

export default function Socials() {
    return (
        <div id="social-icon-container" className="flex justify-center space-x-4 mb-8">
            <SocialLink imgSrc={getImageURL("github.png")} link="https://github.com/programmingenjoyer219" altText="github" />
            <SocialLink imgSrc={getImageURL("linkedin.png")} link="https://www.instagram.com/2109_yuganshu_9012?igsh=MW14Mml1ZHAxdTk2aw==" altText="linkedin" />
            <SocialLink imgSrc={getImageURL("instagram.png")} link="https://www.linkedin.com/in/yuganshu-mohan-906b73274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" altText="instagram" />
        </div>
    )
}
