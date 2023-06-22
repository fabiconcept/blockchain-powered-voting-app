"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChartBar, FaHome, FaList, FaLongArrowAltRight, FaPeopleArrows } from "react-icons/fa";

export async function getStaticProps(context) {
    const { params } = context;
    const currentPage = params.page;
  
    return {
      props: {
        currentPage,
      },
    };
  }

export default function MainNav({currentPage}) {
    const [currentUrl, setCurrentUrl] = useState(0);

    useEffect(()=>{
        setCurrentUrl(currentPage);
    }, [currentPage]);

    return (
        <nav className="flex flex-col justify-between h-full items-center border-r px-3 py-3">
            <div className="rounded-full w-10 aspect-square grid place-content-center overflow-hidden cursor-pointer border">
                <Image width={200} height={200} src="https://blockchain.sirv.com/Images/assets/logo.png" className="w-full aspect-square object-cover" alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-center list-none gap-7">
                <Link href={"/dashboard"} className={`text-lg py-2 px-2 opacity-40 cursor-pointer rounded-md aspect-square transition ease-linear duration-100 hover:bg-green-200 hover:shadow-lg hover:opacity-100 active:opacity-70 active:scale-90`}><FaHome /></Link>
                <Link href={"/dashboard/candidates"} className={`text-lg py-2 px-2 shadow-lg bg-main-green text-white cursor-pointer rounded-md aspect-square transition ease-linear duration-100 hover:bg-green-200 hover:shadow-lg hover:opacity-100 active:opacity-70 active:scale-90`}><FaPeopleArrows /></Link>
                <Link href={"/dashboard/leaderboard"} className={`text-lg py-2 px-2 opacity-40 cursor-pointer rounded-md aspect-square transition ease-linear duration-100 hover:bg-green-200 hover:shadow-lg hover:opacity-100 active:opacity-70 active:scale-90`}><FaChartBar /></Link>
                <Link href={"/dashboard/audit"} className={`text-lg py-2 px-2 opacity-40 cursor-pointer rounded-md aspect-square transition ease-linear duration-100 hover:bg-green-200 hover:shadow-lg hover:opacity-100 active:opacity-70 active:scale-90`}><FaList /></Link>
            </div>
            <div className={`text-lg py-2 px-2 opacity-40 cursor-pointer rounded-md aspect-square transition ease-linear duration-100 hover:bg-green-200 hover:shadow-lg hover:opacity-100 active:opacity-70 active:scale-90`}>
                {/* <FaLongArrowAltRight /> */}
                {currentUrl}
            </div>
        </nav>
    );
}