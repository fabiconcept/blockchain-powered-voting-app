import AuthCarousel from "./elements/AuthCarousel";
import AppForm from "./components/AppForm";
import Image from "next/image";

export const metadata = {
    title: 'Authentication',
};

export default function page() {
    const data = [
        { id: 1, img: "https://blockchain.sirv.com/Images/assets/9ja/pic02.jpg" },
        { id: 2, img: "https://blockchain.sirv.com/Images/assets/9ja/pic04.jpg" },
        { id: 3, img: "https://blockchain.sirv.com/Images/assets/9ja/pic03.jpg" },
        { id: 4, img: "https://blockchain.sirv.com/Images/assets/9ja/pic05.jpg" },
        { id: 5, img: "https://blockchain.sirv.com/Images/assets/9ja/pic06.jpg" },
        { id: 6, img: "https://blockchain.sirv.com/Images/assets/9ja/pic07.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-4 pEnter">
            <div className="h-screen w-screen fixed -z-1 flex justify-center items-center filter grayscale-[100%] overflow-hidden">
                <Image width={2335} height={1717}  src="https://blockchain.sirv.com/Images/assets/map.jpg" alt="" className="opacity-10 min-w-full min-h-full max-w-full max-h-full object-cover animatedBackground" />
            </div>
            <section className="min-h-full relative z-1">
                <div className="img w-full flex flex-col h-full">
                    <main className="flex flex-col justify-center items-center flex-1">
                        <div className="logo w-24 m-7">
                            <Image width={3500} height={3500}  src="https://blockchain.sirv.com/Images/assets/logo.png" className="app logo" alt="" />
                        </div>
                        <span className="text-4xl my-3 font-semibold">Hello Again!</span>
                        <span className="max-w-xs text-center opacity-50 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, culpa sapiente?</span>
                        <AppForm />
                    </main>
                    {/* <footer className="flex gap-2 justify-center p-5 text-sm">
                        <span className="opacity-60">Don't have an account yet?</span>
                        <Link href={'/register'} className="text-main-blue font-bold scale-105">Sign Up</Link>
                    </footer> */}
                </div>
            </section>
            <AuthCarousel data={data} radiusSide={"left"} />
        </div>
    );
}