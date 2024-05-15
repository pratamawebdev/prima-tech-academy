import { Link } from "@inertiajs/react";

export default function SidebarList({ data }) {
    return (
        <ul>
            {data?.map((item) => {
                return (
                    <li
                        key={item.id}
                        className="flex items-center justify-center mb-2"
                    >
                        <Link
                            href={item.href}
                            className={`flex items-center px-2 py-2 mb-2 w-[80%] rounded-lg ${
                                item.current && "bg-white bg-opacity-25"
                            }`}
                        >
                            <img
                                src={item.icon}
                                alt={`${item.title} icon`}
                                className="w-6 h-6 mr-4 text-left"
                            />

                            <span className="font-bold text-white">
                                {item.title}
                            </span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
