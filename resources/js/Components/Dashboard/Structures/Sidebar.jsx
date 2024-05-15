import { menuSidebar } from "@/data";
import SidebarList from "../Constructs/SidebarList";
import { Link } from "@inertiajs/react";

export default function Sidebar({ isSidebarOpen, handleCloseSidebar }) {
    return (
        <>
            <div
                className={`fixed top-0 left-0 z-50 w-60 h-full  transition-transform bg-primary ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Link
                    href="/"
                    className="flex items-center justify-center px-4 py-10 border-b-gray-800"
                >
                    {/* <img
                        src="../images/logo/logo.png"
                        alt=""
                        className="object-cover w-8 h-8 rounded"
                    /> */}
                    <span className="text-2xl font-bold text-white">PTA</span>
                </Link>
                <div className="flex flex-col gap-8 mt-8">
                    <SidebarList data={menuSidebar} />
                </div>
            </div>
            <div
                onClick={handleCloseSidebar}
                className={`fixed top-0 left-0 z-40 w-full h-full bg-black/50 md:hidden ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
            />
        </>
    );
}
