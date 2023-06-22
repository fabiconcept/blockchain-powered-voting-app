import MiniCard from "../elements/MiniCard";
import MiniChart from "../elements/MiniChart";

export default function GeoStats() {
    return (
        <section className="min-w-[20rem] sm:min-w-[30rem] gap-4 flex flex-col flex-1">
            <div>
                <MiniChart />
            </div>
            <div className="flex gap-4">
                <MiniCard h={"Lead"} main={"Tinubu"} progress={1} type={"rank"} />
                <MiniCard h={"Pursing"} main={"Peter Obi"} type={"rank"} />
                <MiniCard h={"Pursing"} main={"Atiku"} progress={0} type={"rank"} />
            </div>
        </section>
    )
}