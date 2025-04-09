function Dashboard() {
    return (
      <div>
        <h2>📊 Thống kê điểm số</h2>
        <p>Chào mừng bạn đến với hệ thống quản lý điểm sinh viên!</p>
  
        <div className="row">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Tổng số sinh viên</h5>
                <p className="card-text fs-4">120</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Môn học</h5>
                <p className="card-text fs-4">5</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Điểm đã nhập</h5>
                <p className="card-text fs-4">350</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  