import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState("");

    useEffect(() => {
        getProductDetails();
    }, []);

    async function getProductDetails() {
        let result = await fetch("http://localhost:8000/api/product/" + id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setFilePath(result.file_path);
    }

    async function updateProduct() {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        if (file) formData.append("file", file);

        let result = await fetch("http://localhost:8000/api/update/" + id + "?_method=PUT", {
            method: "POST",
            body: formData,
        });

        result = await result.json();
        console.warn(result);
        navigate("/"); // quay lại trang danh sách
    }

    return (
        <div>
            <Header />
            <h1>Cập nhật sản phẩm</h1>
            <div className="col-sm-6 offset-sm-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tên sản phẩm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Giá"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Chi tiết"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                {filePath && (
                    <img
                        style={{ width: 100 }}
                        src={`http://localhost:8000/${filePath}`}
                        alt="Ảnh sản phẩm"
                    />
                )}
                <br /> <br />
                <button onClick={updateProduct} className="btn btn-primary">
                    Cập nhật sản phẩm
                </button>
            </div>
        </div>
    );
}

export default UpdateProduct;
    