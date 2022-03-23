import { Link } from "react-router-dom"
import ROUTES from "../../constants/routes";

const CategoryCardDescription = ({category, getCategoryProductList}) => {
    return (
        <div className="categoryCardDescription">
            <p>{category.name}</p>
            <span>{category.description}</span>
            <Link to={ROUTES.PRODUCT} onClick={() => getCategoryProductList(category.id)}>{`Explore ${category.key}`}</Link>
        </div>
    )
}

export default CategoryCardDescription;