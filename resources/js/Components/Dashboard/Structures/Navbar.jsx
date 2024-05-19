import Dropdown from "@/Components/Dropdown";

export default function Navbar({ toggleSidebar, user, titleNavbar }) {
    return (
        <div className="z-30 flex items-center dark:bg-[#181818] justify-between w-full px-6 py-9 max-w-full">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="text-lg text-gray-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 dark:text-[#3751FF]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold dark:text-white">
                    {titleNavbar}
                </h1>
            </div>
            <ul className="flex items-center gap-1">
                {/* <li>
                    <div className="w-[2px] h-6 bg-gray-300 hidden md:flex" />
                </li> */}
                <li>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
                                >
                                    <span className="hidden md:block">
                                        {user?.name}
                                    </span>
                                    <img
                                        src={`/storage/${user?.avatar}`}
                                        alt=""
                                        className="object-cover w-8 h-8 border border-gray-800 rounded-full"
                                    />
                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </li>
            </ul>
        </div>
    );
}
