import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <Navbar/>
        <main className='w-full'>
            <Outlet/>
        </main>
    </div>
  );
}

export default HomeLayout;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ActiveMachine, AvailableMachine, Home, Machines, Withdrawal } from "../pages";
// import { MainLayout, AdminLayout, AdminAuthLayout } from "@/layouts";
// import {
//   GenerateKey,
//   KeyCenter,
//   Profile,
//   Machines as AdminMachines,
//   SignIn,
//   SignUp,
//   ManageNews,
//   Settings,
//   WithdrawalRequests,
// } from "@/pages/admin";

// const index = () => {
//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainLayout />,
//       children: [
//         {
//           path: "",
//           element: <Home />,
//         },
//         {
//           path: "machines",
//           element: <Machines />,
//         },
//         {
//           path: "machines/active",
//           element: <ActiveMachine />,
//         },
//         {
//           path: "machines/available",
//           element: <AvailableMachine />,
//         },
//         {
//           path: "machines/withdrawal",
//           element: <Withdrawal />,
//         },
//       ],
//     },
//     {
//       path: "/admin",
//       element: <AdminLayout />,
//       children: [
//         {
//           path: "",
//           element: <Profile />,
//         },
//         {
//           path: "key-center",
//           element: <KeyCenter />,
//         },
//         {
//           path: "generate-key",
//           element: <GenerateKey />,
//         },
//         {
//           path: "machines",
//           element: <AdminMachines />,
//         },
//         {
//           path: "manage-news",
//           element: <ManageNews />,
//         },
//         {
//           path: "withdrawal/requests",
//           element: <WithdrawalRequests />,
//         },
//         {
//           path: "settings",
//           element: <Settings />,
//         },
//       ],
//     },
//     {
//       path: "/admin/auth",
//       element: <AdminAuthLayout />,
//       children: [
//         {
//           path: "signin",
//           element: <SignIn />,
//         },
//         {
//           path: "signup",
//           element: <SignUp />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={routes} />;
// };

// export default index;
