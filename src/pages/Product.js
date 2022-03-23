import { useEffect } from "react";
import ProductCardList from "../components/product/ProductCardList";
import SideNavBar from "../components/sideNavBar/SideNavBar"

const Product = ({productDisplayList, 
    categoryList, categorySelected, 
    getCategoryProductList, addProductToCart, resolution}) => {
 
    return (
        <div className="container product">
            {!resolution.mobileView ? 
            <SideNavBar 
            categoryList={categoryList}
            categorySelected={categorySelected}
            getCategoryProductList={getCategoryProductList}
            /> : ''}
            <ProductCardList
            productList={productDisplayList}
            addProductToCart={addProductToCart}
            resolution={resolution}
            />
        </div>
        
    )
}

export default Product;