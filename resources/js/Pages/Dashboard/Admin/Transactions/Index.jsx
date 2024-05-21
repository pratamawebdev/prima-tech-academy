import Table from "@/Components/Dashboard/Constructs/Table";
import ImageModal from "@/Components/Dashboard/Elements/ImageModal";
import TableHeading from "@/Components/Dashboard/Elements/TableHeading";
import Button from "@/Components/Global/Elements/Button";
import { dataTheadTableTransactions } from "@/data";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatDate } from "@/utils/formatDate";
import { responseAlert } from "@/utils/responseAlert";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, transactions }) {
    console.log(transactions);
    const [isModalOpen, setModalOpen] = useState(false);
    const imageUrl = "https://via.placeholder.com/800"; // URL gambar yang akan ditampilkan

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const formData = {
        _method: "PUT",
    };

    const { data, setData, post, processing, errors, reset } =
        useForm(formData);

    const submit = (e) => {
        e.preventDefault();

        post(
            route(
                "dashboard.admin.subscribe-transactions.update",
                transactions
            ),
            {
                onSuccess: () => {
                    responseAlert(
                        "Success",
                        "Transaction updated successfully.",
                        "success"
                    );
                    reset();
                },
            }
        );
    };
    return (
        <DashboardLayout titleNavbar={"Transactions"} user={auth.user}>
            <section className="flex flex-col w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <div className="w-full overflow-x-auto">
                    <Table
                        th={dataTheadTableTransactions.map((item) => {
                            return (
                                <TableHeading
                                    key={item.id}
                                    sortable={item.sortable}
                                >
                                    {item.name}
                                </TableHeading>
                            );
                        })}
                        td={transactions?.map((transaction) => {
                            console.log(transaction.is_paid);
                            return (
                                <tr
                                    key={transaction?.id}
                                    className="hover:bg-gray-100"
                                >
                                    <td className="px-2 py-2  min-w-[200px] max-w-[300px] md:max-w-none">
                                        <div className="flex items-center space-x-3">
                                            {formatCurrency(
                                                transaction?.total_amount
                                            )}
                                        </div>
                                    </td>

                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {formatDate(transaction?.created_at)}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {transaction.subscription_start_date
                                            ? formatDate(
                                                  transaction?.subscription_start_date
                                              )
                                            : "Not Started"}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {transaction?.is_paid ? (
                                            <span className="px-3 py-1 font-bold text-white bg-green-500 rounded-2xl">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 font-bold text-white bg-orange-500 rounded-2xl">
                                                Pending
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        {transaction?.user?.name}
                                    </td>
                                    <td className="px-2 py-2 min-w-[160px] max-w-[300px] md:max-w-none">
                                        <div className="flex items-center gap-1">
                                            <Button
                                                onClick={openModal}
                                                data-tip="Detail"
                                                classname={
                                                    "bg-primary tooltip !rounded-full !px-2 !py-2"
                                                }
                                            >
                                                <img
                                                    src="/images/icons/icon-detail.svg"
                                                    alt=""
                                                    className="object-cover w-5 h-5"
                                                />
                                            </Button>
                                            <Button
                                                disabled={transaction?.is_paid}
                                                onClick={submit}
                                                data-tip={`${
                                                    transaction?.is_paid
                                                        ? "Approved"
                                                        : "Approve Payment"
                                                }`}
                                                classname={`tooltip !rounded-full !px-2 !py-2 ${
                                                    transaction?.is_paid
                                                        ? "bg-gray-500 cursor-not-allowed"
                                                        : "bg-green-500"
                                                }`}
                                            >
                                                <img
                                                    src="/images/icons/icon-check.svg"
                                                    alt=""
                                                    className="object-cover w-5 h-5"
                                                />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    />
                </div>
            </section>
            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageUrl={imageUrl}
            />
        </DashboardLayout>
    );
}
