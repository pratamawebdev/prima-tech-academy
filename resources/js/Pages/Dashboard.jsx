import DashboardLayout from "@/Layouts/DashboardLayout";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { getDayName } from "@/utils/getDayName";

export default function Index({ auth, courses, transactions }) {
    const currentDate = getCurrentDate();
    const currentDay = getDayName();

    return (
        <DashboardLayout user={auth.user}>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between w-full bg-primary rounded-3xl">
                    <div className="flex flex-col p-6 space-y-16">
                        <div className="flex items-center gap-2 px-4 py-3 bg-white bg-opacity-25 w-fit rounded-3xl">
                            <img
                                src="/images/icons/icon-calendar.svg"
                                className="w-5 h-5"
                            />
                            <span className="font-medium text-white">
                                {currentDate}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold text-white">
                                Good Day, {auth?.user?.name.split(" ")[0]}!
                            </h1>
                            <p className="text-xl text-white w-fit">
                                Have a Nice {currentDay}!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="flex items-center justify-center h-40 min-w-full p-2 bg-primary rounded-3xl">
                        <div className="flex items-center gap-4">
                            <img
                                src="/images/icons/icon-syllabus.svg"
                                alt=""
                                className="w-20"
                            />
                            <div className="flex flex-col items-center gap-2">
                                <h1 className="text-3xl font-bold text-white">
                                    {courses}
                                </h1>
                                <p className="text-xl text-white">Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-40 min-w-full p-2 bg-primary rounded-3xl">
                        <div className="flex items-center gap-4">
                            <img
                                src="/images/icons/icon-transaction.svg"
                                alt=""
                                className="w-20"
                            />
                            <div className="flex flex-col items-center gap-2">
                                <h1 className="text-3xl font-bold text-white">
                                    {transactions}
                                </h1>
                                <p className="text-xl text-white">Courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
