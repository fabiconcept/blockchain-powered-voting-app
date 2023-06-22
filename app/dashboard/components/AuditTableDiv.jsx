"use client"
import { sortStateListByDate, splitArray } from "@/utils/helper";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function AuditTableDiv({ limit }) {
    const [auditArray, setAuditArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [arrayPack, setArrayPack] = useState([]);
    const [arrayToDisplay, setArrayToDisplay] = useState([]);

    useEffect(() => {
        setArrayPack(splitArray(auditArray, 6));
    }, [auditArray]);

    useEffect(() => {
        setArrayToDisplay(arrayPack[currentPage]);
    }, [currentPage, arrayPack]);

    useEffect(() => {
        setAuditArray(sortStateListByDate(auditData));
    }, []);

    function backwardHandler() {
        if (currentPage >= arrayPack.length - 1) return
        setCurrentPage(currentPage + 1);

    }

    function forwardHandler() {
        if (currentPage <= 0) return
        setCurrentPage(currentPage - 1);
    }
    return (
        <div className="flex flex-col min-h-fit">
            <AuditTableDiv extraClassName={"min-h-[40em]"} data={arrayToDisplay} />
            <div className="w-full flex gap-1 justify-center py-4">
                <div className="shadow-md cursor-pointer bg-main-blue text-white hover:scale-125 border active:scale-95 active:shadow-inner active:border-none p-2 text-sm" onClick={forwardHandler}><FaAngleLeft /></div>
                <div className="shadow-md cursor-pointer hover:scale-105 border active:scale-95 active:shadow-inner active:border-none w-9 grid place-content-center text-sm">
                    {currentPage + 1}
                </div>
                <div className="shadow-md cursor-pointer bg-main-blue text-white hover:scale-125 border active:scale-95 active:shadow-inner active:border-none p-2 text-sm" onClick={backwardHandler}><FaAngleRight /></div>
            </div>
        </div>
    )
}