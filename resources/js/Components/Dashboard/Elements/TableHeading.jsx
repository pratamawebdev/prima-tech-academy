import Button from "@/Components/Global/Elements/Button";

export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
    classname,
}) {
    return (
        <th onClick={(e) => sortChanged(name)} className="px-2">
            <div
                className={`flex text-nowrap items-center text-[#979AAC] gap-2 py-1 cursor-pointer md:min-w-0 ${classname}`}
            >
                {children}
                {sortable && (
                    <div className="flex flex-col -space-y-2">
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.6806 13.9783L15.4706 10.7683L13.5106 8.79828C12.6806 7.96828 11.3306 7.96828 10.5006 8.79828L5.32056 13.9783C4.64056 14.6583 5.13056 15.8183 6.08056 15.8183H11.6906H17.9206C18.8806 15.8183 19.3606 14.6583 18.6806 13.9783Z"
                                fill="#292D32"
                            />
                        </svg>

                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                                fill="#292D32"
                            />
                        </svg>
                        {/* <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 " +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "text-white"
                                    : "")
                            }
                        /> */}
                    </div>
                )}
            </div>
        </th>
    );
}
