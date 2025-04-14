import { useState } from "react";
import Header from "./Header";

function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null); // ảnh xem trước
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct() {
        if (!name || !price || !description || !file) {
            alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);

        let result = await fetch("http://localhost:8000/api/addproduct", {
            method: "POST",
            body: formData,
        });

        if (result.ok) {
            alert("Sản phẩm đã được thêm!");
            // reset form
            setName("");
            setPrice("");
            setDescription("");
            setFile(null);
            setPreview(null);
        } else {
            alert("Thêm thất bại!");
        }
    }

    // Xử lý khi chọn file
    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    }

    return (
        <div>
            <Header />
            <h1>Thêm sản phẩm</h1>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Tên sản phẩm"
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Giá"
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Mô tả"
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                />
                <br />
                {preview && (
                    <div style={{ marginBottom: 20 }}>
                        <p>Xem trước ảnh:</p>
                        <img
                            src={preview}
                            alt="Preview"
                            style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
                        />
                    </div>
                )}
                <button className="btn btn-primary" onClick={addProduct}>
                    Thêm sản phẩm
                </button>
            </div>
        </div>
    );
}

export default AddProduct;
