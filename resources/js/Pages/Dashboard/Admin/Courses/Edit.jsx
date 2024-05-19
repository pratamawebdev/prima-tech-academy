import FormCourse from "@/Components/Dashboard/Structures/FormCourse";
import Button from "@/Components/Global/Elements/Button";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Edit({ auth, categories, course, keypoints }) {
    return (
        <DashboardLayout titleNavbar={"Courses"} user={auth.user}>
            <Button
                classname={
                    "mb-5 gap-2 bg-primary hover:bg-primary/80 text-white font-bold"
                }
                onClick={() => window.history.back()}
            >
                <img
                    src="/images/icons/icon-arrow-left.svg"
                    alt=""
                    className="object-cover w-5 h-5"
                />
                Back
            </Button>

            <section className="flex flex-col items-center w-full min-h-screen gap-8 p-8 bg-white rounded-3xl">
                <h2 className="text-xl font-bold">Create New Course</h2>
                <div className="w-full md:w-[60%]  ">
                    <FormCourse
                        categories={categories}
                        course={course}
                        method="put"
                        keypoints={keypoints}
                    />
                </div>
            </section>
        </DashboardLayout>
    );
}
