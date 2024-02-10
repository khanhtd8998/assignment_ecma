import { router, render } from "./ultilities";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import UserLayout from "./components/layouts/layoutUser";
import Home from "./pages/home";
import ChiTietSp from "./pages/ctsp";
import Dashboard from "./pages/dashboard";
import AddProduct from "./components/admin/add_product";
import UpdateProduct from "./components/admin/update_product";



router.on('/', function () {
  render("#app", () => UserLayout(Home))
});
router.on('/ctsp/:id', function ({ data }) {
  render("#app", () => UserLayout(() => ChiTietSp(data.id)))
});
router.on(
  {
    '/admin': function () {
      render("#app", () => Dashboard())
    },
    '/admin/add': function () {
      render("#app", () => AddProduct())
    },
    '/admin/update/:id': function ({ data }) {
      render("#app", () => UpdateProduct(data.id))
    }
  }
);



router.resolve();
