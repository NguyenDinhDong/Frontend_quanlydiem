const express = require('express');
const cors = require('cors');
const app = express();

// Cho phép tất cả các nguồn (có thể tùy chỉnh nếu cần)
app.use(cors());

// Sử dụng middleware để phân tích cú pháp JSON trong request body
app.use(express.json());

// Route đăng nhập
app.post('/api/login', (req, res) => {
  // Xử lý đăng nhập ở đây
  const { username, password } = req.body;

  // Ví dụ kiểm tra đăng nhập (thực tế bạn cần kiểm tra dữ liệu người dùng)
  if (username === 'admin' && password === '1234') {
    return res.json({ message: 'Login successful' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

// Chạy server ở cổng 8000
app.listen(8000, () => {
  console.log('Server running on port 8000');
});
