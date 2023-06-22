import { FaEllipsisV } from "react-icons/fa";
import Chart from "./ChartComponents";
import { demoData } from "@/utils/demo_variable";

export default function MiniChart() {

    return (
        <div className="min-w-[20rem] sm:min-w-full rounded-md px-4 py-6 bg-white border">
            <div className="w-full flex justify-between items-center mb-4">
                <span className="text-sm scale-95">Election Leaderboard</span>
                <FaEllipsisV className="text-sm opacity-50 cursor-pointer active:scale-75" />
            </div>
            <Chart chartData={demoData} />
        </div>
    )
}