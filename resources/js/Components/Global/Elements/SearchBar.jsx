import React from "react";

const SearchBar = () => {
    return (
        <div className="relative flex items-center justify-start w-full h-full md:w-fit">
            <img
                src={"/images/icons/icon-search.svg"}
                alt="Search icon"
                className="absolute w-4 h-4 left-3"
            />
            <input
                type="text"
                placeholder="Search & Filter"
                className="w-full pr-6 border border-gray-500 outline-none pl-9 focus:ring-0 focus:border-gray-500 rounded-3xl placeholder:text-wrap placeholder:text-gray-500"
            />
        </div>
    );
};

export default SearchBar;
