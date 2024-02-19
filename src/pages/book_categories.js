import SideBar from "../components/sidebar"
import ProductCategory from "../components/product_categories";
import { useEffect, useState } from "../ultilities";
const BookCategories = (id) => {
    console.log(id);
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories/?name')
            .then(res => res.json())
            .then(data => setCategories(data))
        fetch("http://localhost:3000/books/?categories.id=" + id)
            .then((reponsive) => reponsive.json())
            .then((data) => setBooks(data));
    }, []);
    return `
        <div class="d-flex">
        <div class="boxleft text-start">
        ${SideBar(categories)}
        </div>
        <div class="boxright">
          <div class="list-product tw-grid tw-grid-cols-4 tw-gap-[50px] tw-mt-[50px] tw-px-[20px]">
            ${books.map((book) => {
        return ProductCategory(book)
    }).join('')

        }
        
          </div >
        </div >
      </div >
    `
}
export default BookCategories