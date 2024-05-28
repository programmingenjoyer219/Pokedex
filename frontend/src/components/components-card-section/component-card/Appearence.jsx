import React from 'react'
import getImageURL from '../../../utils/imageUtil';

export default function Appearence(props) {
    return (
        <div className="flex justify-between w-full px-4">
            <div className="flex items-center">
                <img className="w-4 h-4 mr-1" src={props.isDark ? getImageURL("weight-orange.png") : getImageURL("weight-black.png")} alt="weight" />
                <span className="text-sm font-semibold dark:text-[#f0f0f0]">{props.weight}</span>
            </div>
            <div className="flex items-center">
                <img className="w-4 h-4 mr-1" src={props.isDark ? getImageURL("ruler-orange.png") : getImageURL("ruler-black.png")} alt="height" />
                <span className="text-sm font-semibold dark:text-[#f0f0f0]">{props.height}</span>
            </div>
        </div>
    )
}
