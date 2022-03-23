import ProductCard from "./ProductCard";
import './productCardList.scss';

const ProductCardList = ({productList, addProductToCart, resolution}) => {

    return (
        <div className="productCardListContainer">
            {productList.map(product => (
                <ProductCard key={product.id} product={product} 
                addProductToCart={addProductToCart}
                resolution={resolution}/>
            ))}
        </div>
    )
}

export default ProductCardList;