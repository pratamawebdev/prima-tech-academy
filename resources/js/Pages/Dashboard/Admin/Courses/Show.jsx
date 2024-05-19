import FormCourseVideo from "@/Components/Dashboard/Structures/FormCourseVideo";
import Button from "@/Components/Global/Elements/Button";
import Modal from "@/Components/Modal";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { confirmDeleteAlert } from "@/utils/confirmDeleteAlert";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ auth, course }) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [editCourseVideo, setEditCourseVideo] = useState(null);
    console.log(editCourseVideo);

    const openModal = (item = null) => {
        if (item.path_video) {
            setEditCourseVideo(item);
        }
        setOpen(true);
    };

    const handleDelete = (item) => {
        console.log(item);
        const routeName = item?.path_video
            ? route("dashboard.admin.course_videos.destroy", item)
            : route("dashboard.admin.courses.destroy", item);
        console.log(routeName);
        destroy(routeName, {
            onSuccess: (res) => {
                console.log(res);
                console.log(
                    `${
                        item?.path_video ? "Course video" : "Course"
                    } deleted successfully`
                );
            },
        });
    };

    const { delete: destroy, processing } = useForm();

    const showAlertDelete = (item) => {
        console.log(item);
        confirmDeleteAlert(handleDelete, item);
    };

    return (
        <DashboardLayout titleNavbar={"Courses"} user={auth.user}>
            <section className="w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <div className="flex flex-col gap-1">
                    <h2 className="w-full text-xl font-bold">{course?.name}</h2>
                    <span className="px-3 py-1 text-gray-500 bg-gray-200 rounded-lg w-fit">
                        {course?.category?.name}
                    </span>
                </div>
                <div className="flex flex-col gap-8 mt-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-2 md:items-center md:flex-row">
                            <div className="relative w-full">
                                <img
                                    src={`/storage/${course?.thumbnail}`}
                                    alt="Avatar"
                                    className="object-cover w-full h-40 border-2 lg:h-48 rounded-lg hover:scale-105 transition-all md:w-[300px] lg:w-[400px]"
                                />
                                <div className="absolute flex flex-col items-center gap-1 p-1 bg-white rounded-lg top-2 right-2 md:hidden">
                                    <img
                                        src="/images/icons/icon-edit.svg"
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                    <img
                                        src="/images/icons/icon-trash.svg"
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                </div>
                                <span className="absolute flex items-center gap-1 px-1 py-[2px] bg-white rounded-lg bottom-2 left-2 md:hidden">
                                    <img
                                        src="/images/icons/icon-user-group.svg"
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                    {course?.students?.length}
                                </span>
                            </div>
                        </div>
                        <div className="flex-col items-center hidden md:flex">
                            <p>Students:</p>
                            {course?.students?.length}
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <Link
                                href={route(
                                    "dashboard.admin.courses.edit",
                                    course
                                )}
                                className="items-center justify-center hidden px-4 py-2 font-medium text-white bg-orange-500 md:flex w-fit rounded-3xl text-md"
                            >
                                Edit
                            </Link>
                            <span className="hidden md:block">
                                <Button
                                    onClick={() => showAlertDelete(course)}
                                    classname="font-medium text-white bg-red-500 text-md"
                                >
                                    Delete
                                </Button>
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-1 bg-gray-200" />
                    <div className="flex flex-col gap-4">
                        <div className="flex md:items-center md:justify-between">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-black">
                                    Course Videos
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {course?.course_videos?.length} Total Videos
                                </p>
                            </div>
                            <span className="hidden md:block">
                                <Button
                                    onClick={() => openModal(course)}
                                    classname={
                                        "flex items-center justify-center px-4 py-2 text-lg font-medium text-white w-fit rounded-3xl bg-primary"
                                    }
                                >
                                    Add New Video
                                </Button>
                            </span>
                        </div>
                        {course?.course_videos?.map((item) => {
                            console.log(item.length);
                            return (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex flex-col w-full gap-2 md:gap-6 md:flex-row md:items-center">
                                        <div className="relative">
                                            <iframe
                                                width={560}
                                                height={315}
                                                className="w-full md:w-[160px] lg:w-[300px] rounded-lg lg:h-[160px] h-[120px]"
                                                src={`https://www.youtube.com/embed/${item.path_video}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                            <span className="absolute flex flex-col items-center gap-1 p-1 bg-white rounded-lg md:hidden top-2 right-2">
                                                <img
                                                    src="/images/icons/icon-edit.svg"
                                                    alt=""
                                                    className="w-5 h-5"
                                                    onClick={() =>
                                                        openModal(item)
                                                    }
                                                />
                                                <img
                                                    src="/images/icons/icon-trash.svg"
                                                    alt=""
                                                    className="w-5 h-5"
                                                />
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-0 md:gap-1">
                                            <p className="text-lg md:text-[22px] font-semibold text-black">
                                                {item?.name}
                                            </p>
                                            <p className="text-sm md:text-[18px] text-gray-500">
                                                {course?.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-2">
                                        <Button
                                            onClick={() => openModal(item)}
                                            classname="hidden font-medium text-white bg-orange-500 md:block text-md"
                                        >
                                            Edit
                                        </Button>
                                        <span className="hidden md:block">
                                            <Button
                                                onClick={() =>
                                                    showAlertDelete(item)
                                                }
                                                classname="font-medium text-white bg-red-500 text-md"
                                            >
                                                Delete
                                            </Button>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Modal show={open} onClose={closeModal} maxWidth="lg">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 md:flex-row">
                        <img
                            src={`/storage/${course?.thumbnail}`}
                            alt=""
                            className="object-cover w-full rounded-lg md:w-40 h-28"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <h4 className="text-[20px] font-bold text-black">
                                    {course?.name}
                                </h4>
                                <span className="px-4 py-1 font-semibold text-gray-500 bg-gray-200 rounded-lg w-fit">
                                    {course?.category?.name}
                                </span>
                            </div>
                            <span className="font-bold text-primary">
                                {course?.mentor?.name}
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-gray-200" />
                    <FormCourseVideo
                        course={course}
                        closeModal={closeModal}
                        course_video={editCourseVideo}
                        method={editCourseVideo ? "put" : "post"}
                    />
                </div>
            </Modal>
        </DashboardLayout>
    );
}
