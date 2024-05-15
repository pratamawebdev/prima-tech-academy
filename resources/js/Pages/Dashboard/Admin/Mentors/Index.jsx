import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Index({ mentors, auth }) {
    return (
        <DashboardLayout titleNavbar={"Mentors"} user={auth.user}>
            <section className="flex flex-col w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <div></div>
                <div>
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b-2">
                                <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                    Id
                                </th>
                                <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-lg font-medium text-left text-black">
                                    &nbsp;
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {users.data.map(({ id, name, email, role }) => (
                                <tr key={id} className="border-b">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {role}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link
                                            className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            href={route("users.edit", id)}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </section>
        </DashboardLayout>
    );
}
