import React from "react";

function MarksDashboard() {
  return (
    <div className="p-4 flex-grow-1 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>📄 Nhập Điểm Sinh Viên</h3>
        <button className="btn btn-success">+ Thêm điểm</button>
      </div>

      <div className="mb-3 d-flex justify-content-end">
        <input type="text" className="form-control w-25" placeholder="Tìm sinh viên..." />
      </div>

      <table className="table table-bordered table-striped bg-white">
        <thead className="table-dark">
          <tr>
            <th>STT</th>
            <th>Tên SV</th>
            <th>Mã SV</th>
            <th>Môn học</th>
            <th>Điểm</th>
            <th>Học kỳ</th>
            <th>Năm học</th>
            <th>Ngày nhập</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>SV001</td>
            <td>Toán</td>
            <td>8.5</td>
            <td>1</td>
            <td>2024-2025</td>
            <td>08/04/2025</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>SV002</td>
            <td>Văn</td>
            <td>7.0</td>
            <td>1</td>
            <td>2024-2025</td>
            <td>08/04/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MarksDashboard;
