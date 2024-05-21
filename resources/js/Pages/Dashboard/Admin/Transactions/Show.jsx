import Button from "@/Components/Global/Elements/Button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { formatDate } from "@/utils/formatDate";

export default function Show({ auth, transaction }) {
    console.log(transaction);
    return (
        <DashboardLayout titleNavbar={"Transactions"} user={auth.user}>
            <section className="flex flex-col w-full md:max-w-[70%] lg:max-w-[50%] mx-auto gap-8 p-8 bg-white rounded-3xl">
                <div className="md:flex md:items-center md:justify-between md:gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-black text-md">
                            Transaction ID: {transaction.id}
                        </p>
                        <p className="font-medium text-black text-md">
                            Total Amount:{" "}
                            <span className="font-bold">
                                {transaction.total_amount}
                            </span>
                        </p>
                        <p className="font-medium text-black text-md">
                            Created At:{" "}
                            <span className="font-bold">
                                {formatDate(transaction.created_at)}
                            </span>
                        </p>
                        <p className="font-medium text-black text-md">
                            Student:{" "}
                            <span className="font-bold">
                                {transaction.user.name}
                            </span>
                        </p>
                        <p className="font-medium text-black text-md">
                            Email:{" "}
                            <span className="font-bold">
                                {transaction.user.email}
                            </span>
                        </p>
                        <p className="font-medium text-black text-md">
                            Status:{" "}
                            <span className="font-bold">
                                {transaction.status ? "Active" : "Pending"}
                            </span>
                        </p>
                        <div className="block font-medium text-black md:hidden text-md">
                            Proof of Transaction:{" "}
                            <Button
                                classname={
                                    "bg-primary text-white mt-2 font-bold"
                                }
                            >
                                Click Here
                            </Button>
                        </div>
                    </div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxQOk0OK2a7fvy4MRGrI7Iki9f6ybvM2SmwzX8jHwsA&s"
                        alt=""
                        className="w-full max-w-[280px] hidden max-h-[260px] md:block object-cover"
                    />
                </div>
                <div className="w-full h-[2px] bg-gray-300" />
                <Button classname={"bg-green-500 text-white mx-auto font-bold"}>
                    Approve Transaction
                </Button>
            </section>
        </DashboardLayout>
    );
}
