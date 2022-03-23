import CategoryType from "./categories";
import ROUTES from "./routes";

const dropdownMenu = [
    {label: "Home", value: ROUTES.HOME},
    {label: "Product", value: ROUTES.PRODUCT}
]

const createDropdown = () => {
    CategoryType.map(category => {
        dropdownMenu.push({
            label: category.name,
            value: ROUTES.PRODUCT,
            categoryId: category.id
        })
    })
}
createDropdown();
dropdownMenu.push(
    {
        label: "SignIn", value: ROUTES.SIGNIN
    })
dropdownMenu.push({
    label: "Register", value: ROUTES.REGISTER
}
)

export default dropdownMenu;
