import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children, authPage }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {authNavigation(authPage)}
            <div className="w-full max-w-xs sm:max-w-md mt-6 px-6 py-6 bg-white shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}

const authNavigation = (authPage) => {
    if (authPage === "login") {
        return (
            <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl text-black font-bold">
                    Sign in to your account
                </h1>
                <span>
                    Or{" "}
                    <Link href="/register" className="underline text-blue-700">
                        Register your account
                    </Link>
                </span>
            </div>
        );
    } else if (authPage === "register") {
        return (
            <div>
                <h1>Register your account</h1>
                <br />
                Or <Link href="/login">Sign in to your account</Link>
            </div>
        );
    } else {
        return (
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>
        );
    }
};
