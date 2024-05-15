import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { responseAlert } from "@/utils/responseAlert";
import { useForm } from "@inertiajs/react";

export default function FormCategory({
    closeModal,
    category = null,
    method = "post",
}) {
    const formData = {
        name: category?.name || "",
        icon: null,
    };

    if (method === "put") {
        formData._method = "PUT";
    }

    const { data, setData, post, processing, errors, reset } =
        useForm(formData);

    const submit = (e) => {
        e.preventDefault();
        const responseMessage =
            method === "post" ? "Category created" : "Category updated";
        const routeName =
            method === "post"
                ? route("dashboard.admin.categories.store")
                : route("dashboard.admin.categories.update", category.id);

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
                <div className="flex justify-between">
                    <div>
                        <InputLabel htmlFor="iconPath" value="Icon" />
                        <TextInput
                            id="iconPath"
                            type="file"
                            name="icon"
                            className="block w-full mt-1"
                            onChange={(e) => setData("icon", e.target.files[0])}
                            required={method === "post"}
                        />

                        <InputError message={errors.icon} className="mt-2" />
                    </div>
                    {method === "put" && (
                        <img
                            src={`/storage/${category.icon}`}
                            alt=""
                            className="object-cover w-24 h-24 rounded-lg"
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton
                    className="justify-center w-full text-white bg-blue-700 hover:bg-blue-600"
                    disabled={processing}
                >
                    {method === "post" ? "Add Category" : "Update Category"}
                </PrimaryButton>
            </div>
        </form>
    );
}
