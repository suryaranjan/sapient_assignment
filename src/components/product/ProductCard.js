import ProductCardButton from "./ProductCardButton"

const ProductCard = ({product, addProductToCart, resolution}) => {
    return (
        <div className="productCard">
            <h3>{product.name}</h3>
            <div className="productCardImage">
                <img src={product.imageURL}/>
                <p>{product.description}</p>
            </div>
            
            <ProductCardButton product={product} addProductToCart={addProductToCart} resolution={resolution}/>
        </div>
    )
}

export default ProductCard;