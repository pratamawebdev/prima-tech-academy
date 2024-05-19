export const menuSidebar = [
    {
        id: 1,
        title: "Dashboard",
        href: route("dashboard"),
        // path: "/dashboard/admin",
        icon: "/images/icons/icon-home.svg",
        roles: ["owner", "mentor"],
    },
    {
        id: 2,
        title: "Manage Courses",
        href: route("dashboard.admin.courses.index"),
        path: "/dashboard/admin/courses",
        icon: "/images/icons/icon-course.svg",
        roles: ["mentor"],
    },
    {
        id: 3,
        title: "Categories",
        href: route("dashboard.admin.categories.index"),
        path: "/dashboard/admin/categories",
        icon: "/images/icons/icon-category.svg",
        roles: ["owner"],
    },
    {
        id: 4,
        title: "Manage Mentors",
        href: route("dashboard.admin.mentors.index"),
        path: "/dashboard/admin/mentors",
        icon: "/images/icons/icon-mentor.svg",
        roles: ["owner"],
    },
    // {
    //     id: 5,
    //     title: "Manage Subscriptions",
    //     path: "/subscriptions",
    //     icon: "/images/icons/icon-subscription.svg",
    // },
];

export const dataTheadTableMentors = [
    {
        id: "1",
        name: "Name",
        sortable: true,
        classname: "min-w-40",
    },
    {
        id: "2",
        name: "Email",
        sortable: false,
        classname: "min-w-40",
    },
    {
        id: "3",
        name: "Created At",
        sortable: true,
    },
    {
        id: "4",
        name: "Updated At",
        sortable: true,
    },
    {
        id: "5",
        name: "Action",
        sortable: false,
    },
];

export const dataTheadTableCourses = [
    {
        id: "1",
        name: "Name",
        sortable: true,
    },
    {
        id: "2",
        name: "Email",
    },
    {
        id: "3",
        name: "Mentor",
        sortable: true,
    },
    {
        id: "4",
        name: "Created At",
        sortable: true,
    },
    {
        id: "5",
        name: "Action",
        sortable: false,
    },
];
