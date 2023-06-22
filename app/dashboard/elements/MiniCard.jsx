import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import FloatingChart from "./floatingChat";

export default function MiniCard({h, main, p, type, progress}) {
    const demoData = [
        {party: "PDP", voteCount: (Math.round(Math.random()*99)), partyColor: "#e62a20"},
        {party: "APGA", voteCount: (Math.round(Math.random()*99)), partyColor: "#34606e"},
        {party: "APC", voteCount: (Math.round(Math.random()*99)), partyColor: "rgba(0, 38, 255, 1)"},
        {party: "APP", voteCount: (Math.round(Math.random()*99)), partyColor: "#de4987"},
        {party: "LPP", voteCount: (Math.round(Math.random()*99)), partyColor: "#e15b44"},
        {party: "ACP", voteCount: (Math.round(Math.random()*99)), partyColor: "#373641"},
    ]
    return (
        <div className="py-5 min-w-[fit-content] relative flex-1 overflow-hidden rounded-md bg-white text-center h-fit grid place-content-center gap-3 hover:scale-105 border">
            <span className="relative z-[2] text-xs opacity-50 font-semibold capitalize">{h}</span>
            {<span className={`relative z-[2] font-semibold ${type === undefined && "text-[1.5rem]"} scale-110 flex items-center justify-center gap-2`}>{main} {type === "rank" ? progress === 1 ? <span className="text-xs text-main-green"><FaArrowUp/> </span> : progress === 0 ?<span className="text-xs text-red-600"><FaArrowDown/></span> : "" : ""}</span>}
            <span className="relative z-[2] text-xs opacity-40">{p}</span>
            {type !== undefined && <div className="absolute w-full z-[1] opacity-25 scale-105 -left-[0.25rem] -bottom-[0.3rem]">
                <FloatingChart chartData={demoData} />
            </div>}
        </div>
    )
}