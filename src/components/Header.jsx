import { Link } from "react-router-dom";

function Header({ setAuth }) {
  const logout = () => {
    setAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">📘 Quản Lý Điểm</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={logout}>Đăng Xuất</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
