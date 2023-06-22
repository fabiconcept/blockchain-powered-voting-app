import { calculateRemEquivalent } from "@/utils/helper";
import ImgDiv from "./ImgDiv";

export default function Bar({ per, position }) {
    return (
        <div className={`w-full flex flex-col h-full min-h-[15rem] justify-end gap-4`}>
            <div className="mx-auto">
                <ImgDiv imgSrc={"https://blockchain.sirv.com/Images/assets/9ja/img4.jpg"}/>
            </div>
            <div className={`bg-orange-300 flex rounded-t-2xl overflow-hidden`} style={{height: `${calculateRemEquivalent(per)}`}}>
                <div className="flex flex-col w-full justify-center text-white items-center p-2">
                    <span className="text-sm">{position}</span>
                </div>
            </div>
        </div>
    )
}