import React from 'react'

export default function TypeButton(props) {
    return (
        <button id={props.id} title={props.id} onClick={props.handleClick} className='h-fit w-fit rounded-full flex justify-center items-center transition hover:opacity-50'>
            <img src={props.imgSrc} alt={`${props.id} button`} className='h-[28px] sm:h-[44px]' />
        </button>
    )
}
