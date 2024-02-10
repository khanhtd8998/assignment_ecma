const HeaderAdmin = function () {
    return `
            <nav class="navbar navbar-expand-lg  tw-bg-[#1a94ff]">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="/admin">Trang chủ</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="/admin/add">Thêm</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="/admin" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sách
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="./admin/add">Thêm</a></li>
                        <li><a class="dropdown-item" href="#">Danh sách</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" aria-disabled="true" href="/">Về Website</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search">
                    <button class="btn btn-outline-dark tw-w-[100x]" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
            </div>
        </nav>
    `
}
export default HeaderAdmin