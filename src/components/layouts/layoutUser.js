import Header from '../header';
import Footer from '../footer';

const UserLayout = function(components) {
    return`
    ${Header()}
    ${components()}
    ${Footer()}
    `
}
export default UserLayout;
