import GeneralStats from "./components/GeneralStats";
import GeoStats from "./components/GeoStats";
import MiniLeaderBoard from "./components/MiniLeaderBoard";
import VotingButton from "./elements/VotingButton";

export default function DashboardPage() {
    return (
        <main className="flex-1 py-4 p-5 flex gap-4 flex-col max-h-full overflow-y-auto">
            <div>
                <VotingButton />
            </div>
            <div className="flex w-full gap-4 flex-wrap items-stretch h-fit flex-row-reverse sm:flex-row">
                <GeneralStats />
                <GeoStats />
            </div>
            <MiniLeaderBoard />
        </main>
    );
}