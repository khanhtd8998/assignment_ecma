const Product = function () {
  return `
  <div class="product tw-w-[200px]">
  <img
    class="tw-w-full"
    src="https://cafefcdn.com/2017/photo-0-1501496971284.jpg"
    alt=""
  />
  <div
    class="name-product tw-w-full tw-text-start tw-h-[50px] tw-mt-5"
  >
    <p class="tw-text-xl tw-m-0 tw-p-0">
      <a href="/ctsp">Chó sủa nhầm cây, tại sao những gì ta biết về thành</a>
    </p>
  </div>
  <div class="rating tw-mt-10">
    <i class="fa-solid fa-star fa-xs"></i>
    <i class="fa-solid fa-star fa-xs"></i>
    <i class="fa-solid fa-star fa-xs"></i>
    <i class="fa-solid fa-star fa-xs"></i>
    <i class="fa-solid fa-star fa-xs"></i>
    <span class="tw-text-gray-500">|</span>
    <span class="tw-text-gray-500">Đã bán 1000+</span>
  </div>
  <div class="price d-flex align-items-center gap-lg-3">
    <p class="tw-text-xl tw-text-[#FF424E] tw-font-medium tw-p-0">
      112.500 ₫
    </p>
    <p class="discount tw-text-4px tw-text-[#FF424E]">-25%</p>
  </div>
</div>
  
    `
};
export default Product;