import { useState } from "react";

function InputDiem() {
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName && subject && score) {
      alert(`✅ Nhập điểm cho ${studentName} môn ${subject}: ${score}`);
      setStudentName("");
      setSubject("");
      setScore("");
    }
  };

  return (
    <div>
      <h2>📝 Nhập Điểm</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tên sinh viên</label>
          <input
            type="text"
            className="form-control"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Môn học</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Điểm</label>
          <input
            type="number"
            className="form-control"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Lưu điểm</button>
      </form>
    </div>
  );
}

export default InputDiem;
