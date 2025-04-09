import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password || !confirm) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (password !== confirm) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Giả lập lưu tài khoản (nếu có hệ thống lưu thực thì sẽ gửi lên backend tại đây)
    alert("🎉 Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">📝 Đăng Ký</h3>
        <div className="mb-3">
          <label className="form-label">Tên đăng nhập</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="form-control"
            placeholder="Nhập lại mật khẩu"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <button className="btn btn-success w-100" onClick={handleRegister}>
          Đăng Ký
        </button>
        <p className="text-center mt-3 mb-0">
          Đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
