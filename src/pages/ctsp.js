import ProductImages from "../components/product_images";
import ProductPrice from "../components/product_price";
import ProductDescribe from "../components/product_describe";
import Product from "../components/product";
import data from "../../db.json" assert {type: 'json'}

const ChiTietSp = function (id) {
  const book = data.books.find(book => book.id === +id);
  // console.log(book);
  if (!book) return null;
  return `
    <div
    class="d-flex tw-gap-[100px] justify-content-center product-info tw-mx-auto"
  >
    <div class="product-img">
    ${ProductImages(book)}
    </div>
    <div class="tw-w-[500px] p-3 border-start">
    ${ProductPrice(book)}
    </div>
  </div>
  <div class="tw-px-[100px] tw-my-[50px]">
    <h4 class="mb-5">Sản Phẩm Tương Tự</h4>
    <div class="tw-grid tw-grid-cols-5 tw-gap-[50px]">
      ${Product(book)}
    </div>
  </div>
  <div class="tw-px-[100px] tw-mt-[50px] tw-pe-[250px]">
    <h4 class="mb-3">Mô Tả Sản Phẩm</h4>
      ${ProductDescribe(book)}
    <div class="text-center">
      <button class="my-3 btn btn-outline-primary tw-min-h-[50px] tw-min-w-[300px] tw-rounded-2">Xem Thêm Nội Dung</button>
    </div>
  </div>
    `
}

export default ChiTietSp
