import { FaEllipsisV } from "react-icons/fa";

export default function StatsBoard() {
    return (
        <div className="min-w-[20rem] sm:min-w-full min-h-fit flex-1 rounded-md px-4 py-6 bg-white border">
            <div className="w-full flex justify-between items-center mb-4">
                <span className="text-sm scale-95">Election Summary</span>
                <FaEllipsisV className="text-sm opacity-50 cursor-pointer active:scale-75" />
            </div>

            <div className="grid grid-cols-3 gap-3 w-full mt-4 max-h-full overflow-auto">
                <div className="p-6 grid place-content-center text-center bg-background-main rounded-md gap-4">
                    <div className="text-lg font-bold">250.1M</div>
                    <div className="text-xs opacity-40">Registered Voters</div>
                </div>
                <div className="p-6 grid place-content-center text-center bg-background-main rounded-md gap-4">
                    <div className="text-lg font-bold">006</div>
                    <div className="text-xs opacity-40">Candidates</div>
                </div>
                <div className="p-6 grid place-content-center text-center bg-background-main rounded-md gap-4">
                    <div className="text-lg font-bold">APC</div>
                    <div className="text-xs opacity-40">Leading Party</div>
                </div>
                <div className="p-6 grid place-content-center text-center bg-background-main rounded-md gap-4">
                    <div className="text-lg font-bold">APGA</div>
                    <div className="text-xs opacity-40">Pursing Party</div>
                </div>
                <div className="p-6 grid place-content-center text-center bg-background-main rounded-md gap-4">
                    <div className="text-lg font-bold">2.5%</div>
                    <div className="text-xs opacity-40">Leading Margin</div>
                </div>
                <div className="p-6 grid place-content-center text-center bg-background-main rounded-md gap-4">
                    <div className="text-lg font-bold">14</div>
                    <div className="text-xs opacity-40">Days Left</div>
                </div>
            </div>
        </div>
    );
}