import Bar from "../elements/Bar";

export default function BarChart() {
    return (
        <div className="min-w-[15rem] sm:min-w-[15rem] sm:flex-1 md:flex-none flex-1 flex flex-col rounded-md p-4 bg-white border shadow-sm hover:shadow-md hover:scale-[1.025]">
            <div className="w-full gap-2 grid grid-cols-3 flex-1 place-items-end overflow-hidden bg-background-main pt-2 px-2 rounded-t-lg">
                <Bar per={35} position={"2nd"}/>
                <Bar per={65} position={"1st"} />
                <Bar per={25} position={"3rd"} />
            </div>
            <section className="p-4 flex flex-col items-center text-center">
                <p className="font-bold text-sm">We have a winner</p>
                <p className="text-sm max-w-[15rem] opacity-40">Wade Warren wins the main prize ($100), congratulations</p>
            </section>
        </div>
    );
}
