import { lazy } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";

const HelloPage = lazy(() => import('../pages/hello'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HelloPage />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;
