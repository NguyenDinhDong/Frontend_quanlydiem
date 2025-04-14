import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Login.css'; // dùng chung CSS với Login

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/add");
    }
  }, [navigate]);

  async function SignUp() {
    let item = { name, password, email };

    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });

    let data = await result.json();

    if (!result.ok) {
      console.error("Lỗi từ server:", data.errors);
      alert(JSON.stringify(data.errors));
      return;
    }

    localStorage.setItem("user-info", JSON.stringify(data));
    navigate("/add");
  }

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-box">
          <h1>Đăng ký tài khoản</h1>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Họ tên'
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Mật khẩu'
          />
          <button onClick={SignUp}>Đăng ký</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
