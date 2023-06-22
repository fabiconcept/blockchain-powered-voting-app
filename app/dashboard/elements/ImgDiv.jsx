import Image from "next/image";

export default function ImgDiv({imgSrc, altText}) {
    return (
        <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg border p grid place-content-center hover:scale-110 active:scale-90 cursor-pointer">
            <Image width={200} height={200}  src={imgSrc} alt={altText} className="w-full object-cover scale-105" />
        </div>
    );
}