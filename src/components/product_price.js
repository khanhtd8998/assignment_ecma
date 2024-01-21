const ProductPrice = function() {
    return`
    <div class="div">
    <h3>Càng kỷ luật, càng tự do</h3>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <span class="tw-text-gray-500 mx-2">(Xem 2942 đánh giá)</span>
    <span class="tw-text-gray-500">|</span>
    <span class="tw-text-gray-500">Đã bán 1000+</span>
  </div>
  <div class="pb-2 border-bottom">
    <div
      class="price d-flex align-items-center gap-lg-3 my-2 p-1 tw-bg-[#FAFAFA]"
    >
      <p class="tw-text-[40px] tw-text-[#FF424E] tw-font-medium tw-p-0">
        112.500 ₫
      </p>
      <p class="tw-text-xl tw-text-[#ccc] tw-font-medium tw-pb-1">
        <del>112.500 ₫</del>
      </p>
      <p
        class="discount tw-text-xl tw-text-[#FF424E] tw-font-medium tw-pb-2"
      >
        -25%
      </p>
    </div>
  </div>
  <div class="py-5 border-bottom">
    <div class="quantity">
      <p class="tw-text-xl tw-font-medium">Số Lượng</p>
      <button type="button" class="decrease py-2 px-3 border rounded-2">
        <i class="fa-solid fa-minus"></i>
      </button>
      <input class="quantity_input border py-2 px-3 tw-w-[50px]" type="number" value="1" min="1" />
      <button type="button" class="increase py-2 px-3 border rounded-2">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
    <button class="my-3 tw-min-h-[50px] tw-min-w-[300px] tw-text-white tw-bg-[#FF3945] rounded-2">Chọn mua</button>
  </div>
    `
}
export default ProductPrice