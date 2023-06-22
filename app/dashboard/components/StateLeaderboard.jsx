import Tr from "../elements/table element/Tr";

export default function StateLeaderboard() {
    return (
        <table className="w-full">
            <thead>
                <tr className="opacity-40 border-b">
                    <td className="pb-4 text-sm">Position</td>
                    <td className="pb-4 text-sm">Candidate</td>
                    <td className="pb-4 text-sm">Party</td>
                    <td className="pb-4 text-sm">Vote Count</td>
                </tr>
            </thead>
            <tbody>
                <Tr/>
                <Tr/>
                <Tr/>
                <Tr/>
                <Tr/>
                <Tr/>
            </tbody>
        </table>
    );
}