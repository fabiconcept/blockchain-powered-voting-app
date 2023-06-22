import { stateData } from "@/utils/demo_variable";
import SingleState from "../elements/SingleState";
import { sortStateListByName, splitArray } from "@/utils/helper";

export default function MiniLeaderBoard() {

    return (
        <section className="min-w-[20rem] sm:min-w-[30rem] flex-1 flex gap-4 flex-wrap">
            {splitArray(sortStateListByName(stateData), 9).map((splitArray, id) => (
                <section key={id} className="min-w-[15rem] bg-white flex-1 rounded-md p-4 shadow-sm border">
                    <div className="mb-4"><span className="text-xs font-semibold opacity-40">States Leaderboard</span></div>
                    <div className="overflow-auto max-h-full grid gap-2 list-none last:border-none border-b-2">
                        {splitArray.map((state, index) => (
                            <SingleState key={state.name} stateName={state.name} stat={state.stat} per={state.per} growth={
                                (state.lastPosition - 1) - index > 0 ? 1 : (state.lastPosition - 1) - index < 0 ? 0 : undefined
                            } />
                        ))}
                    </div>
                </section>
            ))}
        </section>
    )
}