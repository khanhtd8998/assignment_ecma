const SideBar = function (categories) {
  return `
    <p class="tw-font-medium">DANH MỤC SẢN PHẨM</p>
    <ul class="p-0">
    ${categories.map(function (value) {
    return `
              <li class="tw-my-2">
                <a class="tw-appearance-none" href="/books/cat/${value.id}">${value.name}</a>
              </li>
        `
  }).join("")
    }
    </ul>
    `;
}
export default SideBar;