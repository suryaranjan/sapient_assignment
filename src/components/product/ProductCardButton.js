
const ProductCardButton = ({product, addProductToCart, resolution}) => {

    return (
        <div className="productCardButton">
            {!resolution.tabletView ? <span>MRP Rs.{product.price}</span> : ''}
            <button onClick={() => addProductToCart(product)}>
                {resolution.tabletView ? `Buy Now @ MRP Rs.${product.price}` : "Buy Now"}
            </button>
        </div>
    )
}

export default ProductCardButton;