import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"; // <== THÊM DÒNG NÀY
import './ProductList.css';

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function deleteOperation(id) {
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result);
        getData(); // load lại danh sách sau khi xóa
    }

    async function getData() {
        fetch("http://localhost:8000/api/list")
            .then((result) => result.json())
            .then((data) => {
                setData(data);
            });
    }

    return (
        <div>
            <Header />
            <h1>Danh sách sản phẩm</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Chi tiết</th>
                        <th>Ảnh</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <img
                                    src={`http://localhost:8000/${item.file_path}`}
                                    style={{ width: 100 }}
                                    alt="ảnh sản phẩm"
                                />
                            </td>
                            <td>
                                <span
                                    onClick={() => deleteOperation(item.id)}
                                    className="delete"
                                >
                                    Delete
                                </span>
                                {" | "}
                                <Link to={"update/" + item.id}>
                                    <span className="update">Update</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductList;
