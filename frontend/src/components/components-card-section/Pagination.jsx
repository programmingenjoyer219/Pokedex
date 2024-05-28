import React from 'react'
import getImageURL from '../../utils/imageUtil';

export default function Pagination(props) {
    return (
        <footer className='flex justify-center items-center bg-yellow-400 rounded-full shadow-md my-4 h-8 w-1/3 sm:w-1/6'>
            <button className='bg-[#ffb72b] text-black flex items-center justify-center w-1/3 h-full rounded-l-full focus:outline-none' onClick={() => { props.setPageNum(prevValue => { if (prevValue > 1) { return prevValue - 1 } else { return prevValue } }) }}>
                <img className='w-4 h-4' src={getImageURL("left-arrow.png")} alt="Previous Page" />
            </button>
            <p className='flex items-center justify-center w-1/3 h-full text-black font-bold'>{props.currentPageNum}</p>
            <button className='bg-[#ffb72b] text-black flex items-center justify-center w-1/3 h-full rounded-r-full focus:outline-none' onClick={() => { props.setPageNum(prevValue => { if (prevValue < props.numPages) { return prevValue + 1 } else { return prevValue } }) }}>
                <img className='w-4 h-4' src={getImageURL("right-arrow.png")} alt="Next Page" />
            </button>
        </footer>
    )
}
