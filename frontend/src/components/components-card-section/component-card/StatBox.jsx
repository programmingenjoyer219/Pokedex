import React from 'react'
import getImageURL from '../../../utils/imageUtil';

export default function StatBox(props) {
    let stats = props.data;
    const statDiv = 2.55;
    if (stats) {
        return (
            <div className='flex flex-col justify-items-center gap-2 w-full'>
                <div className="flex items-center">
                    <img src={props.isDark ? getImageURL("health-white.png") : getImageURL("health.png")} alt="HP" className="w-6 h-6 mr-2" />
                    <span className="text-black dark:text-[#f0f0f0] font-bold w-10">{stats["HP"]}</span>
                    <div className="w-full bg-yellow-200 rounded-full h-2.5 ml-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${(stats["HP"] / statDiv)}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src={props.isDark ? getImageURL("sword-white.png") : getImageURL("sword.png")} alt="Attack" className="w-6 h-6 mr-2" />
                    <span className="text-black dark:text-[#f0f0f0] font-bold w-10">{stats["Attack"]}</span>
                    <div className="w-full bg-yellow-200 rounded-full h-2.5 ml-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${(stats["Attack"] / statDiv)}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src={props.isDark ? getImageURL("shield-white.png") : getImageURL("shield.png")} alt="HP" className="w-6 h-6 mr-2" />
                    <span className="text-black dark:text-[#f0f0f0] font-bold w-10">{stats["Defense"]}</span>
                    <div className="w-full bg-yellow-200 rounded-full h-2.5 ml-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${(stats["Defense"] / statDiv)}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src={getImageURL("sword-red.png")} alt="HP" className="w-6 h-6 mr-2" />
                    <span className="text-red-500 font-bold w-10">{stats["Sp. Attack"]}</span>
                    <div className="w-full bg-yellow-200 rounded-full h-2.5 ml-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${(stats["Sp. Attack"] / statDiv)}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src={getImageURL("shield-red.png")} alt="HP" className="w-6 h-6 mr-2" />
                    <span className="text-red-500 font-bold w-10">{stats["Sp. Defense"]}</span>
                    <div className="w-full bg-yellow-200 rounded-full h-2.5 ml-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${(stats["Sp. Defense"] / statDiv)}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src={props.isDark ? getImageURL("speed-white.png") : getImageURL("speed.png")} alt="HP" className="w-6 h-6 mr-2" />
                    <span className="text-black dark:text-[#f0f0f0] font-bold w-10">{stats["Speed"]}</span>
                    <div className="w-full bg-yellow-200 rounded-full h-2.5 ml-2">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${(stats["Speed"] / statDiv)}%` }}
                        ></div>
                    </div>
                </div>

            </div>
        )
    }
}
