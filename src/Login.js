import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // State để kiểm tra trạng thái loading
  const [error, setError] = useState(null);  // State để lưu thông báo lỗi nếu có
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/add");
    }
  }, [navigate]);

  async function login() {
    if (!email || !password) {
      alert("Vui lòng điền đủ email và mật khẩu!");
      return;
    }

    setLoading(true);  // Bắt đầu loading
    setError(null);  // Reset lỗi cũ

    let item = { email, password };
    try {
      let result = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      });

      result = await result.json();

      if (result && result.token) {
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
      } else {
        setError("Sai email hoặc mật khẩu");  // Cập nhật lỗi nếu không có token
      }
    } catch (err) {
      setError("Lỗi kết nối tới máy chủ");  // Thông báo lỗi nếu không thể kết nối
    } finally {
      setLoading(false);  // Dừng loading khi xong
    }
  }

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-box">
          <h1>Đăng nhập</h1>
          <input
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Mật khẩu'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} disabled={loading}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
          {error && <div className="error-message">{error}</div>}  {/* Hiển thị lỗi nếu có */}
        </div>
      </div>
    </div>
  );
}

export default Login;
