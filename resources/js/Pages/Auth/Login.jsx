import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { dataAuthIcon } from "@/utils/data";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout authPage={"login"}>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="font-bold text-black"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value="Password"
                        className="font-bold text-black"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="text-sm text-gray-600 ms-2">
                            Remember me
                        </span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton
                        className="justify-center w-full text-white bg-blue-700 hover:bg-blue-600"
                        disabled={processing}
                    >
                        Sign In
                    </PrimaryButton>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <hr className="bg-black w-full h-[2px]" />
                    <p className="w-full text-nowrap">or continue with</p>
                    <hr className="bg-black w-full h-[2px]" />
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                    {dataAuthIcon.map((item, index) => (
                        <div
                            key={index}
                            className="px-8 py-3 border border-gray-300"
                        >
                            <img
                                src={item.src}
                                alt={item.name}
                                className="w-6"
                            />
                        </div>
                    ))}
                </div>
            </form>
        </GuestLayout>
    );
}
