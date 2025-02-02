import { Outlet } from "react-router-dom";
import NavList from "../components/NavList";
import TeacherSidebar from "../components/TModule/TeacherSidebar";

export default function Teacher() {
  return (
    <div className="h-full w-full font-poppins flex">
      <TeacherSidebar />
      <div className="w-full h-full  font-poppins ">
        <NavList />
        <Outlet />
      </div>
    </div>
  );
}
