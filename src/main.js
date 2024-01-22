import { router, render } from "./ultilities";
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from "./pages/home";
import ChiTietSp from "./pages/ctsp";



router.on('/', function () {
  render("#app", Home)
});
router.on('/ctsp', function () {
  render("#app", ChiTietSp)
});

router.resolve();
