import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-open-sans bg-slate-500">
            <Navbar />
            <main className="min-h-[calc(100vh-400px)]">
            <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;