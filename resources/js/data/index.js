export const menuSidebar = [
    {
        id: 1,
        title: "Dashboard",
        href: route("dashboard"),
        current: route().current("dashboard"),
        icon: "/images/icons/icon-home.svg",
    },
    // {
    //     id: 2,
    //     title: "Manage Courses",
    //     href: route("admin.courses.index"),
    //     icon: "/images/icons/icon-course.svg",
    // },
    {
        id: 3,
        title: "Categories",
        href: route("dashboard.admin.categories.index"),
        current: route().current("dashboard.admin.categories.index"),
        icon: "/images/icons/icon-category.svg",
    },
    {
        id: 4,
        title: "Manage Mentors",
        href: route("dashboard.admin.mentors.index"),
        current: route().current("dashboard.admin.mentors.index"),
        icon: "/images/icons/icon-mentor.svg",
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
