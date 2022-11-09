import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRequired from "../context/AuthRequired";
import ListAirlines from "../feature/airline/ListAirlines";
import ListCreate from "../feature/flight/ListCreate";
import ListPlane from "../feature/plane/ListPlane";
import Profile from "../feature/user/Profile";
import BlankLayout from "../layout/BlankLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import NotFoundPage from "../page/NotFoundPage";
import RegisterPage from "../page/RegisterPage";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequired>
            <MainLayout />
          </AuthRequired>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="listcreate" element={<ListCreate />} />
        <Route path="listAirlines" element={<ListAirlines />} />
        <Route path="listPlanes" element={<ListPlane />} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
