import { FaAngleUp, FaTrophy } from "react-icons/fa";
import ImgDiv from "../ImgDiv";

export default function Tr() {
    return (
        <tr className="border-b opacity-90 last:border-none">
            <td className="py-3">
                <div className="flex gap-3 items-center text-sm">
                    <FaAngleUp className="text-main-green" /> 1st
                </div>
            </td>
            <td className="py-3">
                <div className="flex gap-3 items-center text-sm">
                    <ImgDiv imgSrc={"https://blockchain.sirv.com/Images/assets/9ja/img4.jpg"} altText={"Candidate001"} />
                    <span>Waden Warren</span>
                </div>
            </td>
            <td className="py-3">
                <div className="flex gap-3 items-center text-sm">
                    <ImgDiv imgSrc={"https://blockchain.sirv.com/Images/assets/9ja/logo.png"} altText={"Party"} />
                    <span>Argentina</span>
                    <span className="p-1 bg-slate-400 rounded-3xl w-10 grid place-content-center text-xs text-white"><FaTrophy /></span>
                </div>
            </td>
            <td className="py-3">
                <div className="flex gap-3 items-center text-sm">
                    60M
                </div>
            </td>
        </tr>
    )
}
