import BoxRightNav from "./boxright-nav";
import Product from "./product";
const BoxRight = function () {
    return `
    <div class="boxright">
    <h2 class="mb-4 fw-thin">Nhà Sách Tiki</h2>
    <div class="banner">
      <img
        class="tw-w-full tw-max-h-[400px]"
        src="https://cdn.chanhtuoi.com/uploads/21/09/img-18092021-183717-800-x-400-pixel-3.png"
        alt=""
      />
    </div>
    ${BoxRightNav()}
    <div class="list-product tw-grid tw-grid-cols-4 tw-gap-[100px] row-gap-xxl-5 tw-mt-[50px] tw-px-[20px]">
      ${Product()}
      ${Product()}
      ${Product()}
      ${Product()}
    </div>
  </div>
  </div>
  
    `;

}
export default BoxRight;