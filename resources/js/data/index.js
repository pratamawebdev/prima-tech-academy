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
    // {
    //     id: 4,
    //     title: "Manage Mentors",
    //     path: "/mentors",
    //     icon: "/images/icons/icon-mentor.svg",
    // },
    // {
    //     id: 5,
    //     title: "Manage Subscriptions",
    //     path: "/subscriptions",
    //     icon: "/images/icons/icon-subscription.svg",
    // },
];
