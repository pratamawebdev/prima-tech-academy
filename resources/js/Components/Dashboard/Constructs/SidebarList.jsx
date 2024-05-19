import { Link, usePage } from "@inertiajs/react";

export default function SidebarList({ data, auth }) {
    const location = usePage().url;
    return (
        <ul>
            {data?.map((item) => {
                const active = location.startsWith(item.path);
                const userRoleNames = auth?.roles?.map((role) => role.name);
                const showNav = item.roles.some((role) =>
                    userRoleNames.includes(role)
                );

                return (
                    <li
                        key={item.id}
                        className={`items-center justify-center mb-2 ${
                            showNav ? "flex" : "hidden"
                        }`}
                    >
                        <Link
                            href={item.href}
                            className={`flex items-center px-2 py-2 mb-2 w-[80%] rounded-lg ${
                                active && "bg-white bg-opacity-25"
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
