import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { responseAlert } from "@/utils/responseAlert";
import { useForm } from "@inertiajs/react";

export default function FormMentor({ closeModal }) {
    const formData = {
        email: "",
    };

    const { data, setData, post, processing, errors, reset } =
        useForm(formData);

    const submit = (e) => {
        e.preventDefault();
        post(route("dashboard.admin.mentors.store"), {
            onSuccess: () => {
                responseAlert("Success", "Mentor created", "success");
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
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        name="email"
                        value={data?.email}
                        className="block w-full mt-1"
                        autoComplete="email"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton
                    className="justify-center w-full text-white bg-blue-700 hover:bg-blue-600"
                    disabled={processing}
                >
                    Add Mentor
                </PrimaryButton>
            </div>
        </form>
    );
}
