"use client";

import AppButton from "@/app/authentication/elements/Button";
import InputText from "@/app/authentication/elements/InputText";
import { useState } from "react";
import { FaAt, FaUserAlt, FaWallet } from "react-icons/fa";

export default function AppForm() {
    const [walletAddress, setWalletAddress] = useState('');
    const [userName, setNserName] = useState('');
    const [email, setEmail]= useState('');


    return (
        <form className="my-10 flex flex-col gap-5 w-80">
            <InputText icon={<FaUserAlt />} label={"Full Name"} type={"text"} />
            <InputText icon={<FaWallet />} label={"Wallet Address"} type={"text"} />
            <InputText icon={<FaAt />} label={"Email address"} type={"email"} />
            <AppButton text={"Continue"} />
        </form>
    )
}
