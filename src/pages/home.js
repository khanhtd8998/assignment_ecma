import { useEffect, useState } from "../ultilities";
import SideBar from "../components/sidebar";
import Banner from "../components/banner";
import Product from "../components/product";
const Home = function () {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((reponsive) => reponsive.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return /*html */`
    <div class="d-flex">
        <div class="boxleft text-start">
        ${SideBar()}
        </div>
        <div class="boxright">
            ${Banner()}
          <div
            class="list-product tw-grid tw-grid-cols-4 tw-gap-[50px] tw-mt-[50px] tw-px-[20px]"
          >
            ${books.map(function (book) {
    return Product(book)
  }).join("")}
          
          </div>
        </div>
      </div>
    
    `
}
export default Home;