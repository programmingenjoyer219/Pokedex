import React from 'react'
import { forwardRef } from 'react';
import Card from "./components-card-section/Card";
import Pagination from './components-card-section/Pagination';

function CardSection(props, ref) {
    return (
        <main className="bg-[#f0f0f0] dark:bg-[#0c0c0c] flex flex-col items-center w-full pt-12 rounded-t-3xl">
            <div ref={ref} id='card-box' className='my-4 py-2 flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2 justify-items-center md:gap-8 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    props.cardsToDisplay.map(card => {
                        return (<Card key={card.id} data={card} isDark={props.isDark} />);
                    })
                }
            </div>
            <Pagination setPageNum={props.setPageNum} currentPageNum={props.currentPageNum} numPages={props.numPages} />
        </main>
    )
}

export default forwardRef(CardSection);