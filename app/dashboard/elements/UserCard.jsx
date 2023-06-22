import Image from "next/image";

export default function UserCard() {
    return (
        <div className="p-6 border rounded-lg bg-background-main flex flex-col group relative hover:scale-[.98] active:scale-[.95] active:opacity-70 cursor-pointer">
            <div className="flex-1 flex flex-col justify-center items-center gap-4 relative z-[2]">
                <div className="h-40 aspect-square grid rounded-full place-content-center bg-white overflow-hidden group-hover:scale-[1.15] group-hover:translate-y-5 shadow-lg">
                    <Image width={200} height={200}  src="https://blockchain.sirv.com/Images/assets/9ja/img4.jpg" className="w-full object-cover" alt="" />
                </div>
                <div className="text-md opacity-80 font-semibold group-hover:-translate-y-5 group-hover:opacity-0">Name Tag</div>
            </div>
            <div className="absolute h-full w-full bg-slate-100 top-0 left-0 rounded-lg grid place-content-center overflow-hidden">
                <Image width={200} height={200}  src="https://blockchain.sirv.com/Images/assets/9ja/img1.jpg" className="w-full opacity-5 group-hover:scale-125 delay-300" alt="" />
            </div>
        </div>
    );
}