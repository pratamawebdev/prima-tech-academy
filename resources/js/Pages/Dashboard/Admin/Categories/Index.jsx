import FormCategory from "@/Components/Dashboard/Structures/FormCategory";
import Button from "@/Components/Global/Elements/Button";
import Pagination from "@/Components/Global/Elements/Pagination";
import Modal from "@/Components/Modal";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { confirmDeleteAlert } from "@/utils/confirmDeleteAlert";
import { formatDate } from "@/utils/formatDate";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ categories, auth, sortOrder }) {
    const [open, setOpen] = useState(false);
    const [editCategory, setEditCategory] = useState(null);
    const closeModal = () => setOpen(false);

    const openModal = (category = null) => {
        setEditCategory(category);
        setOpen(true);
    };

    const handleDelete = (category) => {
        destroy(route("dashboard.admin.categories.destroy", category), {
            onSuccess: () => {
                console.log("Category deleted successfully");
            },
        });
    };

    const { delete: destroy, processing } = useForm();

    const showAlertDelete = (category) => {
        confirmDeleteAlert(handleDelete, category);
    };

    const handleSortChange = (event) => {
        const sort = event.target.value;
        // Redirect to the same page with the new sort order
        window.location.href = route('dashboard.admin.categories.index', { sort });
    };

    return (
        <DashboardLayout titleNavbar={"Categories"} user={auth.user}>
            <section className="flex flex-col w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
                    <h2 className="text-xl font-bold">Manage Categories</h2>
                    <div className="flex items-center gap-4">
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="form-select p-2 border rounded-md"
                        >
                            <option value="desc">Terbaru</option>
                            <option value="asc">Terlama</option>
                        </select>
                        <Button
                            onClick={() => openModal()}
                            classname="text-lg font-medium text-white bg-primary"
                        >
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {categories?.data?.map((category) => {
                        return (
                            <div
                                key={category.id}
                                className="flex flex-col justify-between gap-2 md:flex-row md:items-center"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:w-[200px]">
                                    <img
                                        src={`/icons/${category.icon}`}
                                        alt={`icon ${category.name}`}
                                        className="lg:rounded-full lg:border-2 object-cover w-full h-28 rounded-lg md:min-w-[90px] md:max-w-[90px] md:h-[90px] lg:min-w-[120px] lg:max-w-[120px] lg:h-[120px]  md:block"
                                    />
                                    <h3 className="text-xl font-bold text-primary text-wrap">
                                        {category.name}
                                    </h3>
                                </div>
                                <div className="flex flex-col md:hidden lg:flex">
                                    <p className="font-medium text-black">
                                        Created at:{" "}
                                        <span className="font-semibold">
                                            {formatDate(category.created_at)}
                                        </span>
                                    </p>
                                    <p className="font-medium text-black">
                                        Updated at:{" "}
                                        <span className="font-semibold">
                                            {formatDate(category.updated_at)}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button
                                        onClick={() => openModal(category)}
                                        classname="font-medium text-white bg-orange-500 text-md"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            showAlertDelete(category)
                                        }
                                        classname="font-medium text-white bg-red-500 text-md"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Pagination links={categories.links} />
            </section>
            <Modal show={open} onClose={closeModal} maxWidth="lg">
                <FormCategory
                    closeModal={closeModal}
                    category={editCategory}
                    method={editCategory ? "put" : "post"}
                />
            </Modal>
        </DashboardLayout>
    );
}
