import { useState } from "react";

function UpdateDiem() {
  const [studentId, setStudentId] = useState("");
  const [newScore, setNewScore] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (studentId && newScore) {
      alert(`✅ Cập nhật điểm sinh viên ${studentId} thành ${newScore}`);
      setStudentId("");
      setNewScore("");
    }
  };

  return (
    <div>
      <h2>✏️ Sửa Điểm</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Mã sinh viên</label>
          <input
            type="text"
            className="form-control"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Điểm mới</label>
          <input
            type="number"
            className="form-control"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Cập nhật</button>
      </form>
    </div>
  );
}

export default UpdateDiem;
