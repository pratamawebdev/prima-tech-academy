import React from "react";

const Table = ({ th, td }) => {
    return (
        <table className="min-w-full table-auto whitespace-nowrap">
            <thead className="border-b-2 border-b-gray-300">
                <tr>{th}</tr>
                <tr className={`col-span-${th.length} h-2`}></tr>
            </thead>
            <tbody>
                <tr className={`col-span-${th.length} h-2`}></tr>
                {td}
            </tbody>
        </table>
    );
};

export default Table;
