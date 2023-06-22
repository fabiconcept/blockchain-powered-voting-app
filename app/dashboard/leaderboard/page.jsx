import { demoData } from "@/utils/demo_variable";
import BarChart from "../components/BarChart";
import LeadChart from "../elements/leadershipChart";
import StateLeaderboard from "../components/StateLeaderboard";
import MiniLeaderBoard from "../components/MiniLeaderBoard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import GeneralStats from "../components/GeneralStats";

export default function LeaderBoardPage() {

    return (
        <div className="flex-1 py-4 p-5 flex gap-4 flex-col max-h-full overflow-y-auto">
            <div className="flex w-full gap-4 flex-wrap items-stretch h-fit flex-row sm:flex-row">
                <GeneralStats />
                <BarChart />
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg border shadow-sm flex flex-col gap-4">
                <div className="w-full font-bold text-sm">Candidates Leaderboard</div>
                <StateLeaderboard />
                <div className="w-full flex gap-1 justify-center p-2 mt-2">
                    <div className="shadow-md cursor-pointer bg-main-blue text-white hover:scale-125 border active:scale-95 active:shadow-inner active:border-none p-2 text-sm"><FaAngleLeft /></div>
                    <div className="shadow-md cursor-pointer hover:scale-105 border active:scale-95 active:shadow-inner active:border-none w-9 grid place-content-center text-sm">0</div>
                    <div className="shadow-md cursor-pointer bg-main-blue text-white hover:scale-125 border active:scale-95 active:shadow-inner active:border-none p-2 text-sm"><FaAngleRight /></div>
                </div>
            </div>
            <div className="w-full flex-1 p-4 bg-white grid place-content-center rounded-lg shadow-sm"><LeadChart chartData={demoData} /></div>
            <MiniLeaderBoard /> 
        </div>
    );
}