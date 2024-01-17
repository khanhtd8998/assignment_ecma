import Header from "../components/header"
import Footer from "../components/footer";
import BoxLeft from "../components/boxleft";
import BoxRight from "../components/boxright";
const Home = function () {
    return `
    ${Header()}
    ${BoxLeft()}
    ${BoxRight()}
    ${Footer()}
    `
}
export default Home;