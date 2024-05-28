import React from 'react'

export default function SocialLink(props) {
    return (
        <a title={props.altText} href={props.link} id="social-link" className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-md bg-[#ffb72b] flex justify-center items-center m-[8px] transition hover:bg-[#ffd966]">
            <img
                id="social-image"
                className="w-6 h-6"
                src={props.imgSrc}
                alt={props.altText}
            />
        </a>
    )
}
