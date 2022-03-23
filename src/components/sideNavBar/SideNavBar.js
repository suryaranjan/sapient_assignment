import { useEffect } from 'react';
import './sideNavBar.scss';

const SideNavBar = ({categoryList = [], categorySelected, getCategoryProductList}) => {

    const updateCategorySelection = (categoryId) => {
        getCategoryProductList(categoryId);
    }

    useEffect(() => {
        if(!categorySelected){
            updateCategorySelection(categoryList[0].id)
        }
    },[])

    return (
        <div className="sideNavBar">
            {categoryList.map(category => {
                return <p onClick={() => updateCategorySelection(category.id)}
                className={`sideNavBarItem ${category.id == categorySelected.id ? 'activeNavItem' : ''}`}
                key={category.id}>{category.name}</p>
            })}
        </div>
    )
}

export default SideNavBar;