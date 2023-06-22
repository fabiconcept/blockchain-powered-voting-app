"use client"
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import AuditTable from "../components/AuditTable";
import { auditData } from "@/utils/demo_variable";
import { sortStateListByDate, splitArray } from "@/utils/helper";
import { useEffect, useState } from "react";

export default function AuditPage() {
    const [auditArray, setAuditArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [arrayPack, setArrayPack] = useState([]);
    const [arrayToDisplay, setArrayToDisplay] = useState([]);
    
    useEffect(()=>{
        setArrayPack(splitArray(auditArray, 6));
    }, [auditArray]);
    
    useEffect(()=>{
        setArrayToDisplay(arrayPack[currentPage]);
    }, [currentPage, arrayPack]);
    
    useEffect(()=>{
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
        <div className="overflow-y-auto p-4 flex flex-col flex-wrap w-full h-fit min-h-full max-h-screen">
            <div className="w-full py-3 px-5 bg-white rounded-md shadow h-full">
                <div className="w-full flex justify-between items-center my-4 gap-4">
                    <span className="text-md font-semibold">Audit</span>
                    <div className="sm:w-80 w-full flex items-center px-4 border rounded-md overflow-hidden focus-within:border-main-blue">
                        <FaSearch className="opacity-40 font-light text-sm peer-focus:text-main-blue" />
                        <input type="text" className="peer bg-transparent outline-none border-none py-2 px-3 flex-1" placeholder="search audit" />
                    </div>
                </div>
                <div className="flex flex-col min-h-fit">
                    <AuditTable extraClassName={"min-h-[40em]"} data={arrayToDisplay} />
                    <div className="w-full flex gap-1 justify-center py-4">
                        <div className="shadow-md cursor-pointer bg-main-blue text-white hover:scale-125 border active:scale-95 active:shadow-inner active:border-none p-2 text-sm" onClick={forwardHandler}><FaAngleLeft /></div>
                        <div className="shadow-md cursor-pointer hover:scale-105 border active:scale-95 active:shadow-inner active:border-none w-9 grid place-content-center text-sm">
                            {currentPage+1}
                        </div>
                        <div className="shadow-md cursor-pointer bg-main-blue text-white hover:scale-125 border active:scale-95 active:shadow-inner active:border-none p-2 text-sm" onClick={backwardHandler}><FaAngleRight /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}