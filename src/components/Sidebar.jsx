import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar p-3 text-white bg-dark" style={{ width: "250px", height: "100vh" }}>
      <h4 className="mb-4">📚 Quản Lý Điểm</h4>
      <strong>Quản Lý</strong>
      <ul className="nav flex-column mt-2">
        <li className="nav-item">
          <NavLink to="/students" className="nav-link text-white">Sinh viên</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/subjects" className="nav-link text-white">Môn học</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/classes" className="nav-link text-white">Lớp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/input" className="nav-link text-white">Nhập điểm</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/reports" className="nav-link text-white">Báo cáo</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
