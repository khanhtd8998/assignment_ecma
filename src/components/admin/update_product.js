import { useEffect, useState } from "../../ultilities";
import HeaderAdmin from "./header_admin";
const UpdateProduct = (id) => {
    const [book, setBook] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/books/" + id)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [])
    console.log(book);

    return `
        ${HeaderAdmin()}
        <div class="main">
            <div class="card mt-1">
                <div class="card-header">
                    <h5 class="">Cập nhật sản phẩm</h5>
                </div>
                <div class="card-body pt-1">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-6">
                            <label for="validationCustom01" class="form-label">Tên sản phẩm</label>
                            <input type="text" class="form-control" id="" value="${book.}">
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom02" class="form-label">Giá</label>
                            <input type="text" class="form-control" id=""  value="${book.}">
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustomUsername" class="form-label">Giá niêm yết</label>
                            <input type="text" class="form-control" id="" value="${book.}">
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">Giá khuyến mại</label>
                            <input type="text" class="form-control" id="" value="${book.}">
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom04" class=  "form-label">Rating</label>
                            <input type="text" class="form-control" id="" value="${book.}">
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom05" class="form-label">Mô tả</label>
                            <input type="text" class="form-control" id="" value="${book.}">
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}
export default UpdateProduct;