import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-open-sans bg-slate-500">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;