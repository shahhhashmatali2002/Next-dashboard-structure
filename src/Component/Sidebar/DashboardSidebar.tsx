import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardSidebar = (props: { showSidebar: boolean }) => {
    const router = useRouter();

    // Updated sidebarItems with only the two required items
    const sidebarItems = [
        {
            id: "0",
            icon: "/Icons/home.png",
            route: "/sidebar1",
            text: "Sidebar 1",
            width: 22,
            height: 22,
        },
        {
            id: "1",
            icon: "/Icons/home.png",
            route: "/sidebar2",
            text: "Sidebar 2",
            width: 22,
            height: 22,
        },
    ];

    return (
        <div className={`${props.showSidebar ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0 fixed lg:relative top-0 left-0 h-screen w-64 
    bg-white border-r border-gray-200 shadow-[8px_0_20px_rgba(0,0,0,0.12)]
    transition-transform duration-300 ease-out z-50`}>
            {/* Header Section */}
            <div className="p-6 pt-20">
                {/* You can add a header logo or title if needed */}
            </div>

            {/* Navigation Items */}
            <nav className="p-4">
                <ul className="space-y-1">
                    {sidebarItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => router.push(item.route)}
                                className="w-full text-left flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:shadow-md transition-all duration-200 ease-out"
                            >
                                <div className="p-2 rounded-lg bg-gray-200/50">
                                    <Image
                                        src={item.icon}
                                        width={item.width}
                                        height={item.height}
                                        alt={item.text}
                                        className="opacity-80"
                                    />
                                </div>
                                <span className="text-sm font-medium text-black">
                                    {item.text}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default DashboardSidebar;
