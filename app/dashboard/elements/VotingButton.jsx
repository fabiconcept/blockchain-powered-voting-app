"use client"

import { useState } from "react";
import VoteNowDiv from "../components/VoteNowDiv";

export default function VotingButton() {
    const [voting, setVoting] = useState(false);
    
    const trigger =()=>{
        setVoting(true);
    }
    
    return (
        <>
            {voting && <VoteNowDiv closeFunc={setVoting} />}
            <div className="rounded-3xl px-10 py-3 w-fit bg-main-green text-white cursor-pointer" onClick={trigger}>Vote</div>
        </>
    )
}