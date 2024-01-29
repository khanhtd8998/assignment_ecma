import { router, render } from "./ultilities";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import UserLayout from "./components/layouts/layoutUser";
import Home from "./pages/home";
import ChiTietSp from "./pages/ctsp";



router.on('/', function () {
  render("#app", () => UserLayout(Home))
});
router.on('/ctsp/:id', function ({data}) {
  render("#app", () => UserLayout(() => ChiTietSp(data.id)))
});


router.resolve();
