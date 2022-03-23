import CategoryCard from './CategoryCard';
import './categoryCard.scss';

const CategoryCardList = ({categoryList, getCategoryProductList}) => {

    return (
        <div className='cardListContainer'>
            {categoryList.map((category, index) => {
                return <CategoryCard key={category.id} 
                            category={category} 
                            position={index} 
                            getCategoryProductList={getCategoryProductList}
                        />
            })}
        </div>
    )
}

export default CategoryCardList;