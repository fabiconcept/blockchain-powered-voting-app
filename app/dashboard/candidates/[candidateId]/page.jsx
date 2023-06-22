import { demoData, stateData } from "@/utils/demo_variable";
import BarChart from "../../components/BarChart";
import LeadChart from "../../elements/leadershipChart";
import { sortStateListByVoteCount } from "@/utils/helper";
import SingleState from "../../elements/SingleState";
import { Suspense } from "react";
import Image from "next/image";
import VotingButton from "../../elements/VotingButton";

export default function ViewCandidatePage() {
    return (
        <div className="p-6 w-full flex flex-col gap-4 overflow-y-auto">
            <div className="flex justify-between items-center w-full p-4 rounded-md bg-white border shadow-sm">
                <section className="flex gap-4 items-center">
                    <div className="relative">
                        <div className="h-16 w-16 rounded-full overflow-hidden border shadow-lg"><Image width={200} height={200}  src="https://blockchain.sirv.com/Images/assets/9ja/img4.jpg" alt="" /></div>
                        <div className="absolute -bottom-1 -right-1 grid place-content-center text-xs bg-orange-500 text-white w-8 h-8 border-4 border-background-main rounded-full">#6</div>
                    </div>
                    <div className="flex flex-col gap">
                        <span className="text-lg font-semibold">Nathan Ake</span>
                        <span className="text-sm opacity-50">Presidential Candidate</span>
                    </div>
                </section>

                <section>
                    <VotingButton />
                </section>
            </div>

            <div className="flex flex-wrap justify-between gap-4 w-full h-fit items-stretch">
                <div className="min-w-[20rem] flex flex-wrap p-4 gap-4 bg-white rounded-md border shadow flex-1">
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Political Party</span>
                        <span className="flex gap-2 text-sm font-semibold">APC</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Nationality</span>
                        <span className="flex gap-2 text-sm font-semibold">Nigerian</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Age</span>
                        <span className="flex gap-2 text-sm font-semibold">65 years old</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Height</span>
                        <span className="flex gap-2 text-sm font-semibold">180 cm</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Profession</span>
                        <span className="flex gap-2 text-sm font-semibold">CEO Jagaban</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Awards</span>
                        <span className="flex gap-2 text-sm font-semibold">Bla la Blu</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Current Club</span>
                        <span className="flex gap-2 text-sm font-semibold">Manchester city</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 min-w-[8rem] flex-1">
                        <span className="flex gap-2 text-sm opacity-40">Current Club</span>
                        <span className="flex gap-2 text-sm font-semibold">Manchester city</span>
                    </div>
                </div>
                <BarChart />
                <section className="min-w-[15rem] max-h-[25rem] overflow-y-auto bg-white flex-1 rounded-md relative flex flex-col p-4 shadow-sm border">
                    <div className="mb-4"><span className="text-xs font-semibold opacity-40 sticky top-0">States Leaderboard</span></div>
                    <div className="overflow-auto max-h-full grid gap-2 list-none last:border-none border-b-2">
                        {sortStateListByVoteCount(stateData).length > 0 && sortStateListByVoteCount(stateData)?.map((state, index) => (
                            <SingleState key={state.stateName} stateName={state.stateName} stat={state.stat} per={state.per} growth={
                                (state.lastPosition - 1) - index > 0 ? 1 : (state.lastPosition - 1) - index < 0 ? 0 : undefined
                            } />
                        ))}
                    </div>
                </section>
            </div>

            <Suspense>
                <div className="flex flex-wrap justify-between gap-4 w-full h-fit items-stretch">
                    <LeadChart chartData={demoData} />
                </div>
            </Suspense>
        </div>
    )
}