import Table from "@/Components/Dashboard/Constructs/Table";
import TableHeading from "@/Components/Dashboard/Elements/TableHeading";
import Button from "@/Components/Global/Elements/Button";
import SearchBar from "@/Components/Global/Elements/SearchBar";
import { dataTheadTableCourses } from "@/data";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { confirmDeleteAlert } from "@/utils/confirmDeleteAlert";
import { formatDate } from "@/utils/formatDate";
import { truncateText } from "@/utils/truncateText";
import { Link, useForm } from "@inertiajs/react";

export default function Index({ courses, auth }) {
    const handleDelete = (course) => {
        destroy(route("dashboard.admin.courses.destroy", course), {
            onSuccess: () => {
                console.log("course deleted successfully");
            },
        });
    };

    const { delete: destroy, processing } = useForm();

    const showAlertDelete = (course) => {
        confirmDeleteAlert(handleDelete, course);
    };
    return (
        <DashboardLayout titleNavbar={"Courses"} user={auth.user}>
            <section className="flex flex-col w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
                    <SearchBar />
                    <Link
                        href={route("dashboard.admin.courses.create")}
                        className="flex items-center justify-center px-4 py-2 text-lg font-medium text-white w-fit rounded-3xl bg-primary"
                    >
                        Add New
                    </Link>
                </div>
                <div className="w-full overflow-x-auto">
                    <Table
                        th={dataTheadTableCourses.map((item) => {
                            return (
                                <TableHeading
                                    key={item.id}
                                    sortable={item.sortable}
                                >
                                    {item.name}
                                </TableHeading>
                            );
                        })}
                        td={courses?.data?.map((course) => {
                            return (
                                <tr
                                    key={course?.id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="px-2 py-2  min-w-[200px] max-w-[300px] md:max-w-none">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 border-2 rounded-full mask mask-squircle">
                                                    <img
                                                        src={`/storage/${course?.thumbnail}`}
                                                        alt="Avatar"
                                                        className="border"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {truncateText(
                                                        course?.name,
                                                        30
                                                    )}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {course?.slug}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 min-w-[200px] max-w-[300px] md:max-w-none">
                                        {course?.category?.name}
                                    </td>
                                    <td className="px-2 py-2 min-w-[200px] max-w-[300px] md:max-w-none">
                                        {course?.mentor?.user?.name}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {formatDate(course?.created_at)}
                                    </td>
                                    <td className="px-2 py-2 min-w-[100px]">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={route(
                                                    "dashboard.admin.courses.show",
                                                    course
                                                )}
                                                className="flex items-center justify-center px-4 py-2 font-medium text-white bg-orange-500 w-fit rounded-3xl text-md"
                                            >
                                                Manage
                                            </Link>
                                            <Button
                                                onClick={() =>
                                                    showAlertDelete(course)
                                                }
                                                classname="font-medium text-white bg-red-500 text-md"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    />
                </div>
            </section>
        </DashboardLayout>
    );
}
