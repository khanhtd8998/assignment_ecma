import { useEffect, useState } from "../ultilities";
const Dashboard = function () {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then((reponsive) => reponsive.json())
            .then((data) => setBooks(data));
    }, [])
    console.log(books);
    return/*html*/`
        
        <table class="table text-center">
            <h1 class="tw-text-2xl fs-1 text-center my-4">Trang quản trị</h1>
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
                            <a class="btn btn-success">SỬA</a>
                            <a class="btn btn-danger">XÓA</a>
                        </td>
                    </tr>
                    `
    ).join("")}

            </tbody>
        </table>
    `
}
export default Dashboard;