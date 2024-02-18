import { useEffect, useState } from "../ultilities";

const Header = function () {
  const userLogin = localStorage.getItem('user');
  const isLoggedIn = userLogin ? true : false;
  console.log(isLoggedIn);
  // useEffect(() => {
  //   const logoutBtn = document.querySelector('#logout');
  //   logoutBtn.addEventListener('click', () => {
  //     localStorage.removeItem('user');
  //     window.location.href = "http://localhost:5173/";
  //     console.log("123123");
  //   })
  // },[]);

  return /*html*/ `
  <header class="tw-grid tw-grid-cols-3 tw-items-center tw-justify-evenly">
  <div class="d-flex justify-content-end">
    <a href="/">
    <img
      class="tw-w-[110px] tw-h-[90px] tw-me-48"
      src="/imgs/tikilogo.png"
    />
  </div></a>

  <div class="search tw-w-96">
    <input type="text" class="tw-w-96 tw-p-1 searchTerm" />
    <button
      type="submit"
      class="searchButton tw-bg-[#0D5Cb6] hover:tw-bg-blue-500 tw-transition-colors tw-py-1 tw-text-white px-3"
    >
      <i class="fa fa-search me-2"></i>
      Tìm Kiếm
    </button>
  </div>
  <div
    class="user tw-grid tw-grid-cols-2 tw-items-center tw-gap-32 d-flex justify-content-start ps-2 ms-2 text-white"
  >
    <div
      class="info tw-grid tw-grid-cols-2 tw-items-center tw-justify-center tw-w-16"
    >
      <div class="tw-w-10">
        <i
          class="fa-regular fa-user fa-2xl tw-w-full"
          style="color: #fff"
        ></i>
      </div>
      <div class="login tw-w-40">
      ${isLoggedIn
      ? `
        <a href="">Tài khoản</a>/
        <a href="/admin">Quản trị</a>
        <button id="logout">Đăng xuất</button>

        `
      : `
        <a href="/login">Đăng nhập</a>/
        <a href="">Đăng ký</a>
        <a href="">Tài khoản</a>

        `
    }
      </div>
    </div>
    <div class="cart">
      <i
        class="fa-solid fa-cart-shopping fa-flip fa-2xl"
        style="color: #ffffff"
      ></i>
      <a href="">Giỏ hàng</a>
    </div>
  </div>
</header>
<main class="mt-4">
  `;
}

export default Header;