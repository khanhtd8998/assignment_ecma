const Product = function (book) {
  const calculateRatingStars = (rating) => {
    // Assuming rating is a number between 1 and 5 representing the number of stars
    const stars = Array.from({ length: rating }, (_, index) => index + 1);
    return (stars.length == 0) ? `<i class="fa-solid fa-star fa-xs"></i>` : stars.map(() => '<i class="fa-solid fa-star fa-xs"></i>').join(' ');
  };
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return /*html */`
  <div class="product tw-w-[200px]">
  <a href="/ctsp/${book.id}">
      <img
        class="tw-w-full tw-h-[12rem]"
        src="${book.images[0].base_url}"
        alt=""
      />
  </a>

  <div
    class="name-product tw-w-full tw-text-start tw-h-[50px] tw-mt-5"
  >
    <p class="tw-text-xl tw-m-0 tw-p-0">
      <a href="/ctsp/${book.id}">${book.name.substring(0, 50)}</a>
    </p>
  </div>
  <div class="rating tw-mt-10">
    ${calculateRatingStars(book.rating_average)}
    <span class="tw-text-gray-500">|</span>
    <span class="tw-text-gray-500">Đã bán 1000+</span>
  </div>
  <div class="price d-flex align-items-center gap-lg-3">
    <p class="tw-text-xl tw-text-[#FF424E] tw-font-medium tw-p-0">
      ${formatPrice(book.current_seller.price)}
    </p>
    <p class="discount tw-text-4px tw-text-[#FF424E]">
    -${Math.floor((1 - book.current_seller.price / book.original_price) * 100)}%
    </p>
  </div>
</div>
    `
};
export default Product;