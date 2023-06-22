import MainNav from "./components/MainNav";

export const metadata = {
    title: 'Dashboard'
};

export default function DashboardLayout({ children }) {
    return (
        <main className="flex transition ease-linear duration-[0.25s] h-screen bg-background-main">
            <MainNav/>
            {children}
        </main>
    )
}