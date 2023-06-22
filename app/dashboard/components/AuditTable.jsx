import Audit_Tr from "../elements/table element/Audit_Tr";

export default function AuditTable({extraClassName, data}) {
    return (
        <table className={`w-full ${extraClassName}`}>
            <thead>
                <tr className="opacity-40 border-b">
                    <td className="py-4 sm:text-sm text-xs md:table-cell hidden font-semibold px-2">Date</td>
                    <td className="py-4 sm:text-sm sm:px-0 px-4 text-xs sm:table-cell font-semibold">Sender</td>
                    <td className="py-4 sm:text-sm text-xs sm:table-cell font-semibold">Type</td>
                    <td className="py-4 sm:text-sm text-xs md:table-cell hidden font-semibold">Title</td>
                    <td className="py-4 sm:text-sm text-xs font-semibold">Action</td>
                </tr>
            </thead>
            <tbody>
                {data?.map((audit, idx)=>(
                    <Audit_Tr key={idx} context={audit.context} date={audit.date} from={audit.from} type={audit.type} />
                ))}
            </tbody>
        </table>
    )
}
