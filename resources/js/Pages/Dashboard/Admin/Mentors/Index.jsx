import Table from "@/Components/Dashboard/Constructs/Table";
import TableHeading from "@/Components/Dashboard/Elements/TableHeading";
import FormMentor from "@/Components/Dashboard/Structures/FormMentor";
import Button from "@/Components/Global/Elements/Button";
import SearchBar from "@/Components/Global/Elements/SearchBar";
import Modal from "@/Components/Modal";
import { dataTheadTableMentors } from "@/data";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { confirmDeleteAlert } from "@/utils/confirmDeleteAlert";
import { formatDate } from "@/utils/formatDate";
import { truncateText } from "@/utils/truncateText";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ mentors, auth }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    console.log(mentors);

    const openModal = () => {
        setOpen(true);
    };

    const handleDelete = (mentor) => {
        destroy(route("dashboard.admin.mentors.destroy", mentor), {
            onSuccess: () => {
                console.log("Mentor deleted successfully");
            },
        });
    };

    const { delete: destroy, processing } = useForm();

    const showAlertDelete = (mentor) => {
        confirmDeleteAlert(handleDelete, mentor);
    };
    return (
        <DashboardLayout titleNavbar={"Mentors"} user={auth.user}>
            <section className="flex flex-col w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
                    <SearchBar />
                    <Button
                        onClick={() => openModal()}
                        classname="text-lg font-medium text-white bg-primary"
                    >
                        Add New
                    </Button>
                </div>
                <div className="w-full overflow-x-auto">
                    <Table
                        th={dataTheadTableMentors.map((item) => {
                            return (
                                <TableHeading
                                    key={item.id}
                                    sortable={item.sortable}
                                >
                                    {item.name}
                                </TableHeading>
                            );
                        })}
                        td={mentors?.data?.map((mentor) => {
                            return (
                                <tr
                                    key={mentor?.id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="px-2 py-2  min-w-[200px] max-w-[300px] md:max-w-none">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 border-2 rounded-full mask mask-squircle">
                                                    <img
                                                        src={`/storage/${mentor?.user?.avatar}`}
                                                        alt="Avatar"
                                                        className="border"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {truncateText(
                                                        mentor?.user?.name,
                                                        30
                                                    )}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {mentor?.user?.occupation}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-2 py-2 min-w-[200px] max-w-[300px] md:max-w-none">
                                        {mentor?.user?.email}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {formatDate(mentor?.created_at)}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {formatDate(mentor?.updated_at)}
                                    </td>
                                    <td className="px-2 py-2 min-w-[100px]">
                                        <Button
                                            onClick={() =>
                                                showAlertDelete(mentor)
                                            }
                                            classname="font-medium text-white bg-red-500 text-md"
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    />
                </div>
                {/* <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            leads.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.first_name}</div>
                                                <div className="text-sm opacity-50">{l.last_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{moment(new Date()).add(-5*(k+2), 'days').format("DD MMM YY")}</td>
                                    <td>{getDummyStatus(k)}</td>
                                    <td>{l.last_name}</td>
                                    <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5"/></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                </div> */}
            </section>
            <Modal show={open} onClose={closeModal} maxWidth="lg">
                <FormMentor closeModal={closeModal} />
            </Modal>
        </DashboardLayout>
    );
}
