// export default function DashboardLayout({ children }) {
//     return <body className="text-gray-800 font-inter">

//     <div className="fixed top-0 left-0 z-50 w-64 h-full p-4 transition-transform bg-gray-900 sidebar-menu">
//         <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
//             <img src="https://placehold.co/32x32" alt="" className="object-cover w-8 h-8 rounded" />
//             <span className="ml-3 text-lg font-bold text-white">Logo</span>
//         </a>
//         <ul className="mt-4">
//             <li className="mb-1 group active">
//                 <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
//                     <i className="mr-3 text-lg ri-home-2-line"></i>
//                     <span className="text-sm">Dashboard</span>
//                 </a>
//             </li>
//             <li className="mb-1 group">
//                 <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i className="mr-3 text-lg ri-instance-line"></i>
//                     <span className="text-sm">Orders</span>
//                     <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
//                 </a>
//                 <ul className="pl-7 mt-2 hidden group-[.selected]:block">
//                     <li className="mb-4">
//                         <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
//                     </li>
//                     <li className="mb-4">
//                         <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed order</a>
//                     </li>
//                     <li className="mb-4">
//                         <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
//                     </li>
//                 </ul>
//             </li>
//             <li className="mb-1 group">
//                 <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i className="mr-3 text-lg ri-flashlight-line"></i>
//                     <span className="text-sm">Services</span>
//                     <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
//                 </a>
//                 <ul className="pl-7 mt-2 hidden group-[.selected]:block">
//                     <li className="mb-4">
//                         <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage services</a>
//                     </li>
//                 </ul>
//             </li>
//             <li className="mb-1 group">
//                 <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
//                     <i className="mr-3 text-lg ri-settings-2-line"></i>
//                     <span className="text-sm">Settings</span>
//                 </a>
//             </li>
//         </ul>
//     </div>
//     <div className="fixed top-0 left-0 z-40 w-full h-full bg-black/50 md:hidden sidebar-overlay"></div>

//     <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
//         <div className="sticky top-0 left-0 z-30 flex items-center px-6 py-2 bg-white shadow-md shadow-black/5">
//             <button type="button" className="text-lg text-gray-600 sidebar-toggle">
//                 <i className="ri-menu-line"></i>
//             </button>
//             <ul className="flex items-center ml-4 text-sm">
//                 <li className="mr-2">
//                     <a href="#" className="font-medium text-gray-400 hover:text-gray-600">Dashboard</a>
//                 </li>
//                 <li className="mr-2 font-medium text-gray-600">/</li>
//                 <li className="mr-2 font-medium text-gray-600">Analytics</li>
//             </ul>
//             <ul className="flex items-center ml-auto">
//                 <li className="mr-1 dropdown">
//                     <button type="button" className="flex items-center justify-center w-8 h-8 text-gray-400 rounded dropdown-toggle hover:bg-gray-50 hover:text-gray-600">
//                         <i className="ri-search-line"></i>
//                     </button>
//                     <div className="z-30 hidden w-full max-w-xs bg-white border border-gray-100 rounded-md shadow-md dropdown-menu shadow-black/5">
//                         <form action="" className="p-4 border-b border-b-gray-100">
//                             <div className="relative w-full">
//                                 <input type="text" className="w-full py-2 pl-10 pr-4 text-sm border border-gray-100 rounded-md outline-none bg-gray-50 focus:border-blue-500" placeholder="Search...">
//                                 <i className="absolute text-gray-400 -translate-y-1/2 ri-search-line top-1/2 left-4"></i>
//                             </div>
//                         </form>
//                         <div className="mt-3 mb-2">
//                             <div className="text-[13px] font-medium text-gray-400 ml-4 mb-2">Recently</div>
//                             <ul className="overflow-y-auto max-h-64">
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
//                                             <div className="text-[11px] text-gray-400">$345</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </li>
//                 <li className="dropdown">
//                     <button type="button" className="flex items-center justify-center w-8 h-8 text-gray-400 rounded dropdown-toggle hover:bg-gray-50 hover:text-gray-600">
//                         <i className="ri-notification-3-line"></i>
//                     </button>
//                     <div className="z-30 hidden w-full max-w-xs bg-white border border-gray-100 rounded-md shadow-md dropdown-menu shadow-black/5">
//                         <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
//                             <button type="button" data-tab="notification" data-tab-page="notifications" className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active">Notifications</button>
//                             <button type="button" data-tab="notification" data-tab-page="messages" className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1">Messages</button>
//                         </div>
//                         <div className="my-2">
//                             <ul className="overflow-y-auto max-h-64" data-tab-for="notification" data-page="notifications">
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
//                                             <div className="text-[11px] text-gray-400">from a user</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
//                                             <div className="text-[11px] text-gray-400">from a user</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
//                                             <div className="text-[11px] text-gray-400">from a user</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
//                                             <div className="text-[11px] text-gray-400">from a user</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
//                                             <div className="text-[11px] text-gray-400">from a user</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                             <ul className="hidden overflow-y-auto max-h-64" data-tab-for="notification" data-page="messages">
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
//                                             <div className="text-[11px] text-gray-400">Hello there!</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
//                                             <div className="text-[11px] text-gray-400">Hello there!</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
//                                             <div className="text-[11px] text-gray-400">Hello there!</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
//                                             <div className="text-[11px] text-gray-400">Hello there!</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50 group">
//                                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                                         <div className="ml-2">
//                                             <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
//                                             <div className="text-[11px] text-gray-400">Hello there!</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </li>
//                 <li className="ml-3 dropdown">
//                     <button type="button" className="flex items-center dropdown-toggle">
//                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 align-middle rounded">
//                     </button>
//                     <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                         <li>
//                             <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                         </li>
//                         <li>
//                             <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                         </li>
//                         <li>
//                             <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//         <div className="p-6">
//             <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5">
//                     <div className="flex justify-between mb-6">
//                         <div>
//                             <div className="mb-1 text-2xl font-semibold">10</div>
//                             <div className="text-sm font-medium text-gray-400">Active orders</div>
//                         </div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="flex items-center">
//                         <div className="w-full h-4 bg-gray-100 rounded-full">
//                             <div className="h-full p-1 bg-blue-500 rounded-full" style="width: 60%;">
//                                 <div className="w-2 h-2 ml-auto bg-white rounded-full"></div>
//                             </div>
//                         </div>
//                         <span className="ml-4 text-sm font-medium text-gray-600">60%</span>
//                     </div>
//                 </div>
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5">
//                     <div className="flex justify-between mb-4">
//                         <div>
//                             <div className="flex items-center mb-1">
//                                 <div className="text-2xl font-semibold">324</div>
//                                 <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
//                             </div>
//                             <div className="text-sm font-medium text-gray-400">Visitors</div>
//                         </div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="flex items-center">
//                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded-full">
//                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 -ml-3 rounded-full">
//                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 -ml-3 rounded-full">
//                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 -ml-3 rounded-full">
//                         <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 -ml-3 rounded-full">
//                     </div>
//                 </div>
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5">
//                     <div className="flex justify-between mb-6">
//                         <div>
//                             <div className="mb-1 text-2xl font-semibold"><span className="text-base font-normal text-gray-400 align-top">&dollar;</span>2,345</div>
//                             <div className="text-sm font-medium text-gray-400">Active orders</div>
//                         </div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-600">View details</a>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5">
//                     <div className="flex items-start justify-between mb-4">
//                         <div className="font-medium">Manage orders</div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="flex items-center mb-4 order-tab">
//                         <button type="button" data-tab="order" data-tab-page="active" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-50 rounded-tl-md rounded-bl-md hover:text-gray-600 active">Active</button>
//                         <button type="button" data-tab="order" data-tab-page="completed" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-50 hover:text-gray-600">Completed</button>
//                         <button type="button" data-tab="order" data-tab-page="canceled" className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-50 rounded-tr-md rounded-br-md hover:text-gray-600">Canceled</button>
//                     </div>
//                     <div className="overflow-x-auto">
//                         <table className="w-full min-w-[540px]" data-tab-for="order" data-page="active">
//                             <thead>
//                                 <tr>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Estimate</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Budget</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">In progress</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">In progress</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">In progress</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">In progress</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">In progress</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <table className="w-full min-w-[540px] hidden" data-tab-for="order" data-page="completed">
//                             <thead>
//                                 <tr>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Estimate</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Budget</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Completed</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Completed</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Completed</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Completed</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Completed</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <table className="w-full min-w-[540px] hidden" data-tab-for="order" data-page="canceled">
//                             <thead>
//                                 <tr>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Estimate</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Budget</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Canceled</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Canceled</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Canceled</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Canceled</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">3 days</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$56</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Canceled</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5">
//                     <div className="flex items-start justify-between mb-4">
//                         <div className="font-medium">Manage Services</div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <form action="" className="flex items-center mb-4">
//                         <div className="relative w-full mr-2">
//                             <input type="text" className="w-full py-2 pl-10 pr-4 text-sm border border-gray-100 rounded-md outline-none bg-gray-50 focus:border-blue-500" placeholder="Search...">
//                             <i className="absolute text-gray-400 -translate-y-1/2 ri-search-line top-1/2 left-4"></i>
//                         </div>
//                         <select className="text-sm py-2 pl-4 pr-10 bg-gray-50 border border-gray-100 rounded-md focus:border-blue-500 outline-none appearance-none bg-select-arrow bg-no-repeat bg-[length:16px_16px] bg-[right_16px_center]">
//                             <option value="">All</option>
//                         </select>
//                     </form>
//                     <div className="overflow-x-auto">
//                         <table className="w-full min-w-[540px]">
//                             <thead>
//                                 <tr>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Price</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Clicks</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md"></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">1K</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="dropdown">
//                                             <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
//                                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">1K</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="dropdown">
//                                             <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
//                                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">1K</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="dropdown">
//                                             <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
//                                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">1K</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="dropdown">
//                                             <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
//                                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-gray-400">1K</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="dropdown">
//                                             <button type="button" className="flex items-center justify-center w-6 h-6 text-sm text-gray-400 rounded dropdown-toggle hover:text-gray-600 bg-gray-50"><i className="ri-more-2-fill"></i></button>
//                                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 lg:col-span-2">
//                     <div className="flex items-start justify-between mb-4">
//                         <div className="font-medium">Order Statistics</div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
//                         <div className="p-4 border border-gray-200 border-dashed rounded-md">
//                             <div className="flex items-center mb-0.5">
//                                 <div className="text-xl font-semibold">10</div>
//                                 <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">$80</span>
//                             </div>
//                             <span className="text-sm text-gray-400">Active</span>
//                         </div>
//                         <div className="p-4 border border-gray-200 border-dashed rounded-md">
//                             <div className="flex items-center mb-0.5">
//                                 <div className="text-xl font-semibold">50</div>
//                                 <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">+$469</span>
//                             </div>
//                             <span className="text-sm text-gray-400">Completed</span>
//                         </div>
//                         <div className="p-4 border border-gray-200 border-dashed rounded-md">
//                             <div className="flex items-center mb-0.5">
//                                 <div className="text-xl font-semibold">4</div>
//                                 <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">-$130</span>
//                             </div>
//                             <span className="text-sm text-gray-400">Canceled</span>
//                         </div>
//                     </div>
//                     <div>
//                         <canvas id="order-chart"></canvas>
//                     </div>
//                 </div>
//                 <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5">
//                     <div className="flex items-start justify-between mb-4">
//                         <div className="font-medium">Earnings</div>
//                         <div className="dropdown">
//                             <button type="button" className="text-gray-400 dropdown-toggle hover:text-gray-600"><i className="ri-more-fill"></i></button>
//                             <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="overflow-x-auto">
//                         <table className="w-full min-w-[460px]">
//                             <thead>
//                                 <tr>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Service</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">Earning</th>
//                                     <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-emerald-500">+$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-rose-500">-$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-emerald-500">+$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-rose-500">-$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-emerald-500">+$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-rose-500">-$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-emerald-500">+$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-rose-500">-$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-emerald-500">+$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <div className="flex items-center">
//                                             <img src="https://placehold.co/32x32" alt="" className="block object-cover w-8 h-8 rounded">
//                                             <a href="#" className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">Create landing page</a>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="text-[13px] font-medium text-rose-500">-$235</span>
//                                     </td>
//                                     <td className="px-4 py-2 border-b border-b-gray-50">
//                                         <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </main>
//     </body>

// }
