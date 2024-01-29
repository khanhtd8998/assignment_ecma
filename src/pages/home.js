import SideBar from "../components/sidebar";
import Banner from "../components/banner";
import Product from "../components/product";
import data from "../../db.json" assert {type: 'json'}
const Home = function () {
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
            ${data.books.map(function (book) {
              return Product(book)
            }).join("")}
          
          </div>
        </div>
      </div>
    
    `
}
export default Home;