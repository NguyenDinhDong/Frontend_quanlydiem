import { useState } from "react";
import Header from "./Header";

function SearchProduct() {
    const [data, setData] = useState([]);

    async function search(key) {
        console.warn("Searching:", key);
        let result = await fetch("http://localhost:8000/api/search/" + key);
        result = await result.json();
        setData(result);
    }

    return (
        <div className="col-sm-8 offset-sm-2">
            <Header />
            <h1>Tìm kiếm sản phẩm</h1>
            <input
                type="text"
                onChange={(e) => search(e.target.value)}
                className="form-control"
                placeholder="Nhập tên sản phẩm..."
            />
            <br />

            {data.length > 0 ? (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Mô tả</th>
                            <th>Hình ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img
                                        src={`http://localhost:8000${item.image}`}
                                        alt={item.name}
                                        style={{ width: "100px" }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Không có sản phẩm nào</p>
            )}
        </div>
    );
}

export default SearchProduct;