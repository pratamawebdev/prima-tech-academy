import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        icon: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.categories.store"));
    };
    return (
        <div>
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                test
            </h2>

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-10 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="w-full py-3 text-white bg-red-500 rounded-3xl"></div>

                        <form onSubmit={submit} encType="multipart/form-data">
                            <div className="mt-4">
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="block w-full mt-1"
                                    autoComplete="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="iconPath" value="Icon" />
                                <TextInput
                                    id="iconPath"
                                    type="file"
                                    name="icon"
                                    // value={data?.icon?.file}
                                    className="block w-full mt-1"
                                    onChange={(e) =>
                                        setData("icon", e.target.files[0])
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.icon}
                                    className="mt-2"
                                />
                            </div>
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Create
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
