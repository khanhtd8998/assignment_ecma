import Header from "../components/header"
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import Banner from "../components/banner";
import Product from "../components/product";
const Home = function () {
    return /*html */`
    ${Header()}
    <div class="d-flex">
        <div class="boxleft text-start">
        ${SideBar()}
        </div>
        <div class="boxright">
            ${Banner()}
          <div
            class="list-product tw-grid tw-grid-cols-4 tw-gap-[100px] row-gap-xxl-5 tw-mt-[50px] tw-px-[20px]"
          >
            ${Product()}
            ${Product()}
            ${Product()}
            ${Product()}
          
          </div>
        </div>
      </div>
    ${Footer()}
    `
}
export default Home;