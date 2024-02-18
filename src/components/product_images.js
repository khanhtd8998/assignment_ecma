import { isEmpty } from 'lodash'
const ProductImages = function (book) {
  if (isEmpty(book)) {
    return `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `
  }
  return/*html*/`
    <div
    class="d-flex justify-content-center tw-w-[400px] tw-py-[20px] border"
  >
    <img
      id="largeImage"
      class="tw-w-[30rem] tw-h-[26rem]"
      src="${book.images?.[0].base_url}"
      alt=""
    />
  </div>
  <div id="thumbnailContainer" class="d-flex justify-content-center gap-xl-4 my-3">
  ${book.images?.map(function (img) {
    return `
      <img
      class="thumbnail tw-w-[4rem] tw-h-[6rem] "
      src="${img?.small_url}"
      alt=""
    />
    `
  }).join('')}
  </div>
    `;
}
export default ProductImages