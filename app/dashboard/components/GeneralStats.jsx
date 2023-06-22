import MiniCard from "../elements/MiniCard";
import StatsBoard from "../elements/StatsBoard";

export default function GeneralStats() {
    return (
        <section className="flex flex-1 min-w-[20rem] gap-4 flex-col max-h-fit">
            <div className="flex gap-4">
                <MiniCard h={"Total Votes"} main={"10.5M"} p={"last vote: 2mins ago"} />
                <MiniCard h={"Total candidates"} main={"006"} p={"presidential"} />
            </div>
            <StatsBoard />
        </section>
    );
}