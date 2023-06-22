import { FaFilter, FaSearch } from "react-icons/fa";
import UserCard from "../elements/UserCard";

export default function Candidates() {
    return (
        <div className="bg-white w-full h-full flex flex-1 flex-col">
            <div className="px-6 flex justify-between border-b-[1px] items-center">
                <span className="text-main-green border-b-2 border-main-green translate-y-[1px] text-sm py-4">Candidates</span>
                <div className="flex items-center gap-7">
                    <span className="flex items-center gap-2 cursor-pointer text-sm opacity-40">
                        <span className="text-xs"><FaFilter /></span>
                        Filter
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer text-sm opacity-40">
                        <span className="text-xs"><FaSearch /></span>
                        search
                    </span>
                </div>
            </div>
            <section className="p-6 grid sm:grid-cols-2 md:grid-cols-3 w-full flex-1 gap-4 overflow-y-auto max-h-full">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </section>
        </div>
    )
}