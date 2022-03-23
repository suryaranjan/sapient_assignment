import CategoryCardDescription from "./CategoryCardDescription";
import CategoryCardImage from "./CategoryCardImage";

const CategoryCard = ({category, position, getCategoryProductList}) => {
    const alignment = position%2 == 0;
    return(
        <div className="container categoryCard">
            {alignment ? 
                <>
                    <CategoryCardImage category={category}/>
                    <CategoryCardDescription category={category} getCategoryProductList={getCategoryProductList}/> 
                </>:
                <>
                    <CategoryCardDescription category={category} getCategoryProductList={getCategoryProductList}/> 
                    <CategoryCardImage category={category} />
                </>
            }
        </div>
    )
}

export default CategoryCard;