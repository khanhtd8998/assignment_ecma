import { useEffect, useState } from "../ultilities";
import HeaderAdmin from "../components/admin/header_admin";
const Dashboard = function () {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then((reponsive) => reponsive.json())
            .then((data) => setBooks(data));
    }, [])
    useEffect(() => {
        const btnDelete = document.querySelectorAll('.btn-delete')
        btnDelete.forEach((button) => {
            button.addEventListener("click", () => {
                const confirmAlert = confirm("Are you sure you want to delete this book?");
                if (confirmAlert) {
                    const id = button.dataset.id;
                    handleDeleteProduct(id);
                }
            })
        })
    })
    const handleDeleteProduct = (id) => {
        fetch("http://localhost:3000/books/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
        location.reload();
    }
    return/*html*/`
        ${HeaderAdmin()}
        <table class="table text-center">
            <h1 class="tw-text-2xl fs-3 text-center my-4">Danh sách sản phẩm</h1>
            <thead class="table-light">
                <th class="tw-w-[5%]">STT</th>
                <th class="tw-w-[20%]">Tên</th>
                <th class="tw-w-[10%]">Ảnh</th>
                <th class="">Giá</th>
                <th class="tw-w-[50%]">Mô tả</th>
                <th class="tw-w-[10%]">Hành động</th>
            </thead>
            <tbody>
                ${books.map((book, index) =>
        `                
                    <tr>
                        <td>${index + 1}</td>
                        <td>${book.name}</td>
                        <td><img class="tw-w[100px]" src="${book.images[0].base_url}"/></td>
                        <td>${book.list_price}</td>
                        <td>${book.short_description}</td>
                        <td>
                            <a href="./admin/update/${book.id}" class="btn btn-warning">SỬA</a>
                            <button data-id="${book.id}" class="btn btn-danger btn-delete">XÓA</button>
                        </td>
                    </tr>
                `
    ).join("")}

            </tbody>
        </table>
    `
}
export default Dashboard;