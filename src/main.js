import { router, render } from "./ultilities";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from "./pages/home";

router.on('/', function () {
  render("#app", Home)
});
router.resolve();
