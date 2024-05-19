import { useState } from "react";
import Sidebar from "../Components/Dashboard/Structures/Sidebar";
import Navbar from "../Components/Dashboard/Structures/Navbar";

export default function DashboardLayout({ children, user, titleNavbar }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div>
            <Sidebar
                auth={user}
                isSidebarOpen={isSidebarOpen}
                handleCloseSidebar={() => setIsSidebarOpen(false)}
            />
            <div
                className={`bg-gray-50 min-h-screen transition-all main ${
                    isSidebarOpen ? "md:ml-60" : "ml-0 w-full"
                }`}
            >
                <Navbar
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                    user={user}
                    titleNavbar={titleNavbar}
                />
                <div className="min-h-screen p-6 bg-secondary">{children}</div>
            </div>
        </div>
    );
}
