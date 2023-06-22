import { FaCalendarMinus, FaCalendarPlus, FaCheck, FaEye, FaPlus, FaRecycle } from "react-icons/fa";

export default function Audit_Tr({type, from, date, context}) {
    return (
        <tr className={`group border-b last:border-none trEnter hover:scale-110 hover:-translate-y-1 hover:shadow-md last:hover:shadow-none cursor-pointer hover:border-none`}>
            <td className="py-4 text-sm font-semibold hidden md:table-cell px-2">{date}</td>
            <td className="py-4 group-hover:scale-[1.025] group-hover:text-main-blue text-sm">
                <div className="sm:max-w-[20rem] md:max-w-[15rem] max-w-[12rem] overflow-hidden whitespace-nowrap text-ellipsis">
                    {from}
                </div>
            </td>
            <td className="py-4 gap-2 mx-2">
                <div className="flex items-center">
                    {!type && <FaCheck className="text-main-green"/>}
                    {type === 1 && <FaPlus className="text-orange-500"/>}
                    {type === 2 && <FaRecycle className="text-red-600"/>}
                    {type === 3 && <FaCalendarPlus className=""/>}
                    {type === 4 && <FaCalendarMinus className="text-gray-500"/>}
                </div>
            </td>
            <td className="hidden md:table-cell py-4 text-sm">{context}</td>
            <td className="py-4"><FaEye className="active:scale-100 active:opacity-40 hover:scale-125 mx-3 hover:text-main-blue" /></td>
        </tr>
    );
}