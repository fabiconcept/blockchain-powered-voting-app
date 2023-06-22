import Candidates from "../components/Candidates";
import VotingButton from "../elements/VotingButton";

export default function candidatesPage() {
    return (
        <main className="flex-1 py-4 p-5 flex gap-4 flex-col max-h-full overflow-y-auto">
            <div className="w-full flex justify-end">
                <VotingButton />
            </div>
            <Candidates />
        </main>
    );
}