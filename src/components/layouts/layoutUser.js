import Header from '../Header';
import Footer from '../Footer';

const UserLayout = function(components) {
    return`
    ${Header()}
    ${components()}
    ${Footer()}
    `
}
export default UserLayout;
