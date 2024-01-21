import Header from "../components/header";
import Footer from "../components/footer";
import ProductImages from "../components/product_images";
import ProductPrice from "../components/product_price";
import ProductDescribe from "../components/product_describe";
import Product from "../components/product";

const ChiTietSp = function () {
  return `
    ${Header()}
    <div
    class="d-flex tw-gap-[100px] justify-content-center product-info tw-mx-auto"
  >
    <div class="product-img">
    ${ProductImages()}
    </div>
    <div class="tw-w-[500px] p-3 border-start">
    ${ProductPrice()}
    </div>
  </div>
  <div class="tw-px-[100px] tw-my-[50px]">
    <h4 class="mb-5">Sản Phẩm Tương Tự</h4>
    <div class="tw-grid tw-grid-cols-5 tw-gap-[50px]">
      ${Product()}
    </div>
  </div>
  <div class="tw-px-[100px] tw-mt-[50px] tw-pe-[250px]">
    <h4 class="mb-3">Mô Tả Sản Phẩm</h4>
      ${ProductDescribe()}
    <div class="text-center">
      <button class="my-3 btn btn-outline-primary tw-min-h-[50px] tw-min-w-[300px] tw-rounded-2">Xem Thêm Nội Dung</button>
    </div>
  </div>
    ${Footer()}
    `
}

export default ChiTietSp
