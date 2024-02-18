import { useEffect, useState } from "../../ultilities";
import { isEmpty } from 'lodash'
import HeaderAdmin from "./header_admin";
const AddProduct = function () {
    useEffect(() => {
        const btnAdd = document.querySelector('#add-btn');
        btnAdd.addEventListener('click', function (e) {
            e.preventDefault();
            handleAddBook();
        })
    })
    const handleAddBook = () => {
        const nameBook = document.querySelector('#name').value;
        const originalPrice = document.querySelector('#original_price').value;
        const listPrice = document.querySelector('#list_price').value;
        const currentSeller = document.querySelector('#current_seller').value;
        const ratingAverage = document.querySelector('#rating_average').value;
        const descriptionBook = document.querySelector('#description').value;
        const imagesBook = document.querySelector('#images').value;

        const data = {
            "name": nameBook,
            "original_price": originalPrice,
            "list_price": listPrice,
            "current_seller": {
                "price": currentSeller
            },
            "rating_average": ratingAverage,
            "short_description": descriptionBook,
            "images": [
                {
                    "base_url": imagesBook,
                    "small_url": imagesBook
                }
            ]
        }
        fetch("http://localhost:3000/books/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        alert("Success!!!")
        window.location.href = "http://localhost:5173/admin"
    }
    return `
        ${HeaderAdmin()}
        <div class="main">
        <div class="card mt-1">
            <div class="card-header">
                <h5 class="">THÊM SẢN PHẨM</h5>
            </div>
            <div class="card-body pt-1">
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-6">
                        <label  class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Giá</label>
                        <input type="text" class="form-control" id="original_price"  required>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Giá niêm yết</label>
                        <input type="text" class="form-control" id="list_price" required>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Giá khuyến mại</label>
                        <input type="text" class="form-control" id="current_seller" required>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Rating</label>
                        <input type="text" class="form-control" id="rating_average" required>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Mô tả</label>
                        <input type="text" class="form-control" id="description" required>
                    </div>
                    <div class="col-md-6">
                        <label  class="form-label">Ảnh</label>
                        <input type="text" class="form-control" id="images" required>
                    </div>
                    <div class="col-12">
                        <button id="add-btn" class="btn btn-primary" type="submit">Thực hiện</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `
}
export default AddProduct;