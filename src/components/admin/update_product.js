import { useEffect, useState } from "../../ultilities";
import { isEmpty } from 'lodash'
import HeaderAdmin from "./header_admin";
const UpdateProduct = (id) => {
    const [book, setBook] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/books/" + id)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [])
    console.log(book);
    useEffect(() => {
        const btnUpdate = document.querySelector('#update-btn');
        console.log(btnUpdate);
        btnUpdate.addEventListener("click", (e) => {
            e.preventDefault();
            handleUpdateBook()
        })
    })
    if (isEmpty(book)) {
        return `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `
    }
    const handleUpdateBook = () => {
        const nameBook = document.querySelector('#name').value;
        const originalPrice = document.querySelector('#original_price').value;
        const listPrice = document.querySelector('#list_price').value;
        const currentSeller = document.querySelector('#current_seller').value;
        const ratingAverage = document.querySelector('#rating_average').value;
        const descriptionBook = document.querySelector('#description').value;

        console.log(nameBook);
        const data = {
            "name": nameBook,
            "original_price": originalPrice,
            "list_price": listPrice,
            "current_seller": {
                "price": currentSeller
            },
            "rating_average": ratingAverage,
            "short_description": descriptionBook
        }
        fetch("http://localhost:3000/books/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        window.location.href = "http://localhost:5173/admin"
    }
    const formatPrice = (price = "") => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return /*html*/`
        ${HeaderAdmin()}
        <div class="main">
            <div class="card mt-1">
                <div class="card-header">
                    <h5 class="">Cập nhật sản phẩm</h5>
                </div>
                <div class="card-body pt-1">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-md-9">
                                <div class="col-md-12">
                                    <label for="validationCustom01" class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" id="name" value="${book.name}">
                                </div>
                                <div class="row my-3">
                                    <div class="col-md-6 my-3">
                                    <label for="validationCustom02" class="form-label">Giá</label>
                                    <input type="text" class="form-control" id="original_price"  value="${book.original_price}">
                                </div>
                                <div class="col-md-6 my-3">
                                    <label for="validationCustomUsername" class="form-label">Giá niêm yết</label>
                                    <input type="text" class="form-control" id="list_price" value="${book.list_price}">
                                </div>
                                <div class="col-md-6 my-3">
                                    <label for="validationCustom03" class="form-label">Giá khuyến mại</label>
                                    <input type="text" class="form-control" id="current_seller" value="${book.current_seller?.price}">
                                </div>
                                <div class="col-md-6 my-3">
                                    <label for="validationCustom04" class=  "form-label">Rating</label>
                                    <input type="text" class="form-control" id="rating_average" value="${book.rating_average}">
                                </div>
                                </div>

                                <div class="col-md-12">
                                    <label for="validationCustom05" class="form-label">Mô tả</label>
                                    <textarea class="form-control"   id="description">${book.short_description}</textarea>
                                </div>
                                <div class="col-md-12">
                                    <button id="update-btn" class="btn btn-primary my-3" type="submit">Cập nhật</button>
                                </div>
                            </div>
                            <div class="col-md-2 m-5 mt-0">
                                <div class="col-md-12">
                                    <label for="validationCustom05" class="form-label">Hình ảnh</label>
                                    <img class="tw-w-[380px] tw-h-[380px]" src="${book.images?.[0].base_url}"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}
export default UpdateProduct;