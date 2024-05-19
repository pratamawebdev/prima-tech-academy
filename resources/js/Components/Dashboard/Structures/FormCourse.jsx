import Button from "@/Components/Global/Elements/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { responseAlert } from "@/utils/responseAlert";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function FormCourse({
    course = null,
    method = "post",
    categories,
    keypoints: keypointsProp = [],
}) {
    const [initialKeypoints] = useState(keypointsProp);
    const [keypoints, setKeypoints] = useState(
        initialKeypoints.map((item) => item.name)
    );

    const formData = {
        name: course?.name || "",
        thumbnail: null,
        path_trailer: course?.path_trailer || "",
        category_id: course?.category_id || "",
        about: course?.about || "",
        course_keypoints: keypoints,
    };

    if (method === "put") {
        formData._method = "PUT";
    }

    const { data, setData, post, processing, errors, reset } =
        useForm(formData);

    const submit = (e) => {
        console.log(data);
        e.preventDefault();
        const responseMessage =
            method === "post" ? "Course created" : "Course updated";
        const routeName =
            method === "post"
                ? route("dashboard.admin.courses.store")
                : route("dashboard.admin.courses.update", course.id);

        post(routeName, {
            onSuccess: () => {
                responseAlert("Success", responseMessage, "success");
                reset();
            },
        });
    };

    const handleAddKeypoint = () => {
        setKeypoints([...keypoints, ""]);
        setData("course_keypoints", [...keypoints, ""]);
    };

    const handleRemoveKeypoint = (index) => {
        const newKeypoints = [...keypoints];
        newKeypoints.splice(index, 1);
        setKeypoints(newKeypoints);
        setData("course_keypoints", newKeypoints);
    };

    const handleKeypointChange = (index, value) => {
        const newKeypoints = [...keypoints];
        console.log(newKeypoints);
        newKeypoints[index] = value;
        setKeypoints(newKeypoints);
        console.log(keypoints);
        setData("course_keypoints", newKeypoints);
    };

    const handleReset = () => {
        reset();
        setKeypoints(initialKeypoints.map((item) => item.name));
    };
    return (
        <form
            onSubmit={submit}
            encType="multipart/form-data"
            className="w-full"
        >
            <div className="flex flex-col gap-2">
                {method === "put" && course.thumbnail ? (
                    <div className="flex items-center justify-center tooltip">
                        <img
                            src={`/storage/${course.thumbnail}`}
                            alt=""
                            className="object-cover w-32 h-32 rounded-lg"
                        />
                    </div>
                ) : null}
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data?.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="path_trailer" value="Trailer" />
                    <TextInput
                        id="path_trailer"
                        name="path_trailer"
                        value={data?.path_trailer}
                        className="block w-full mt-1"
                        autoComplete="path_trailer"
                        isFocused={true}
                        onChange={(e) =>
                            setData("path_trailer", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.path_trailer}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="thumbnail" value="Thumbnail" />
                    <TextInput
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        className="block w-full mt-1"
                        isFocused={true}
                        onChange={(e) =>
                            setData("thumbnail", e.target.files[0])
                        }
                        required={method === "put" ? false : true}
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="category" value="Category" />
                    <select
                        id="category"
                        name="category_id"
                        value={data?.category_id}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        autoComplete="category"
                        isFocused={true}
                        onChange={(e) => setData("category_id", e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category?.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.category_id} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="about" value="About" />
                    <textarea
                        id="about"
                        name="about"
                        value={data?.about}
                        className="block w-full h-40 mt-1 overflow-y-auto border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        autoComplete="about"
                        isFocused={true}
                        onChange={(e) => setData("about", e.target.value)}
                        required
                    />
                    <InputError message={errors.about} className="mt-2" />
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between">
                        <InputLabel htmlFor="keypoints" value="Keypoints" />
                        <div className="flex flex-row items-center gap-1">
                            <button
                                type="button"
                                className="px-3 py-1 font-bold text-white bg-red-500 rounded-lg"
                                onClick={handleRemoveKeypoint}
                            >
                                Delete Keypoint
                            </button>
                            <button
                                type="button"
                                className={
                                    "font-bold bg-green-500 px-3 py-1 rounded-lg text-white"
                                }
                                onClick={handleAddKeypoint}
                            >
                                Add Keypoint
                            </button>
                        </div>
                    </div>
                    {keypoints.map((keypoint, index) => (
                        <div key={index} className="flex items-center mt-2">
                            <TextInput
                                id={`course_keypoints_${index}`}
                                name={`course_keypoints_${index}`}
                                value={keypoint}
                                className="block w-full"
                                onChange={(e) =>
                                    handleKeypointChange(index, e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.course_keypoints}
                                className="mt-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-8">
                <Button
                    type="button"
                    onClick={handleReset}
                    classname="font-bold text-white bg-red-500 w-fit"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    classname="font-bold text-white w-fit bg-primary"
                    disabled={processing}
                >
                    {method === "post" ? "Add Course" : "Update Course"}
                </Button>
            </div>
        </form>
    );
}
