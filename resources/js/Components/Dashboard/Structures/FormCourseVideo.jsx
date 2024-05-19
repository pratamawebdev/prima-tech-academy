import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { responseAlert } from "@/utils/responseAlert";
import { useForm } from "@inertiajs/react";

export default function FormCourseVideo({
    closeModal,
    course,
    course_video,
    method = "post",
}) {
    const formData = {
        name: course_video?.name || "",
        path_video: course_video?.path_video || "",
    };

    console.log(method);
    console.log(course_video);
    console.log(course);
    console.log(formData.name);

    if (method === "put") {
        formData._method = "PUT";
    }

    const { data, setData, post, processing, errors, reset } =
        useForm(formData);

    const submit = (e) => {
        e.preventDefault();
        const responseMessage =
            method === "post" ? "Course video created" : "Course video updated";
        const routeName =
            method === "post"
                ? route("dashboard.admin.course.add_video.save", course.id)
                : route(
                      "dashboard.admin.course_videos.update",
                      course_video.id
                  );

        post(routeName, {
            onSuccess: (response) => {
                responseAlert("Success", responseMessage, "success");
                closeModal();
                reset();
            },
        });
    };

    return (
        <form
            onSubmit={submit}
            encType="multipart/form-data"
            className="w-full"
        >
            <div className="flex flex-col gap-2">
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
                        required={method === "post"}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="path_video" value="Path Video" />

                    <TextInput
                        id="path_video"
                        name="path_video"
                        value={data?.path_video}
                        className="block w-full mt-1"
                        autoComplete="path_video"
                        isFocused={true}
                        onChange={(e) => setData("path_video", e.target.value)}
                        required={method === "post"}
                    />

                    <InputError message={errors.path_video} className="mt-2" />
                </div>
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton
                    className="justify-center w-full text-white bg-blue-700 hover:bg-blue-600"
                    disabled={processing}
                >
                    {method === "post"
                        ? "Add Course Video"
                        : "Update Course Video"}
                </PrimaryButton>
            </div>
        </form>
    );
}
