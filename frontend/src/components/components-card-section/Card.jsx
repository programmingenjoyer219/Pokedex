import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { useState } from 'react'
import getImageURL from '../../utils/imageUtil';
import NameTag from "./component-card/NameTag";
import TypeTag from "./component-card/TypeTag";
import Appearence from "./component-card/Appearence";
import StatBox from "./component-card/StatBox";

export default function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(prevState => {
            return !prevState;
        });
    }

    return (
        <>
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className="min-w-[240px] font-[Monda] bg-white dark:bg-[#222224] rounded-3xl shadow-lg dark:shadow-md dark:shadow-[#ffd966] p-4 flex flex-col items-center" onClick={flipCard}>
                    <img src={getImageURL(`official-artwork/${props.data.id}.png`)} alt={props.data.name.english} className="w-32 h-32 mb-4" />
                    <NameTag isDark={props.isDark} name={props.data.name.english} />
                    <TypeTag types={props.data.type} />
                    <Appearence isDark={props.isDark} weight={props.data.profile.weight} height={props.data.profile.height} />
                </div>

                <div onClick={flipCard} className='min-w-[240px] min-h-[284px] bg-white dark:bg-[#222224] rounded-3xl shadow-lg dark:shadow-md dark:shadow-[#ffd966] px-4 flex flex-col justify-items-center justify-center items-center'>
                    <img className="h-14 w-14" src={getImageURL(`sprites/${props.data.id}.png`)} alt={props.data.name.english} />
                    <StatBox isDark={props.isDark} data={props.data.base} />
                </div>
            </ReactCardFlip>
        </>
    )
}
