import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function SingleState({stateName, stat, per, growth}) {
    return (
        <div className="flex items-center py-2 border-b-[1px] last:border-none border-slate-200">
            {stateName && <span className="text-sm font-semibold flex-1 capitalize">{stateName}</span>}
            {stat && <span className="text-sm px-3">{stat}</span>}
            {<span className={`text-xs w-10 text-main-g px-3 ${growth === 1 ? "text-main-green" : growth === undefined ? "" : "text-red-600"}`}>
                {growth === 1 && <FaArrowUp />}
                {growth === 0 && <FaArrowDown />}
                {growth === undefined && "--"}
            </span>}
            {per && <span className="text-sm pl-3 opacity-40 w-10">{per}</span>}
        </div>
    );
}