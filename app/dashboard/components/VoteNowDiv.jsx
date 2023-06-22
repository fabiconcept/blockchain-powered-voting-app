"use client"
import { getRandomData } from "@/utils/helper";
import { useState } from "react";

export default function VoteNowDiv({closeFunc}) {
    const [choice, setChoice] = useState(0)

    const choose = (idx) =>{
        choice === idx ?
            setChoice(0)
        :
            setChoice(idx);
    }

    const closeDiv = () => { 
        closeFunc(false);
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen grid place-content-center backdrop-blur-sm bg-[rgba(0,0,0,0.1)] z-40">
            <div className="p-3 relative bg-white rounded-md shadow-lg shadow-[rgba(0,0,0,0.1)] min-w-[20rem] sm:max-w-[30rem] max-w-[21rem] min-h-fit">
            <div className="absolute -top-1 px-3 py-[0.3rem] -right-1 rounded-tr-lg text-xs text-white bg-red-600 cursor-pointer hover:scale-110 active:opacity-40 active:scale-90" onClick={closeDiv}>x</div>
                <div className="w-full text-center opacity-40 py-4 sticky top-0 capitalize text-sm">select your candidate</div>
                <div className=" flex flex-wrap gap-2 pb-4">
                    {getRandomData(6).map((i, idx)=>(
                        <div onClick={()=>choose(idx+1)} key={idx} className={`w-full px-3 group min-w-[8rem] flex-1 py-6 border-opacity-25 hover:border-none ${choice === idx+1 ? "bg-main-blue hover:bg-main-blue scale-105 text-white" : "bg-white hover:bg-main-blue hover:bg-opacity-20 hover:scale-[1.025]"} active:scale-95 active:opacity-40 border flex justify-center rounded-md hover:shadow cursor-pointer`}>
                            <span className="text-sm group-hover:font-semibold text-center capitalize">Tinubu</span>
                        </div>
                    ))}
                </div>
                {choice > 0 && <button className="uppercase text-sm px-6 py-4 rounded-md shadow-sm bg-main-green w-full hover:scale-105 active:scale-95 hover:-translate-y-1 active:translate-y-1 text-white absolute -bottom-10 left-1/2 -translate-x-1/2">Vote</button>}
            </div>
        </div>
    )
}